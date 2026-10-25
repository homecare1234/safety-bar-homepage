// 검색엔진에 «이 페이지들 새로 생겼어요/바뀌었어요»라고 알린다 (IndexNow).
// 네이버·빙 등 IndexNow에 참여한 검색엔진이 함께 받는다. 네이버 서치어드바이저 «웹 페이지 수집»을 대신한다.
// 사용법: node scripts/indexnow.mjs <SITE>     예) node scripts/indexnow.mjs hood
//  - 열쇠 파일: public/<KEY>.txt (모든 사이트 공통, 서버에 올라가 있어야 함)
//  - 보내는 주소: 메인 + sites/<SITE>/content/*.md 파일 이름 (_로 시작하는 보류 페이지 제외)
import { readFile, readdir } from 'node:fs/promises';

const KEY = 'b89cbd8accfff518d98e996c96064da1';
const SITE = process.argv[2];
if (!SITE) {
  console.error('사이트 이름을 넣어 주세요. 예) node scripts/indexnow.mjs hood');
  process.exit(1);
}

const siteTs = await readFile(`sites/${SITE}/site.ts`, 'utf8');
const url = siteTs.match(/url:\s*process\.env\.SITE_URL\s*\?\?\s*"([^"]+)"/)?.[1];
if (!url) throw new Error(`sites/${SITE}/site.ts 에서 url을 찾지 못했습니다`);
if (/launched:\s*false/.test(siteTs)) throw new Error('시안(launched: false) 사이트는 보내지 않습니다');

const base = new URL(url); // 한글 도메인은 자동으로 퓨니코드로 바뀐다
const pages = (await readdir(`sites/${SITE}/content`))
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .map((f) => new URL(f.replace(/\.md$/, ''), base).href);
const urlList = [base.origin + '/', ...pages];

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: base.host, key: KEY, keyLocation: `${base.origin}/${KEY}.txt`, urlList }),
});
console.log(`${urlList.length}개 주소를 보냈어요 → 응답 ${res.status} ${res.statusText}`);
console.log(res.ok ? '✅ 접수됐어요 (200·202 정상)' : `❌ ${await res.text()}`);
process.exit(res.ok ? 0 : 1);
