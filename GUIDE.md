# 사용법 (준호형용)

홈페이지를 고치고 인터넷에 올리는 방법입니다. 명령어는 **복사해서 붙여 넣기만** 하면 됩니다.

> **명령어 입력하는 곳**: 바탕화면이나 폴더 빈 곳에서 마우스 오른쪽 클릭 → **Open Git Bash here**
> (안 보이면 «추가 옵션 표시»를 누르면 나와요.) 까만 창이 뜨면 거기에 붙여 넣고 **Enter**.
> Git Bash에서 붙여 넣기는 **Shift + Insert** 또는 마우스 오른쪽 클릭 → Paste 입니다. (Ctrl + V가 안 될 수 있어요.)

---

## 1. 처음 한 번만 할 일

### ① 설치 확인

Git Bash를 **새로** 열고 아래를 붙여 넣습니다.

```bash
node -v
```

`v24.…`처럼 숫자가 나오면 됩니다. `command not found`가 나오면 Node.js 설치 후 Git Bash를 껐다 켜지 않은 거예요.

### ② 내 이름 등록 (기록에 «누가 고쳤는지» 남기는 용도)

`홍길동`과 이메일만 내 것으로 바꿔서 붙여 넣으세요. 한 줄씩.

```bash
git config --global user.name "홍길동"
```

```bash
git config --global user.email "내이메일@gmail.com"
```

### ③ 프로젝트 받기

이 컴퓨터에는 이미 `바탕화면\safety-bar-homepage`에 받아 두었으니 **건너뛰세요.**
다른 컴퓨터라면:

```bash
cd ~/Desktop && git clone https://github.com/homecare1234/safety-bar-homepage.git
```

### ④ 프로그램 부품 설치

```bash
cd ~/Desktop/safety-bar-homepage && npm ci
```

1~2분 걸립니다. 마지막에 `added … packages`가 나오면 끝.
(또는 이 폴더에서 Claude를 켜고 «`@SETUP.md` 수행해»라고 하면 Claude가 이것까지 다 해 줍니다.)

### ⑤ 깃허브 로그인

처음 올릴 때(아래 3번) **깃허브 로그인 창이 저절로 뜹니다.** «Sign in with your browser»를 눌러
**homecare1234 계정**(또는 이 저장소에 권한이 있는 계정)으로 로그인하면, 다음부터는 안 물어봅니다.

---

## 2. 매번 할 일: 사이트 고치기

### ① 폴더로 이동하고 최신 내용 받기

작업을 시작할 때마다 먼저 합니다. (다른 사람이 고친 게 있으면 받아 와요.)

```bash
cd ~/Desktop/safety-bar-homepage && git pull
```

### ② 고치기 → Claude에게 말로 시키기

같은 폴더에서 Claude Code를 켜고 하고 싶은 걸 말로 하면 됩니다.

- «환풍기 사이트 메인 문구에서 ○○를 △△로 바꿔줘»
- «후드 사이트에 이 사진 넣어줘»

### ③ 내 컴퓨터에서 미리 보기 (선택)

인터넷에 올리기 전에 내 컴퓨터에서만 먼저 볼 수 있어요. 보고 싶은 사이트 줄 하나를 붙여 넣으세요.

| 사이트 | 미리 보기 명령어 | 실제 주소 |
|---|---|---|
| 안전바 | `SITE=safetybar npm run dev` | safety.현명한홈케어.com |
| 액자레일 | `SITE=picture-rail npm run dev` | frame.현명한홈케어.com |
| 환풍기 | `SITE=fan npm run dev` | fan.현명한홈케어.com |
| 주방 후드 | `SITE=hood npm run dev` | hood.현명한홈케어.com (아직 시안) |

그다음 인터넷 창(크롬 등) 주소창에 **http://localhost:4321** 을 입력하면 보입니다.
다 봤으면 Git Bash 창에서 **Ctrl + C** 를 누르면 꺼집니다.

> Claude에게 «환풍기 사이트 미리 보기 띄워줘»라고 해도 됩니다.

---

## 3. 깃허브에 올리기

고친 게 마음에 들면 이것 **한 줄**이면 끝입니다.

```bash
npm run push -- "무엇을 고쳤는지 짧게"
```

예: `npm run push -- "환풍기 메인 문구 수정"` (따옴표 안 메모는 생략해도 돼요: `npm run push`)

이 명령이 알아서 하는 일:

1. 네 사이트가 **고장 없이 만들어지는지 확인** (1~2분) — 하나라도 고장 나면 **올리지 않고 멈춥니다**
2. 고친 내용 저장
3. 깃허브의 최신 내용과 합치기
4. 깃허브에 올리기

마지막에 **✅ 깃허브에 올렸어요!** 가 나오면 성공입니다.
**❌** 가 나오면 화면 글자를 그대로 복사해서 Claude에게 보여 주세요. 아무것도 망가지지 않아요.

> Claude에게 «깃허브에 올려줘»라고 해도 같은 일을 해 줍니다.

---

## 4. 인터넷 사이트에 반영하기 (Cloudflare)

깃허브에 올린 뒤 **Cloudflare에서 배포**를 해야 실제 사이트가 바뀝니다. 이 부분은 따로 알려 드립니다.
반영된 뒤 실제 주소(위 표)에 들어가서 바뀐 게 보이면 끝. 안 바뀌어 보이면 **Ctrl + F5** (새로고침)

---

## 문제가 생기면

| 화면에 이런 게 나오면 | 이렇게 |
|---|---|
| `command not found: node` / `npm` | Git Bash를 껐다 다시 켜기. 그래도 안 되면 Node.js 재설치 |
| `not a git repository` | 폴더 이동을 안 한 것. `cd ~/Desktop/safety-bar-homepage` 먼저 |
| 미리 보기 주소가 4321이 아닌 다른 숫자로 나옴 | 미리 보기가 이미 하나 켜져 있는 것. Git Bash 화면의 `Local` 옆 주소로 접속하면 됨 |
| 그 외 무엇이든 | 화면을 통째로 복사해서 Claude에게 보여 주기 |

### 하지 말 것

- 깃허브 웹사이트에서 직접 파일 지우기·고치기 (헷갈리면 Claude에게)
- 누가 `git push --force`, `git reset --hard` 하라고 해도 하지 않기 — 고친 게 날아갈 수 있어요
- `자료/`, `사이트/` 폴더(원본 사진) 지우기 — 깃허브에 없는, 이 컴퓨터에만 있는 파일입니다
