import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import site from '@site/site';

// 네이버 서치어드바이저 «RSS 제출»용. 페이지 목록을 피드로 낸다.
export async function GET(context: APIContext) {
  const pages = (await getCollection('pages')).sort((a, b) => a.data.order - b.data.order);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: pages.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      link: `/${p.id}`,
      pubDate: new Date('2026-09-24'),
    })),
    customData: '<language>ko-kr</language>',
  });
}
