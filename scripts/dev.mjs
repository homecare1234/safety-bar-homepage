// 사이트 하나를 미리 보기 서버로 띄운다. Windows 명령창에서도 SITE 환경변수를 넣을 수 있게 만든 것.
// 사용법: node scripts/dev.mjs <SITE> [포트]   예) node scripts/dev.mjs fan 4323
// Claude는 .claude/launch.json에 사이트마다 등록해 두고 미리 보기 창으로 띄운다.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';

const [site, port = '4321'] = process.argv.slice(2);
if (!site || !existsSync(`sites/${site}/site.ts`)) {
  console.error(`사이트 이름을 확인하세요: sites/${site ?? '?'}/site.ts 가 없어요.`);
  process.exit(1);
}
spawn(`npx astro dev --port ${port}`, { stdio: 'inherit', shell: true, env: { ...process.env, SITE: site } }).on('exit', (code) =>
  process.exit(code ?? 0),
);
