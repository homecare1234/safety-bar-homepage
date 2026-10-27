// ─────────────────────────────────────────────────────────────
// 사각싱크볼 교체 사이트 설정. sites/hood를 복사해 만들었다.
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// 원본 사진·키워드: 자료/sink/ (git에 올리지 않음)
//
// «고객 확인»이라고 적힌 값은 안전바 사이트 때 고객이 확인해 준 내용(2026-09-29)이다.
// 사각싱크볼에도 똑같은지 다시 확인받아야 한다.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01057061741"; // 숫자만
const phoneDisplay = "010-5706-1741"; // 표시용

const site = {
  id: "sink",
  // 배포 도메인. 폴더 이름(sink)과 달라도 된다.
  // 시안 주소(*.pages.dev / *.workers.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://sink.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true,
  lang: "ko",
  // 메인 공유 이미지 (hero.image를 scripts/og.mjs가 1200×630으로 자른 것)
  ogImage: "/images/sink/og/square-sink-replacement-05.jpg",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "사각싱크볼 교체 전문 업체 비용",
  shortTitle: "사각싱크볼 교체",
  description:
    "사각싱크볼 교체 · 설치 전문 업체. 싱크대 개수대 · 설거지통 · 싱크대볼을 사각볼로 바꿔 드립니다. 수전 · 배수구까지 함께 시공",
  keywords: [
    "사각싱크볼 교체",
    "사각싱크볼 교체 비용",
    "사각싱크볼 교체 업체",
    "사각싱크볼 설치",
    "사각싱크볼 시공",
    "싱크대 개수대 교체",
    "주방 개수대 교체",
    "싱크대 사각볼 교체",
    "주방 사각볼 교체",
    "사각싱크대 교체",
    "사각싱크대볼 교체",
    "설거지통 교체",
    "사각개수대 교체",
    "싱크대볼 교체",
  ],

  // ── 브랜드 ──
  brand: {
    name: "현명한 홈케어",
    tagline: "넓게 쓰는 사각 싱크볼로",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "사각싱크볼 교체 문의드립니다.\n\n" +
      "· 지금 싱크볼 모양(예: 둥근 엠보볼, 사각볼):\n" +
      "· 수전도 같이 바꿀지:\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "지금 싱크대 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
    hours: "24시간 언제든 편하게 연락 주세요", // 고객 확인(안전바)
  },

  // ── 업체 정보 (JSON-LD LocalBusiness + 푸터) ──
  business: {
    legalName: "현명한 홈케어",
    owner: "", // 넣지 않기로 함 (2026-09-29)
    registrationNo: "", // 넣지 않기로 함 (2026-09-29)
    address: {
      street: "", // 넣지 않기로 함 (2026-09-29). 비어 있으면 주소 전체를 안 냄
      city: "서울특별시",
      region: "서울",
      postalCode: "",
      country: "KR",
    },
    areaServed: ["서울특별시", "경기도", "인천광역시"],
    areaServedLabel: "서울 · 경기 · 인천",
    specialty: "사각싱크볼 · 싱크대 개수대 교체",
    mainWork: "사각싱크볼 · 수전 · 배수구", // 시공 사진 기준
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서브도메인마다 따로 발급) ──
  verification: {
    naver: "da7b5770e312e0184fa2099c8edc04f028b941f5",
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 사각싱크볼 교체",
    heading: "사각싱크볼 교체",
    subheading: "싱크대 개수대 · 설거지통을 넓은 사각볼로, 수전까지 함께",
    lead: "지금 싱크대 사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "square-sink-replacement-05" as string | null,
    imageAlt: "창가 주방 상판에 새로 단 사각싱크볼과 수전",
    slides: [
      { image: "square-sink-replacement-05", position: "50% 55%" },
      { image: "kitchen-sink-replacement-09", position: "50% 55%" },
      { image: "square-sink-installation-03", position: "50% 55%" },
      { image: "square-basin-replacement-03", position: "50% 55%" },
      { image: "kitchen-square-bowl-06", position: "50% 55%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 · 인천" }, // 고객 확인(안전바)
    { label: "시공 담당", value: "대표자 직접 상담 · 시공" }, // 고객 확인(안전바)
    { label: "시공 품목", value: "사각싱크볼 · 수전 · 배수구" }, // 시공 사진 기준
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "square-sink-replacement-05",
      title: "싱크볼에서 사각싱크볼로",
      desc: "굴곡진 옛 싱크볼을 떼고 넓은 사각볼로",
      href: "/embo",
    },
    {
      image: "kitchen-sink-replacement-09",
      title: "주방 개수대 교체",
      desc: "흰 타일 주방, 수전까지 새것으로",
      href: "/kitchen-sink",
    },
    {
      image: "square-basin-replacement-03",
      title: "사각개수대 교체",
      desc: "회색 타일 주방 개수대를 사각볼로",
      href: "/square-basin",
    },
    {
      image: "dish-sink-replacement-05",
      title: "사이즈 확장을 위한 상판 절단",
      desc: "더 큰 싱크볼이 들어가게 상판 자리를 넓혀",
      href: "/countertop",
    },
    {
      image: "square-kitchen-sink-04",
      title: "수전 함께 교체",
      desc: "물줄기가 넓게 떨어지는 수전으로",
      href: "/faucet",
    },
    {
      image: "sink-basin-replacement-03",
      title: "배수구 · 거름망",
      desc: "새 볼에 맞춘 거름망과 덮개",
      href: "/drain",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "square-sink-installation-03", caption: "회색 상판 주방 사각싱크볼" },
    { image: "square-sink-work-03", caption: "붉은 수납장 주방 사각싱크볼" },
    { image: "sink-basin-replacement-04", caption: "나무무늬 수납장 주방" },
    { image: "square-bowl-replacement-08", caption: "창가 주방 사각볼" },
    { image: "kitchen-square-bowl-06", caption: "검은 타일 주방 사각볼" },
    { image: "sink-bowl-replacement-08", caption: "인덕션 옆 사각싱크볼" },
    { image: "square-bowl-replacement-06", caption: "식기 건조대를 올린 사각볼" },
    { image: "square-basin-replacement-08", caption: "검은 상판 주방 사각볼" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "dish-sink-replacement-03", caption: "기존 싱크볼 떼기" },
    { image: "dish-sink-replacement-05", caption: "떼어 낸 자리 정리" },
    { image: "kitchen-square-bowl-04", caption: "배수 · 수전 연결" },
  ],

  about: {
    image: "sink-bowl-replacement-06",
    imageAlt: "현명한 홈케어가 새로 단 사각싱크볼과 수전",
    body: "현명한 홈케어는 주방 싱크볼을 사각싱크볼로 교체합니다.\n상담부터 시공까지 대표가 직접 맡고, 출장비·견적비 없이 사진 한 장으로 비용을 안내해 드립니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "지금 싱크대 사진을 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "맞는 싱크볼과 시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "약속한 날짜에 방문해 기존 싱크볼을 떼고 새 사각싱크볼을 달아 드립니다.",
    },
  ],

  pricing: {
    heading: "사각싱크볼 교체 비용",
    lead: "지금 싱크대 사진과 원하는 싱크볼·수전을 보내주시면 확인 후 비용을 안내해 드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 무료", // 고객 확인(안전바)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "지금 싱크대 사진과 원하는 싱크볼·수전을 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "상판도 같이 바꿔야 하나요?",
      a: "시공 사진 속 현장들은 상판을 그대로 두고 싱크볼만 바꿨습니다. 지금 싱크대 사진을 보내주시면 그대로 가능한지 확인해 드립니다.",
    },
    {
      q: "수전도 같이 바꿀 수 있나요?",
      a: "네. 시공 사진 속 여러 현장에서 싱크볼과 함께 수전도 새로 달았습니다.",
    },
    {
      q: "사각싱크볼 단점은 없나요?",
      a: "안쪽 모서리에 물때가 남기 쉽고, 무늬 있는 엠보 싱크볼보다 잔긁힘이 잘 보일 수 있습니다. 설거지 후 모서리를 한 번씩 닦아 주면 깨끗하게 쓸 수 있습니다.",
    },
    { q: "싱크볼은 직접 사 두면 되나요?", a: "" }, // 채워 주세요: 제품 포함 시공인지, 고객이 산 제품도 달아 주는지
    { q: "시공은 얼마나 걸리나요?", a: "2시간 정도 걸립니다." }, // 고객 확인(2026-10-27)
    {
      q: "지금보다 큰 싱크볼로 바꿀 수 있나요?",
      a: "네. 모든 사이즈의 싱크볼을 시공합니다. 지금 상판 자리가 작으면 상판을 잘라 자리를 넓힌 뒤 큰 싱크볼을 달아 드립니다.",
    }, // 고객 확인(2026-10-27)
    { q: "정수기 꼭지도 다시 달 수 있나요?", a: "네. 정수기 꼭지도 설치해 드립니다." }, // 고객 확인(2026-10-27)
    { q: "출장비나 견적비가 따로 있나요?", a: "출장비와 견적비 모두 무료입니다." }, // 고객 확인(안전바)
  ],

  // 메인 페이지 제목들처럼 사이트마다 달라지는 문구. \n은 줄바꿈
  text: {
    serviceType: "사각싱크볼 교체",
    catalogName: "사각싱크볼 교체 서비스",
    servicesHeading: "사각싱크볼로 바꿀 때\n함께 보는 것",
    galleryHeading: "사각싱크볼 교체 사진",
    galleryAltSuffix: "사각싱크볼 교체",
    faqHeading: "사각싱크볼 교체,\n이런 점을 많이 물어보십니다",
    groupLabels: { service: "서비스 안내", space: "교체할 때 보는 것", target: "현장별 사례", info: "알아두면 좋은 정보" },
  },

  nav: [
    { label: "비용 안내", href: "/cost" },
    { label: "시공 과정", href: "/process" },
    { label: "시공 사례", href: "/#cases" },
    { label: "업체 소개", href: "/#about" },
    { label: "자주 묻는 질문", href: "/#faq" },
  ],
};

// 정식 공개(launched: true)인데 전화번호가 자리표시자면 빌드를 멈춘다.
if (site.launched) {
  const missing = [
    (site.contact.phoneDigits.length < 10 || /^0+$/.test(site.contact.phoneDigits.slice(3))) && "전화번호",
  ].filter(Boolean);
  if (missing.length) throw new Error(`launched: true 인데 채우지 않은 항목이 있습니다: ${missing.join(", ")}`);
}

export type SiteConfig = typeof site;
export default site;
