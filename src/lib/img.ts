import site from '@site/site';

// 사진은 public/images/<사이트id>/<이름>.webp (긴 변 1600px) 와 <이름>-thumb.webp (800×600) 두 벌이 있다.
// 다른 사이트의 사진을 같이 쓰려면 site.ts에 images: "<그 사이트 id>" (예: 반듯한 홈케어 안전바 → safetybar 사진)
const dir = (site as { images?: string }).images ?? site.id;
export const full = (name: string) => `/images/${dir}/${name}.webp`;
export const thumb = (name: string) => `/images/${dir}/${name}-thumb.webp`;
// 공유 이미지용 1200×630 JPG (scripts/og.mjs 로 생성)
export const og = (name: string) => `/images/${dir}/og/${name}.jpg`;
export const srcset = (name: string) => `${thumb(name)} 800w, ${full(name)} 1600w`;
