// 디자인 묶음(theme)마다 다른 마크(파비콘) 만들기. 검색 결과 제목 옆, 브라우저 탭에 뜨는 작은 그림이다.
// 기본(현명한 홈케어)은 public/favicon/ 의 파란 사각 아이콘 그대로 두고,
// theme이 있는 사이트는 public/themes/<theme>/ 에 따로 만든다 → Seo.astro가 그걸 쓰고, 빌드 때 dist/favicon.ico도 바꿔 끼운다.
// 사용법: node scripts/make-favicon.mjs warm
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const THEME = process.argv[2] ?? 'warm';

// warm(반듯한 홈케어): 짙은 초록 원 + 크림색 지붕 선 + 그 아래 반듯한 가로줄(수평)
// 현명한 홈케어 마크(파란 둥근 사각, 집 + 전구 + 글자)와 색·모양·구성이 모두 다르게.
const designs = {
  warm: {
    name: '반듯한 홈케어',
    color: '#2f5d50',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="256" fill="#2f5d50"/>
  <path d="M120 262 L256 140 L392 262" fill="none" stroke="#fbf8f2" stroke-width="40" stroke-linecap="square" stroke-linejoin="miter"/>
  <rect x="160" y="300" width="192" height="36" fill="#fbf8f2"/>
  <rect x="200" y="368" width="112" height="28" fill="#c9b98f"/>
</svg>`,
  },
};
const d = designs[THEME];
if (!d) throw new Error(`없는 theme: ${THEME}`);

const OUT = path.resolve('public/themes', THEME);
await mkdir(OUT, { recursive: true });
const svg = Buffer.from(d.svg);
const png = (size) => sharp(svg, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

await writeFile(path.join(OUT, 'favicon.svg'), d.svg);
const files = { 'favicon-32x32.png': 32, 'favicon-96x96.png': 96, 'icon-192.png': 192, 'icon-512.png': 512 };
for (const [f, s] of Object.entries(files)) await writeFile(path.join(OUT, f), await png(s));
// 애플 기기 홈 화면용은 둥근 원 대신 꽉 찬 사각(기기가 알아서 모서리를 깎는다)
const apple = await sharp({ create: { width: 180, height: 180, channels: 4, background: d.color } })
  .composite([{ input: await png(180) }]).png().toBuffer();
await writeFile(path.join(OUT, 'apple-touch-icon.png'), apple);

// favicon.ico: 16·32·48 PNG를 담은 ICO 파일
const sizes = [16, 32, 48];
const imgs = await Promise.all(sizes.map(png));
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((s, i) => {
  const o = 6 + 16 * i;
  head.writeUInt8(s, o); head.writeUInt8(s, o + 1); head.writeUInt8(0, o + 2); head.writeUInt8(0, o + 3);
  head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6);
  head.writeUInt32LE(imgs[i].length, o + 8); head.writeUInt32LE(offset, o + 12);
  offset += imgs[i].length;
});
await writeFile(path.join(OUT, 'favicon.ico'), Buffer.concat([head, ...imgs]));

await writeFile(path.join(OUT, 'manifest.json'), JSON.stringify({
  name: d.name, short_name: d.name, start_url: '/', display: 'browser', background_color: '#fbf8f2', theme_color: d.color,
  icons: [
    { src: `/themes/${THEME}/icon-192.png`, sizes: '192x192', type: 'image/png' },
    { src: `/themes/${THEME}/icon-512.png`, sizes: '512x512', type: 'image/png' },
  ],
}, null, 2));
console.log(`마크를 만들었어요 → public/themes/${THEME}/`);
