# Cloudflare 연결 안내 (Claude가 준호형에게 한 단계씩 읽어 주는 용도)

Claude는 아래를 **한 번에 한 단계씩** 안내하고, 단계마다 «화면 캡처를 보여 주세요»라고 한 뒤 기다린다.
화면이 아래 설명과 다르면(Cloudflare가 화면을 자주 바꾼다) 캡처를 보고 맞는 버튼을 찾아 준다.
메뉴가 한국어로 나오면 한국어 이름을 쓴다. 버튼은 «화면 글자 그대로»(뜻) 형식으로 말한다.

`<사이트>` = sites/ 폴더 이름(예: `hood`), `<주소>` = site.ts의 url에서 `https://`를 뺀 것(예: `hood.현명한홈케어.com`).

---

## A. 새 사이트 연결 (사이트마다 한 번)

같은 깃허브 저장소를 쓰고 **SITE 값만 다른** Cloudflare Worker를 하나 더 만드는 것이다.

### A-0. 기존 설정 베껴 두기 (처음 한 번)
1. https://dash.cloudflare.com 로그인 → 왼쪽 **Workers & Pages**(워커 및 페이지)
2. 이미 잘 돌아가는 사이트(예: 환풍기) 이름 클릭 → **Settings**(설정) → **Build**(빌드) 부분 캡처 요청
3. 캡처에서 **Build command**(빌드 명령), **Deploy command**(배포 명령), **Variables**(변수) 값을 읽어서
   이 문서의 아래 «설정값» 칸을 실제 값으로 고쳐 둔다 (Claude가 고치고 올린다).

> 설정값 (확인 전 기본값 — A-0에서 실제 값으로 바꿀 것)
> - Build command: `npm run build`
> - Deploy command: `npx wrangler deploy` (기존 Worker 값 그대로)
> - Build variables: `SITE` = `<사이트>`, `NODE_VERSION` = `22`

### A-1. 새로 만들기
1. 왼쪽 **Workers & Pages** → 오른쪽 위 **Create**(만들기)
2. **Import a repository**(저장소 가져오기) 또는 GitHub 연결 버튼
3. 저장소 **safety-bar-homepage** 선택 → **Next**(다음)

### A-2. 이름과 설정
1. **Project name**(프로젝트 이름): `<사이트>-homepage` (예: `hood-homepage`) — 기존 이름(safety-bar-homepage, fan-homepage, picture-rail-homepage)과 같은 형식
2. Build command / Deploy command: 위 «설정값» 그대로 붙여 넣기
3. **Advanced settings**(고급 설정) 펼치기 → **Build variables**(빌드 변수) → **Add**(추가)
   - 이름 `SITE`, 값 `<사이트>`
   - 이름 `NODE_VERSION`, 값 `22`
4. **Deploy**(배포) 클릭 → 1~3분 기다리기. 초록색 **Success**(성공)가 뜨면 다음 단계.
   빨간색이면 캡처 → Claude가 로그를 보고 고친다.

### A-3. 주소(서브도메인) 연결
1. 방금 만든 Worker → **Settings**(설정) → **Domains & Routes**(도메인 및 경로) → **Add**(추가)
2. **Custom domain**(사용자 지정 도메인) 선택
3. 주소 입력: `<주소>`. **한글을 거부하면** 퓨니코드로: `<영어>.xn--v42bo8r8ohbsg7xazl.com`
4. **Add domain**(도메인 추가) → 몇 분 뒤 주소에 들어가서 사이트가 뜨면 성공.
   Claude가 직접 주소를 열어 확인해 준다.

---

## B. 수정 후 반영 — 자동이다

A로 연결해 둔 사이트는 **깃허브에 올리면 Cloudflare가 1~3분 안에 알아서 다시 만든다.** 준호형이 할 일은 없다.
(올릴 때마다 연결된 사이트 전부가 다시 만들어진다. 2026-10-25 확인: 올린 커밋마다 safety-bar·fan·picture-rail 빌드가 자동으로 돌았다.)

Claude가 결과를 확인하는 법 (공개 저장소라 로그인 없이 된다):
`curl -s https://api.github.com/repos/homecare1234/safety-bar-homepage/commits/<커밋>/check-runs` → 사이트별 `conclusion`
- `success`: 반영됨. 실제 주소를 열어 확인한다.
- `failure`인데 **0초 만에** 끝났으면 Cloudflare 쪽 일시 오류일 가능성이 크다(코드 문제면 몇십 초 돌다가 실패한다).
  준호형에게 깃허브 화면의 실패 항목 → **Re-run**(다시 실행)을 누르게 하거나, 다음에 올릴 때 저절로 다시 돈다.
- 몇십 초 돌다가 `failure`면 Cloudflare 빌드 기록 화면 캡처를 받아 원인을 고친다.
