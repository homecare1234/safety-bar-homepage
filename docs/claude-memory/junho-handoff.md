---
name: junho-handoff
description: 2026-10-25 이 저장소를 원래 제작자 컴퓨터에서 준호형 컴퓨터로 이관함 — 기존 메모리 속 «사용자»는 원래 제작자(Karmesin924)
metadata:
  type: project
---

2026-10-25 원래 제작자(GitHub Karmesin924)가 이 프로젝트를 준호형 컴퓨터로 옮겼다. 메모리는 저장소 `docs/claude-memory/`에서 복사해 왔다.

- 다른 메모리에 «사용자 결정»·«사용자(제작자) 계정»이라고 적힌 «사용자»는 원래 제작자다. 지금 대화하는 사람은 준호형일 수 있다.
- 원본 사진(`자료/`, `사이트/`)은 git에 없다(gitignore, 약 1.2GB). USB 등으로 따로 옮겼는지는 `SETUP.md` 결과로 확인한다. 없으면 `scripts/images.mjs`(사진 다시 변환)는 못 돌리지만, 이미 변환된 `public/images/`는 git에 있어서 빌드·수정은 된다.
- Cloudflare·가비아·네이버 서치어드바이저·구글 서치콘솔 계정 이전은 이 이관과 별개다. 진행 상황은 [[hyeonmyeong-homecare-project]] 참고.

**Why:** 메모리를 그대로 옮기면 «사용자»가 누구인지 헷갈린다.
**How to apply:** 결정 기록을 지금 대화 상대가 한 말로 단정하지 말고, 바꿀 때는 지금 사용자에게 확인한다.

준호형은 프로그래밍을 모른다. 사용법은 `GUIDE.md`(쉬운 말·복붙 명령어). «깃허브에 올려줘»라고 하면 `npm run push -- "<메모>"`를 쓴다(네 사이트 빌드 확인 → commit → pull --rebase → push, 빌드 실패·충돌 시 멈춤). push 후 Cloudflare 배포는 수동이라 화면 단계를 쉬운 말로 안내한다.
