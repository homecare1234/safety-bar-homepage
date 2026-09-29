import site from '@site/site';

// 사진은 public/images/<사이트id>/<이름>.webp (긴 변 1600px) 와 <이름>-thumb.webp (800×600) 두 벌이 있다.
export const full = (name: string) => `/images/${site.id}/${name}.webp`;
export const thumb = (name: string) => `/images/${site.id}/${name}-thumb.webp`;
export const srcset = (name: string) => `${thumb(name)} 800w, ${full(name)} 1600w`;
