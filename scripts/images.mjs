// 원본 사진(사이트/폴더/*.jpg) → 웹용 WebP로 변환.
//  - 긴 변 1600px, 품질 78
//  - EXIF·GPS 등 메타데이터 전부 제거 (고객 집 위치 정보 보호)
//  - 파일명을 키워드 슬러그로 변경: <slug>-01.webp, <slug>-02.webp ...
//  - 카드용 썸네일(긴 변 800px)도 함께 생성: <slug>-01-thumb.webp
// 사용법: node scripts/images.mjs [SITE]   (기본 safetybar)
//  - 원본 위치: 자료/<SITE>/ (안전바만 예전 위치인 사이트/)
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SITE = process.argv[2] ?? 'safetybar';
const SRC = path.resolve(SITE === 'safetybar' ? '사이트' : path.join('자료', SITE));
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
};
const folderSlug = folderSlugs[SITE] ?? {};

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
await import('node:fs/promises').then((fs) => fs.writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2)));
console.log(`\n${manifest.length}장 변환 완료 → ${OUT}`);
