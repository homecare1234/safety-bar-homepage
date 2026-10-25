// 고친 내용을 깃허브에 올리기 (명령어 하나로).
// 사용법: npm run push                       → «사이트 수정 (날짜)»라는 메모로 올림
//         npm run push -- "안전바 문구 수정"   → 메모를 직접 적어서 올림
// 순서: 네 사이트 빌드 확인 → 저장(commit) → 최신 내용 받기(pull) → 올리기(push)
// 빌드가 하나라도 실패하면 올리지 않는다 (Cloudflare 배포가 깨지지 않게).
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const SITES = ['safetybar', 'picture-rail', 'fan', 'hood'];

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
const run = (cmd, args, env) => spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } }).status === 0;
// Windows에서 npm은 .cmd라 셸로만 실행된다. 셸에 인자 배열을 넘기면 경고가 나서 한 줄 문자열로 넘긴다.
const npm = (command, env) => spawnSync(`npm ${command}`, { stdio: 'inherit', shell: true, env: { ...process.env, ...env } }).status === 0;
const stop = (msg) => {
  console.error(`\n❌ ${msg}\n   이 화면을 그대로 복사해서 Claude에게 보여 주세요.\n`);
  process.exit(1);
};

// 0. 처음 한 번 필요한 이름·이메일 등록 확인
try {
  git('config', 'user.email');
} catch {
  stop('git에 이름·이메일이 등록되지 않았어요. GUIDE.md «처음 한 번만» 2번을 먼저 하세요.');
}

const changed = git('status', '--porcelain') !== '';

// 1. 빌드 확인
if (changed) {
  for (const s of SITES) {
    console.log(`\n▶ ${s} 사이트 빌드 확인 중...`);
    if (!npm('run build --silent', { SITE: s })) stop(`${s} 사이트 빌드가 실패해서 올리지 않았어요.`);
  }

  // 2. 저장(commit)
  const now = new Date();
  const stamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const message = process.argv.slice(2).join(' ').trim() || `사이트 수정 (${stamp})`;
  git('add', '-A');
  git('commit', '-m', message);
  console.log(`\n✔ 저장했어요: ${message}`);
} else {
  console.log('\n바뀐 파일이 없어요. 아직 안 올라간 저장분이 있으면 그것만 올릴게요.');
}

// 3. 다른 사람이 먼저 올린 내용 받기
console.log('\n▶ 깃허브에서 최신 내용 받는 중...');
if (!run('git', ['pull', '--rebase'])) {
  const rebasing = ['rebase-merge', 'rebase-apply'].some((d) => existsSync(git('rev-parse', '--git-path', d)));
  if (!rebasing) stop('깃허브에서 최신 내용을 받지 못했어요. 인터넷 연결이나 깃허브 로그인을 확인하세요.');
  run('git', ['rebase', '--abort']);
  stop('깃허브에 있는 내용과 내가 고친 내용이 겹쳐요. 아직 올리지 않았고, 고친 내용은 그대로 남아 있어요.');
}

// 4. 올리기
console.log('\n▶ 깃허브에 올리는 중...');
if (!run('git', ['push'])) stop('깃허브에 올리지 못했어요.');

console.log('\n✅ 깃허브에 올렸어요! 이제 Cloudflare에서 배포하면 사이트에 반영돼요.\n');
