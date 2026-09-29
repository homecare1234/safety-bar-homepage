// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// 어떤 사이트를 빌드할지 환경변수로 고른다. Vercel 프로젝트마다 SITE 값만 다르게 준다.
const SITE = process.env.SITE ?? 'safetybar';
const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'sites', SITE);
const { default: site } = await import(path.join(siteDir, 'site.ts'));

export default defineConfig({
  site: site.url,
  trailingSlash: 'never',
  devToolbar: { enabled: false }, // 개발 서버 하단 검은 막대가 상담 바를 가려서 끔 (실제 사이트와 무관)
  build: { format: 'file' },
  integrations: [
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
