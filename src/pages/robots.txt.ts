import type { APIRoute } from 'astro';
import site from '@site/site';

// 검색 봇 + AI 답변 엔진(GEO) 모두 허용
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'GoogleOther', 'Yeti', 'Bingbot'];

export const GET: APIRoute = () => {
  // 시안 단계에서는 모든 봇 차단 (각 페이지에도 noindex가 들어간다)
  if (!site.launched) return new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  const body = [
    'User-agent: *', 'Allow: /', '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${new URL('/sitemap-index.xml', site.url).href}`,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
