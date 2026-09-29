import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const SITE = process.env.SITE ?? 'safetybar';

// 키워드 전용 페이지. sites/<SITE>/content/*.md 하나가 URL 하나가 된다.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: `./sites/${SITE}/content` }),
  schema: z.object({
    title: z.string(),            // <title> 과 h1 — 검색 키워드를 그대로 담는다
    description: z.string(),      // meta description (80~160자)
    keywords: z.array(z.string()),
    heading: z.string().optional(), // h1을 title과 다르게 쓰고 싶을 때
    summary: z.string(),          // 카드·목록에 쓰는 한 줄 요약
    group: z.enum(['service', 'space', 'target', 'info']),
    order: z.number().default(99),
    image: z.string().optional(),       // public/images/<id>/<이름>.webp 의 <이름>
    gallery: z.array(z.string()).default([]), // 본문 아래 시공 사진
    imageAlt: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { pages };
