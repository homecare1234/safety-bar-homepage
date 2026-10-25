# 새 컴퓨터 세팅 (이관용)

이 문서는 저장소를 새 컴퓨터에 `git clone`한 뒤 Claude Code에 «`@SETUP.md` 수행해»라고 시키면 되도록 쓴 것입니다.
앞부분은 사람이 할 일, 뒷부분은 Claude가 할 일입니다.

## 사람이 먼저 할 일 (Claude 켜기 전에)

1. **Node.js 22 이상** 설치 (https://nodejs.org, LTS). 터미널에서 `node -v`로 확인
2. **Claude Code** 설치·로그인
3. 저장소 받기
   ```bash
   cd ~/Desktop
   git clone <저장소 주소> junho
   cd junho
   ```
4. **원본 사진 옮기기** (git에 없음, 약 1.2GB). 원래 컴퓨터의 `junho/자료/`, `junho/사이트/` 폴더를 USB·AirDrop으로 가져와서 새 `junho/` 바로 아래에 같은 이름으로 넣기.
   새 사진을 변환할 때만 필요하고, 빌드·글 수정은 없어도 됩니다.
5. `junho` 폴더에서 `claude` 실행 → «`@SETUP.md` 수행해»

## Claude가 할 일

아래를 순서대로 하고, 마지막에 결과를 표로 보고한다. 실패한 단계는 숨기지 말고 출력과 함께 알린다.
git 상태를 바꾸는 명령(commit, push 등)은 실행하지 않는다.

### 1. 위치 확인

현재 폴더에 `package.json`(name: `hyeonmyeong-homecare-sites`)과 `docs/claude-memory/`가 있는지 확인한다. 없으면 멈추고 알린다.

### 2. 메모리 옮기기

`docs/claude-memory/*.md`(MEMORY.md 포함)를 **이 세션의 메모리 폴더**로 복사한다.

- 메모리 폴더 경로는 시스템 프롬프트의 Memory 항목에 적혀 있다. 그 경로를 쓴다.
- 찾을 수 없으면: `~/.claude/projects/$(pwd | sed 's/[^A-Za-z0-9]/-/g')/memory/`
- 그 폴더에 이미 파일이 있으면 덮어쓰기 전에 무엇이 있는지 보여 주고 확인을 받는다. 비어 있거나 없으면 바로 만든다.
- 복사 후 파일 개수와 `MEMORY.md` 내용을 보여 준다.

### 3. 패키지 설치

```bash
node -v      # 22 미만이면 멈추고 사람에게 Node 22 이상 설치를 요청
npm ci
```

### 4. 사이트 빌드 확인

네 사이트가 모두 빌드되는지 본다.

```bash
for s in safetybar picture-rail fan hood; do SITE=$s npm run build || echo "실패: $s"; done
```

`hood`는 `launched: false`(시안)라서 빌드는 되지만 noindex가 정상이다.

### 5. 원본 사진 확인

`자료/fan`, `자료/hood`, `자료/picture-rail`, `사이트/`가 있는지 확인만 한다. 없으면 «사진 변환(`scripts/images.mjs`)은 못 하지만 빌드는 된다»고 알린다.

### 6. 보고

| 단계 | 결과 |
|---|---|
| 메모리 | 복사한 경로·파일 수 |
| npm ci | 성공/실패 |
| 빌드 4개 | 사이트별 성공/실패 |
| 원본 사진 | 있음/없음 |

마지막에 **«메모리는 Claude를 껐다 다시 켜야 읽힙니다. `/exit` 후 `claude`를 다시 실행하세요»**라고 안내한다.
