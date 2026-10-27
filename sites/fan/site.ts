// ─────────────────────────────────────────────────────────────
// 화장실 환풍기 교체 사이트 설정. sites/picture-rail을 복사해 만들었다.
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// 원본 사진·키워드: 자료/fan/ (git에 올리지 않음)
//
// «고객 확인»이라고 적힌 값은 안전바 사이트 때 고객이 확인해 준 내용(2026-09-29)이다.
// 환풍기에도 똑같은지 다시 확인받아야 한다.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01057061741"; // 숫자만
const phoneDisplay = "010-5706-1741"; // 표시용

const site = {
  id: "fan",
  // 배포 도메인 (임시: fan — 확정되면 바꾼다). 폴더 이름(fan)과 달라도 된다.
  // 시안 주소(*.pages.dev / *.workers.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://fan.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true, // 2026-10-17 공개 (사용자 결정, 고객 재확인 전)
  lang: "ko",
  // 메인 공유 이미지 (hero.image를 scripts/og.mjs가 1200×630으로 자른 것)
  ogImage: "/images/fan/og/himpel-hugente-fan-14.jpg",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "화장실 환풍기 교체 전문 업체 비용",
  shortTitle: "화장실 환풍기 교체",
  description:
    "욕실 · 화장실 환풍기 교체 · 설치 전문 업체. 담배 냄새, 악취, 소음, 고장 수리, 복합 환풍기, 힘펠 휴젠뜨, 티오람 시공",
  keywords: [
    "화장실 환풍기 교체",
    "화장실 환풍기",
    "화장실 환풍기 교체 비용",
    "화장실 환풍기 냄새",
    "화장실 환풍기 소음",
    "화장실 환풍기 교체 업체",
    "화장실 환풍기 고장",
    "화장실 환풍기 수리",
    "화장실 환풍기 담배 냄새",
    "화장실 환풍기 댐퍼",
    "화장실 복합환풍기 교체",
    "복합환풍기 교체",
    "힘펠 휴젠뜨 환풍기 교체",
    "힘펠 제로크 환풍기 교체",
    "티오람 환풍기 교체",
    "화장실 후황 교체",
    "화장실 후드 교체",
    "욕실 환풍기 교체",
    "욕실 환풍기 교체 비용",
    "욕실 환기팬 교체",
    "아파트 화장실 담배냄새",
    "천장 환풍기 교체",
    "아파트 환풍기 교체",
    "힘펠 환풍기 교체",
    "복합환풍기 단점",
    "욕실 온풍기",
    "환풍기 역류방지",
  ],

  // ── 브랜드 ──
  brand: {
    name: "현명한 홈케어",
    tagline: "냄새 없고 조용한 욕실로",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "화장실 환풍기 교체 문의드립니다.\n\n" +
      "· 증상(예: 담배 냄새, 소음, 고장):\n" +
      "· 원하는 제품(예: 일반 환풍기, 복합환풍기):\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "지금 달린 환풍기 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
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
    specialty: "화장실 환풍기 · 복합환풍기 교체",
    mainWork: "일반 환풍기 · 힘펠 휴젠뜨 · 티오람", // 시공 사진 기준
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서브도메인마다 따로 발급) ──
  verification: {
    naver: "ab56045f2d9aae46ebd9474772d3873fcbe14e28",
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 화장실 환풍기 교체",
    heading: "화장실 환풍기 교체",
    subheading: "담배 냄새 · 악취 · 소음 · 고장, 일반 환풍기부터 복합환풍기까지",
    lead: "지금 달린 환풍기 사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "himpel-hugente-fan-14" as string | null,
    imageAlt: "욕실 천장에 새로 단 힘펠 휴젠뜨 복합환풍기",
    slides: [
      { image: "himpel-hugente-fan-14", position: "50% 50%" },
      { image: "tioram-fan-12", position: "50% 45%" },
      { image: "bathroom-fan-04", position: "60% 40%" },
      { image: "himpel-hugente-fan-12", position: "55% 45%" },
      { image: "tioram-fan-10", position: "55% 40%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 · 인천" }, // 고객 확인(안전바)
    { label: "시공 담당", value: "대표자 직접 상담 · 시공" }, // 고객 확인(안전바)
    { label: "시공 제품", value: "일반 환풍기 · 복합환풍기" }, // 시공 사진 기준
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "himpel-hugente-fan-14",
      title: "힘펠 휴젠뜨",
      desc: "환기와 건조를 리모컨으로 하는 복합환풍기",
      href: "/hugente",
    },
    {
      image: "tioram-fan-12",
      title: "티오람 복합환풍기",
      desc: "천장 구멍을 넓혀 복합환풍기로 교체",
      href: "/tioram",
    },
    {
      image: "bathroom-fan-26",
      title: "누렇게 변한 환풍기",
      desc: "오래된 환풍기를 떼고 새 환풍기로",
      href: "/repair",
    },
    {
      image: "bathroom-fan-14",
      title: "먼지 쌓인 환풍기",
      desc: "날개에 때가 낀 환풍기를 떼어 내고",
      href: "/noise",
    },
    {
      image: "bathroom-fan-18",
      title: "흡입 확인",
      desc: "교체 후 휴지를 대어 빨아들이는 힘 확인",
      href: "/process",
    },
    {
      image: "bathroom-fan-04",
      title: "힘펠 환풍기",
      desc: "덮개가 평평한 힘펠 환풍기로 교체",
      href: "/smell",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "himpel-hugente-fan-06", caption: "힘펠 휴젠뜨 복합환풍기" },
    { image: "tioram-fan-19", caption: "티오람 복합환풍기" },
    { image: "bathroom-fan-30", caption: "대리석 무늬 욕실 환풍기" },
    { image: "bathroom-fan-40", caption: "샤워부스 위 환풍기" },
    { image: "himpel-hugente-fan-21", caption: "리모컨으로 작동 확인" },
    { image: "bathroom-fan-38", caption: "물결무늬 타일 욕실 환풍기" },
    { image: "tioram-fan-11", caption: "작은 욕실 복합환풍기" },
    { image: "bathroom-fan-17", caption: "원형 그릴 환풍기" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "bathroom-fan-41", caption: "기존 환풍기 떼기" },
    { image: "tioram-fan-03", caption: "새 제품 크기에 맞춰 천장 재단" },
    { image: "bathroom-fan-22", caption: "휴지로 흡입 확인" },
  ],

  about: {
    image: "himpel-hugente-fan-12",
    imageAlt: "현명한 홈케어가 욕실 천장에 단 복합환풍기",
    body: "현명한 홈케어는 욕실·화장실 환풍기를 교체합니다.\n상담부터 시공까지 대표가 직접 맡고, 출장비·견적비 없이 사진 한 장으로 비용을 안내해 드립니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "지금 달린 환풍기 사진과 증상을 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "맞는 제품과 시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "약속한 날짜에 방문해 기존 환풍기를 떼고 새 환풍기를 달아 드립니다.",
    },
  ],

  pricing: {
    heading: "화장실 환풍기 교체 비용",
    lead: "지금 달린 환풍기 사진과 원하는 제품을 보내주시면 확인 후 비용을 안내해 드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 무료", // 고객 확인(안전바)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "지금 달린 환풍기 사진과 원하는 제품을 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "환풍기를 바꾸면 담배 냄새가 안 올라오나요?",
      a: "화장실 담배 냄새는 다른 집 배기가 환풍기 통로로 거꾸로 들어오는 경우가 많습니다. 꺼져 있을 때 통로를 닫는 댐퍼가 달린 환풍기로 바꾸면 줄어듭니다.",
    },
    {
      q: "일반 환풍기를 복합환풍기로 바꿀 수 있나요?",
      a: "네. 복합환풍기는 일반 환풍기보다 커서, 제품 크기에 맞춰 천장 구멍을 넓혀서 답니다.",
    },
    { q: "제품은 직접 사 두면 되나요?", a: "" }, // 채워 주세요: 제품 포함 시공인지, 고객이 산 제품도 달아 주는지
    { q: "시공은 얼마나 걸리나요?", a: "" }, // 채워 주세요
    { q: "출장비나 견적비가 따로 있나요?", a: "출장비와 견적비 모두 무료입니다." }, // 고객 확인(안전바)
  ],

  // 메인 페이지 제목들처럼 사이트마다 달라지는 문구. \n은 줄바꿈
  text: {
    serviceType: "화장실 환풍기 교체",
    catalogName: "화장실 환풍기 교체 서비스",
    servicesHeading: "어떤 점이 불편하신가요?",
    galleryHeading: "환풍기 교체 사진",
    galleryAltSuffix: "환풍기 교체",
    faqHeading: "화장실 환풍기 교체,\n이런 점을 많이 물어보십니다",
    groupLabels: { service: "서비스 안내", space: "증상별", target: "제품별", info: "알아두면 좋은 정보" },
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
