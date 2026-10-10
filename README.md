# 현명한 홈케어 — 키워드별 홈페이지 템플릿

검색 키워드 하나당 사이트 하나(서브도메인 하나)를 만드는 정적 사이트 템플릿입니다.
디자인·SEO 장치는 `src/`에 공통으로 있고, 사이트마다 다른 것은 `sites/<이름>/`에만 있습니다.

```
sites/safetybar/site.ts        ← 제목·키워드·업체정보·FAQ·비용 안내·메인 문구 (안전바 사이트)
sites/safetybar/content/*.md   ← 키워드 전용 페이지. 파일 하나 = URL 하나
sites/picture-rail/            ← 액자레일 사이트 (같은 구조)
src/                           ← 레이아웃·컴포넌트·SEO (모든 사이트 공통 — 고치면 모든 사이트가 바뀜)
scripts/images.mjs             ← 카카오톡 원본 사진 → 웹용 WebP 변환
자료/<사이트>/                 ← 원본 사진·키워드 (git에 올리지 않음). 안전바만 예전 위치인 사이트/
public/images/<사이트>/        ← 변환된 사진. 빌드할 때 다른 사이트 사진은 결과에서 빠짐
```

## 로컬에서 보기

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/ 생성
```

다른 사이트를 빌드하려면 `SITE=<폴더이름> npm run build`.

## 새 키워드 사이트 추가 (예: 방충망)

1. 원본 사진을 `자료/screen/<장소별 폴더>/`에 넣고, `scripts/images.mjs`의 `folderSlugs`에 폴더 이름 → 파일 이름을 추가한 뒤 `node scripts/images.mjs screen`
2. `sites/picture-rail` 폴더를 `sites/screen`으로 복사
3. `sites/screen/site.ts`의 `id`, `url`, `ogImage`, `title`, `keywords`, `hero`, `faq`, `pricing`, `text`, `nav` 수정 (`launched: false`로 시작)
4. `sites/screen/content/*.md`를 새 키워드에 맞게 다시 작성 (파일명 = URL), `node scripts/og.mjs screen`
5. Cloudflare에서 **새 프로젝트**를 만들고 같은 저장소 연결, 빌드 변수 `SITE=screen`·`NODE_VERSION=22`, 도메인 `screen.현명한홈케어.com` 연결
6. 네이버 서치어드바이저·구글 서치콘솔에 새 서브도메인을 따로 등록하고 발급 코드를 `site.ts`의 `verification`에 입력

## Vercel 배포

- Framework Preset: **Astro** (자동 감지)
- Build Command: `npm run build` / Output: `dist`
- Environment Variables: `SITE=safetybar`
- Domains: `safety.현명한홈케어.com` (실제 배포는 Cloudflare Worker. 도메인 DNS는 Cloudflare, Worker → Add Domain으로 연결)
- 프로젝트 하나 = 키워드 사이트 하나. 같은 저장소를 여러 프로젝트에 연결해도 됩니다.

주의: Vercel Hobby(무료) 약관은 비상업적 용도입니다. 업체 사이트를 무료로 두려면 Cloudflare Pages가 상업 사용을 허용합니다(설정은 동일: build `npm run build`, output `dist`, 환경변수 `SITE`).

## 배포 후 SEO 등록 순서

1. **네이버 서치어드바이저** (searchadvisor.naver.com) → 사이트 등록 → HTML 태그 방식 소유확인 → 코드를 `site.ts` `verification.naver`에 넣고 재배포 → 확인
2. 서치어드바이저 → 요청 → **사이트맵 제출**: `https://<도메인>/sitemap-index.xml`
3. 서치어드바이저 → 요청 → **RSS 제출**: `https://<도메인>/rss.xml`
4. 서치어드바이저 → 요청 → **웹 페이지 수집**: 메인과 주요 페이지 URL을 직접 요청
5. **구글 서치콘솔** (search.google.com/search-console) → 속성 추가 → HTML 태그 → `verification.google` → 사이트맵 제출
6. 2~4주 뒤 서치어드바이저 «검색 노출» 리포트에서 색인 여부 확인

## 사진 넣기·바꾸기

1. `사이트/<폴더>/`에 원본을 넣고 `node scripts/images.mjs` 실행 → `public/images/safetybar/<슬러그>-NN.webp`(1600px)와 `-thumb.webp`(800×600) 생성. EXIF·GPS 제거됨
2. 폴더 이름 → 파일 이름 대응은 `scripts/images.mjs`의 `folderSlug`에 있음
3. 메인에 쓰는 사진은 `site.ts`의 `hero.image`, `cases`, `gallery`, `workPhotos`, `about`에서 이름(확장자 없이)으로 지정
4. 각 페이지 사진은 `content/*.md` 머리말의 `image`, `imageAlt`, `gallery`
5. 페이지 대표 사진(`image`)을 바꿨으면 `node scripts/og.mjs` 실행 → 카톡 공유용 1200×630 JPG(`public/images/<사이트>/og/`) 다시 생성. 메인 공유 이미지는 `public/og.jpg`

⚠ 원본 폴더를 추가하면 번호가 밀려 파일 이름이 바뀔 수 있습니다. 변환 후 `site.ts`와 `content/*.md`의 이름을 다시 확인하세요.

## 시안으로 올리기 (Cloudflare Pages, git 연결 없이)

`site.ts`의 `launched: false`인 동안은 모든 페이지에 noindex, robots.txt 전체 차단, 화면 맨 위 «시안» 안내 줄이 들어갑니다.

```bash
SITE_URL=https://<프로젝트이름>.pages.dev npm run build   # 카톡 미리보기 사진이 시안 주소를 가리키게
npx wrangler pages deploy dist --project-name <프로젝트이름>
```

## 배포 전 채워야 할 것 (`sites/safetybar/site.ts`)

`launched: true`로 바꾸면 noindex와 시안 안내 줄이 사라집니다. 전화번호가 자리표시자면 빌드가 멈춥니다.
대표자명·사업자등록번호·주소는 넣지 않기로 했습니다 (비어 있으면 화면과 구조화 데이터에서 빠짐).

- [x] `phoneDigits`, `phoneDisplay` 실제 번호
- [ ] `verification.naver`, `verification.google`
