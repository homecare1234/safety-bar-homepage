// 원본 사진(사이트/폴더/*.jpg) → 웹용 WebP로 변환.
//  - 긴 변 1600px, 품질 78
//  - EXIF·GPS 등 메타데이터 전부 제거 (고객 집 위치 정보 보호)
//  - 파일명을 키워드 슬러그로 변경: <slug>-01.webp, <slug>-02.webp ...
//  - 카드용 썸네일(긴 변 800px)도 함께 생성: <slug>-01-thumb.webp
// 사용법: node scripts/images.mjs [SITE] [원본 폴더]   (기본 safetybar)
//  - 원본 위치: 자료/<SITE>/ (안전바만 예전 위치인 사이트/)
//  - 원본 폴더를 따로 주면(예: 자료/safetybar-cases) 그 폴더만 변환하고, 목록은 manifest-<폴더 이름>.json에 따로 쓴다
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SITE = process.argv[2] ?? 'safetybar';
const SRC_ARG = process.argv[3];
const SRC = path.resolve(SRC_ARG ?? (SITE === 'safetybar' ? '사이트' : path.join('자료', SITE)));
const OUT = path.resolve('public/images', SITE);

// 원본 폴더 이름 → 파일명 슬러그 (SEO: URL과 파일명에 키워드가 들어간다)
const folderSlugs = {
  safetybar: {
    '1': 'bathroom-safety-bar',
    '세면대': 'sink-safety-bar',
    '욕실 욕조': 'bathtub-safety-bar',
    '소변기': 'urinal-safety-bar',
    '계단안전바': 'stairs-safety-bar',
    '핸드레일': 'handrail',
    '안전가드': 'bed-safety-guard',
  },
  'picture-rail': {
    '액자레일': 'picture-rail',
    '사무실 액자레일': 'office-picture-rail',
    '가족사진 액자레일': 'family-photo-picture-rail',
    '웨딩사진 액자레일': 'wedding-photo-picture-rail',
    '전시, 갤러리 액자레일': 'gallery-picture-rail',
  },
  fan: {
    '환풍기': 'bathroom-fan',
    '휴젠뜨': 'himpel-hugente-fan',
    '티오람': 'tioram-fan',
  },
  // 원본은 «새 폴더 (N)»이라 현장마다 후드 모양으로 이름을 붙여 옮겼다 (현장 하나 = 폴더 하나)
  hood: {
    '슬림형 주방후드': 'slim-kitchen-hood', // 새 폴더
    '슬림형 렌지후드': 'slim-range-hood', // 새 폴더 (14)
    '침니형 주방후드': 'chimney-kitchen-hood', // 새 폴더 (4)
    '침니형 렌지후드': 'chimney-range-hood', // 새 폴더 (8)
    '주방후드': 'kitchen-hood', // 새 폴더 (2)
    '렌지후드': 'range-hood', // 새 폴더 (3)
    '주방후드 교체': 'kitchen-hood-replacement', // 새 폴더 (5)
    '렌지후드 교체': 'range-hood-replacement', // 새 폴더 (6)
    '가스레인지 후드': 'gas-range-hood', // 새 폴더 (13)
  },
  // 안전바 시공사례(2026-10-27 받은 zip). 원본 폴더 «새 폴더 (N)»를 사진을 보고 현장 모양으로 이름 붙였다 (현장 하나 = 폴더 하나 = 사례 페이지 하나)
  'safetybar-cases': {
    '계단': 'villa-stairs-handrail',
    '계단1': 'outdoor-stairs-handrail',
    '새 폴더': 'toilet-shower-safety-bar',
    '새 폴더 (2)': 'bathtub-hallway-safety-bar',
    '새 폴더 (3)': 'toilet-entrance-safety-bar',
    '새 폴더 (4)': 'sink-toilet-folding-safety-bar',
    '새 폴더 (5)': 'toilet-folding-safety-bar',
    '새 폴더 (6)': 'old-bathroom-safety-bar',
    '새 폴더 (7)': 'bathtub-l-safety-bar',
    '새 폴더 (8)': 'bathtub-door-safety-bar',
    '새 폴더 (9)': 'shower-booth-toilet-safety-bar',
    '새 폴더 (10)': 'narrow-bathroom-safety-bar',
    '새 폴더 (11)': 'pedestal-sink-safety-bar',
    '새 폴더 (12)': 'shower-chair-safety-bar',
    '새 폴더 (13)': 'bathroom-entrance-safety-bar',
    '새 폴더 (14)': 'hallway-bathroom-handrail',
    '새 폴더 (15)': 'public-restroom-safety-bar',
  },
  // 원본은 한 폴더(사각싱크볼)에 80장이 섞여 있어, 카톡 보낸 시각·주방 모양으로 현장을 나눠 키워드 이름을 붙였다
  sink: {
    '사각싱크볼 교체': 'square-sink-replacement',
    '사각싱크볼 설치': 'square-sink-installation',
    '사각싱크볼 시공': 'square-sink-work',
    '싱크대 개수대 교체': 'sink-basin-replacement',
    '주방 개수대 교체': 'kitchen-sink-replacement',
    '싱크대 사각볼 교체': 'square-bowl-replacement',
    '사각싱크대 교체': 'square-kitchen-sink',
    '사각개수대 교체': 'square-basin-replacement',
    '설거지통 교체': 'dish-sink-replacement',
    '싱크대볼 교체': 'sink-bowl-replacement',
    '주방 사각볼 교체': 'kitchen-square-bowl',
  },
  // 싱크대 문짝 교체(2026-10-28 받은 zip). 원본 «새 폴더 (N)»을 사진을 보고 현장 모양으로 이름 붙였다 (현장 하나 = 폴더 하나)
  sinkdoor: {
    '원룸 싱크대 문짝 교체': 'oneroom-sink-door', // 새 폴더
    '싱크대 문짝 들뜸 교체': 'peeling-sink-door', // 새 폴더 (10)
    '하이그로시 싱크대 문짝 교체': 'high-gloss-sink-door', // 새 폴더 (11)
    '아파트 싱크대 문짝 교체': 'apartment-sink-door', // 새 폴더 (12)
    '주방 상하부장 문짝 교체': 'kitchen-cabinet-door', // 새 폴더 (13)
    '입주 전 싱크대 문짝 교체': 'move-in-sink-door', // 새 폴더 (14)
    '블랙 싱크대 문짝 교체': 'black-sink-door', // 새 폴더 (15)
    '오피스텔 싱크대 문짝 교체': 'officetel-sink-door', // 새 폴더 (16)
    '주방 문짝 교체': 'kitchen-door-replacement', // 새 폴더 (17)
    '싱크대 상부장 문짝 교체': 'upper-cabinet-door', // 새 폴더 (18)
    '주방 리폼': 'kitchen-reform', // 새 폴더 (2)
    '싱크대 도어 교체': 'sink-door-replacement', // 새 폴더 (3)
    '싱크대 경첩 교체': 'sink-hinge-replacement', // 새 폴더 (4)
    '싱크대 부분 리폼': 'sink-partial-reform', // 새 폴더 (5)
    '싱크대 리폼': 'sink-reform', // 새 폴더 (6)
    '세면대 하부장 문짝 교체': 'vanity-cabinet-door', // 새 폴더 (7)
    '오래된 싱크대 문짝 교체': 'old-sink-door', // 새 폴더 (8)
    '싱크대 하부장 문짝 교체': 'lower-cabinet-door', // 새 폴더 (9)
  },
  // 반듯한 홈케어 액자레일(2026-10-29 받은 zip «액자1~21»). 현명한 홈케어 액자레일에 이미 쓴 사진(같거나 거의 같은 것 101장)은
  // 자료/bandeut-picture-rail-겹침/ 으로 빼 두고 나머지만 변환한다. 파일 이름도 «-art-rail»로 현명한 홈케어(«-picture-rail»)와 다르게
  'bandeut-picture-rail': {
    '전시장 액자레일': 'exhibition-hall-art-rail', // 액자1
    '거실 아크릴 액자': 'acrylic-living-art-rail', // 액자2
    '현관 복도 캔버스': 'entrance-hallway-art-rail', // 액자3
    '사무실 복도 그림': 'office-hallway-art-rail', // 액자4
    '거실 가족사진': 'family-portrait-art-rail', // 액자5
    '간접조명 거실': 'cove-light-art-rail', // 액자6
    '사무실 개인실 그림': 'private-office-art-rail', // 액자7
    '금테 풍경화': 'gold-frame-art-rail', // 액자8
    '소파 위 캔버스': 'sofa-canvas-art-rail', // 액자9
    '여섯 폭 동양화': 'oriental-painting-art-rail', // 액자10
    '건물 복도 대형 유화': 'corridor-oil-painting-art-rail', // 액자11
    '유리 회의실': 'glass-meeting-room-art-rail', // 액자12
    '과일 그림': 'fruit-painting-art-rail', // 액자13
    '침실 사진 액자': 'bedroom-photo-art-rail', // 액자14
    '회의실 레일만': 'meeting-room-art-rail', // 액자15
    '아파트 거실 여러 그림': 'apartment-living-art-rail', // 액자16
    '방 몰딩 포스터': 'poster-room-art-rail', // 액자17
    '큰 그림 두 점': 'large-artwork-art-rail', // 액자18
    '가로 긴 캔버스': 'panorama-canvas-art-rail', // 액자19
    '꽃 그림': 'flower-painting-art-rail', // 액자20
    '입주 전 빈 방': 'move-in-art-rail', // 액자21
  },
};
const folderSlug = folderSlugs[SRC_ARG ? path.basename(SRC) : SITE] ?? {};

await mkdir(OUT, { recursive: true });
const manifest = [];
for (const folder of await readdir(SRC)) {
  const dir = path.join(SRC, folder);
  if (!(await stat(dir)).isDirectory()) continue;
  const slug = folderSlug[folder.normalize('NFC')] ?? folder.normalize('NFC').replace(/\s+/g, '-');
  const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png|heic)$/i.test(f)).sort();
  let i = 0;
  for (const f of files) {
    i += 1;
    const n = String(i).padStart(2, '0');
    const input = path.join(dir, f);
    const base = `${slug}-${n}`;
    const img = sharp(input).rotate(); // EXIF 회전값을 픽셀에 반영한 뒤 메타데이터는 버린다
    await img.clone().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(OUT, `${base}.webp`));
    await img.clone().resize({ width: 800, height: 600, fit: 'cover' }).webp({ quality: 74 }).toFile(path.join(OUT, `${base}-thumb.webp`));
    manifest.push({ folder, original: f, file: `/images/${SITE}/${base}.webp`, thumb: `/images/${SITE}/${base}-thumb.webp` });
    process.stdout.write(`${folder}/${f} → ${base}.webp\n`);
  }
}
await import('node:fs/promises').then((fs) => fs.writeFile(path.join(OUT, SRC_ARG ? `manifest-${path.basename(SRC)}.json` : 'manifest.json'), JSON.stringify(manifest, null, 2)));
console.log(`\n${manifest.length}장 변환 완료 → ${OUT}`);
