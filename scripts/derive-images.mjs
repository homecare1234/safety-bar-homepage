// 다른 브랜드 사이트용 사진 만들기: 원래 사이트 사진을 «살짝 다르게» 바꿔 새 이름으로 저장한다.
// 같은 사진을 두 도메인에 그대로 올리면 네이버가 같은 이미지로 묶어 버릴 수 있어서
//   ① 좌우 반전 ② 가장자리를 조금씩 다르게 잘라 냄(4~7%) ③ 밝기·채도·색 온도 살짝 조정 ④ 새로 압축
// 을 한 뒤, 파일 이름도 다른 말로 바꾼다 (예: bathroom-safety-bar-09 → bathroom-grab-bar-09).
// 사용법: node scripts/derive-images.mjs <원래 사이트> <새 사이트>
//   예) node scripts/derive-images.mjs safetybar bandeut-safety
//   - sites/<새 사이트>/ 의 site.ts·content/*.md 에 적힌 사진 이름만 골라서 만든다
//   - 만든 뒤 그 파일들 안의 사진 이름도 새 이름으로 바꿔 쓴다 (다시 돌려도 안전)
import sharp from 'sharp';
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const [FROM, TO] = process.argv.slice(2);
if (!FROM || !TO) throw new Error('사용법: node scripts/derive-images.mjs <원래 사이트> <새 사이트>');

// 새 사이트마다 파일 이름을 바꾸는 규칙 (앞에서부터 차례로 적용)
const renames = {
  'bandeut-safety': [
    ['bed-safety-guard', 'bed-guard-rail'],
    ['-safety-bar', '-grab-bar'],
    ['handrail', 'wall-rail'],
  ],
};
const rule = renames[TO] ?? [];
const rename = (n) => rule.reduce((s, [a, b]) => s.replace(a, b), n);

const SRC = path.resolve('public/images', FROM);
const OUT = path.resolve('public/images', TO);
await mkdir(OUT, { recursive: true });

// 사이트 파일에서 사진 이름 모으기
const files = [path.resolve('sites', TO, 'site.ts')];
for (const f of await readdir(path.resolve('sites', TO, 'content'))) if (f.endsWith('.md')) files.push(path.resolve('sites', TO, 'content', f));
const names = new Set();
for (const f of files) for (const m of (await readFile(f, 'utf8')).matchAll(/"([a-z]+(?:-[a-z]+)*-\d{2})"/g)) names.add(m[1]);

// 이름마다 같은 결과가 나오게 하는 작은 난수 (다시 돌려도 같은 사진이 나온다)
const seed = (s) => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0) / 4294967296); };

let made = 0;
const map = {};
for (const n of names) {
  const src = path.join(SRC, `${n}.webp`);
  if (!existsSync(src)) continue; // 이미 새 이름이거나 다른 값
  const nn = rename(n);
  map[n] = nn;
  const r = seed(nn);
  const meta = await sharp(src).metadata();
  const W = meta.width, H = meta.height;
  const cut = () => 0.02 + r() * 0.03; // 가장자리마다 2~5%씩 따로
  const l = Math.round(W * cut()), rt = Math.round(W * cut()), t = Math.round(H * cut()), b = Math.round(H * cut());
  const base = sharp(src)
    .flop() // 좌우 반전
    .extract({ left: l, top: t, width: W - l - rt, height: H - t - b })
    .modulate({ brightness: 1.02 + r() * 0.04, saturation: 0.92 + r() * 0.06, hue: Math.round(-4 + r() * 8) })
    .linear(1.03, -3); // 대비 아주 살짝
  await base.clone().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(OUT, `${nn}.webp`));
  await base.clone().resize({ width: 800, height: 600, fit: 'cover' }).webp({ quality: 75 }).toFile(path.join(OUT, `${nn}-thumb.webp`));
  made++;
}

// 사이트 파일 안의 사진 이름을 새 이름으로 바꿔 쓰기
for (const f of files) {
  let t = await readFile(f, 'utf8');
  const before = t;
  t = t.replace(/"([a-z]+(?:-[a-z]+)*-\d{2})"/g, (all, n) => (map[n] ? `"${map[n]}"` : all));
  t = t.replace(new RegExp(`/images/${FROM}/og/([a-z-]+-\\d{2})\\.jpg`, 'g'), (all, n) => (map[n] ? `/images/${TO}/og/${map[n]}.jpg` : all));
  if (t !== before) await writeFile(f, t);
}
console.log(`${made}장 변형해서 만들었어요 → public/images/${TO}/`);
