// Cloudflare 배포 명령(«npm run deploy»)이 실행하는 파일. 업로드가 실패하면 잠깐 쉬었다가 다시 올린다.
// 2026-10-25: 빌드는 성공했는데 업로드 단계에서 Cloudflare API가 «unknown error [code: 10013]»를 내며
// 가끔 실패했다(코드 문제 아님). 그래서 최대 3번까지 다시 시도한다.
import { spawnSync } from 'node:child_process';

const waits = [0, 20, 60]; // 초
for (const [i, wait] of waits.entries()) {
  if (wait) {
    console.log(`\n${wait}초 기다렸다가 다시 올립니다 (${i + 1}/${waits.length})...`);
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
  if (spawnSync('npx wrangler deploy', { stdio: 'inherit', shell: true }).status === 0) process.exit(0);
}
console.error(`\n${waits.length}번 모두 실패했습니다.`);
process.exit(1);
