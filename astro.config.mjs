// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { readdir, rm } from 'node:fs/promises';

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
