// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { readdir, rm, cp } from 'node:fs/promises';

// 어떤 사이트를 빌드할지 환경변수로 고른다. Cloudflare 프로젝트마다 SITE 값만 다르게 준다.
const SITE = process.env.SITE ?? 'safetybar';
const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'sites', SITE);
const { default: site } = await import(/* @vite-ignore */ pathToFileURL(path.join(siteDir, 'site.ts')).href); // Windows 경로(C:\…)는 file:// URL로 바꿔야 import됨

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  devToolbar: { enabled: false }, // 개발 서버 하단 검은 막대가 상담 바를 가려서 끔 (실제 사이트와 무관)
  build: { format: 'file' },
  integrations: [
    // public/images/ 는 모든 사이트가 같이 쓰는 폴더라, 빌드 결과에서 다른 사이트 사진은 지운다
    {
      name: 'drop-other-site-images',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const images = new URL('images/', dir);
          for (const d of await readdir(images, { withFileTypes: true }).catch(() => [])) {
            if (d.isDirectory() && d.name !== (site.images ?? SITE)) await rm(new URL(`${d.name}/`, images), { recursive: true });
          }
          // 디자인 묶음(theme)이 있는 사이트는 기본 경로 아이콘(/favicon.ico, /apple-touch-icon.png)도 그 마크로 바꿔 끼우고,
          // 현명한 홈케어 마크(/favicon/)는 빼서 섞이지 않게 한다
          if (site.theme) {
            await cp(new URL(`themes/${site.theme}/favicon.ico`, dir), new URL('favicon.ico', dir));
            await cp(new URL(`themes/${site.theme}/apple-touch-icon.png`, dir), new URL('apple-touch-icon.png', dir));
            await rm(new URL('favicon/', dir), { recursive: true, force: true });
          }
          // 다른 theme의 파일도 지운다
          for (const d of await readdir(new URL('themes/', dir), { withFileTypes: true }).catch(() => [])) {
            if (d.isDirectory() && d.name !== site.theme) await rm(new URL(`themes/${d.name}/`, dir), { recursive: true });
            if (d.isFile() && d.name !== `${site.theme}.css`) await rm(new URL(`themes/${d.name}`, dir));
          }
        },
      },
    },
    sitemap({
      changefreq: 'weekly',
      serialize(item) {
        const u = new URL(item.url);
        item.priority = u.pathname === '/' || u.pathname === '' ? 1.0 : 0.8;
        return item;
      },
    }),
  ],
  vite: {
    resolve: { alias: { '@site': siteDir } },
    define: { 'import.meta.env.SITE_ID': JSON.stringify(SITE) },
  },
});
