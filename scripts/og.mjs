// 세부 페이지 공유 이미지(og:image) 만들기: 각 페이지 대표 사진을 1200×630 JPG로 자른다.
// 카카오톡 등 일부 미리보기가 WebP를 못 읽을 수 있어서 JPG로 따로 둔다.
// 사용법: node scripts/og.mjs [SITE]   (사진을 바꾸거나 페이지 image를 바꾼 뒤 다시 실행)
import sharp from 'sharp';
import { readdir, readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SITE = process.argv[2] ?? 'safetybar';
const IMG = path.resolve('public/images', SITE);
const OUT = path.join(IMG, 'og');
await mkdir(OUT, { recursive: true });

const names = new Set();
const contentDir = path.resolve('sites', SITE, 'content');
for (const f of await readdir(contentDir)) {
  if (!f.endsWith('.md')) continue;
  const m = (await readFile(path.join(contentDir, f), 'utf8')).match(/^image:\s*"([^"]+)"/m);
  if (m) names.add(m[1]);
}
// 메인 대표 사진(site.ts hero.image)도 메인 공유 이미지로 쓴다
const hero = (await readFile(path.resolve('sites', SITE, 'site.ts'), 'utf8')).match(/hero:[\s\S]*?\bimage:\s*"([^"]+)"/);
if (hero) names.add(hero[1]);
for (const n of names) {
  await sharp(path.join(IMG, `${n}.webp`)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, `${n}.jpg`));
  console.log(`og/${n}.jpg`);
}
