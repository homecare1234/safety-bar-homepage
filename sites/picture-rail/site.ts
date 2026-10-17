// ─────────────────────────────────────────────────────────────
// 액자레일 설치 사이트 설정. sites/safetybar를 복사해 만들었다.
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// 원본 사진·키워드: 자료/picture-rail/ (git에 올리지 않음)
//
// «고객 확인»이라고 적힌 값은 안전바 사이트 때 고객이 확인해 준 내용(2026-09-29)이다.
// 액자레일에도 똑같은지 다시 확인받아야 한다.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01057061741"; // 숫자만
const phoneDisplay = "010-5706-1741"; // 표시용

const site = {
  id: "picture-rail",
  // 배포 도메인 (2026-10-10 확정: frame). 폴더 이름(picture-rail)과 달라도 된다.
  // 시안 주소(*.pages.dev / *.workers.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://frame.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true, // 2026-10-10 바로 공개 (사용자 결정)
  lang: "ko",
  // 메인 공유 이미지 (hero.image를 scripts/og.mjs가 1200×630으로 자른 것)
  ogImage: "/images/picture-rail/og/picture-rail-05.jpg",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "액자레일 설치 전문 업체 비용",
  shortTitle: "액자레일 설치",
  description:
    "액자레일 설치 전문 업체. 가정집 · 사무실 · 갤러리 못 없이 액자 거는 무타공 와이어 시공",
  keywords: [
    "액자레일 설치",
    "액자레일 설치 비용",
    "액자레일 설치 업체",
    "무타공 액자레일 설치",
    "액자레일 와이어 설치",
    "액자 와이어 설치",
    "못 없는 액자레일 설치",
    "가정집 액자레일 설치",
    "사무실 액자레일 설치",
    "전시회 액자레일 설치",
    "갤러리 액자레일 설치",
    "천장 액자레일 설치",
    "천장 몰딩 액자레일 설치",
    "그림 액자레일 설치",
    "액자걸이 와이어 설치",
    "벽 손상 없는 액자레일 설치",
    "아크릴 액자레일 설치",
    "무거운 액자레일 설치",
    "가족사진 액자레일 설치",
    "액자걸이 설치",
    "웨딩사진 액자레일 설치",
  ],

  // ── 브랜드 ──
  brand: {
    name: "현명한 홈케어",
    tagline: "벽에 못 박지 않고, 걸고 싶은 자리에",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "액자레일 설치 문의드립니다.\n\n" +
      "· 설치 장소(예: 거실 소파 위 벽, 사무실 회의실):\n" +
      "· 걸 액자 개수와 대략 크기:\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "벽과 천장이 함께 보이게 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
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
    specialty: "액자레일 · 액자 와이어 설치",
    mainWork: "가정집 · 사무실 · 전시장 · 갤러리", // 시공 사진 기준
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서브도메인마다 따로 발급) ──
  verification: {
    naver: "dd70dbc257bae0557094c7497e6807b880163385", // 네이버 서치어드바이저 → HTML 태그 방식 (2026-10-10)
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 액자레일 설치",
    heading: "액자레일 설치",
    subheading: "가정집 · 사무실 · 갤러리 못 없이 액자 거는 레일 시공",
    lead: "사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "picture-rail-05" as string | null,
    imageAlt: "거실 소파 위 벽에 액자레일 와이어로 나란히 건 액자 두 점",
    slides: [
      { image: "picture-rail-05", position: "65% 45%" },
      { image: "gallery-picture-rail-08", position: "60% 50%" },
      { image: "office-picture-rail-03", position: "60% 50%" },
      { image: "picture-rail-36", position: "60% 50%" },
      { image: "wedding-photo-picture-rail-11", position: "65% 45%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 · 인천" }, // 고객 확인(안전바)
    { label: "시공 담당", value: "대표자 직접 상담 · 시공" }, // 고객 확인(안전바)
    { label: "시공 장소", value: "가정집 · 사무실 · 갤러리" }, // 시공 사진 기준
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "picture-rail-05",
      title: "거실 소파 액자",
      desc: "레일에서 내린 와이어로 높이를 맞춰 나란히",
      href: "/home",
    },
    {
      image: "gallery-picture-rail-08",
      title: "전시장",
      desc: "작품 여러 점을 같은 높이로 한 줄에",
      href: "/gallery",
    },
    {
      image: "office-picture-rail-03",
      title: "사무실 아크릴 작품",
      desc: "창가 벽에 가로로 긴 아크릴 작품",
      href: "/acrylic",
    },
    {
      image: "wedding-photo-picture-rail-11",
      title: "웨딩사진",
      desc: "같은 높이로 나란히 건 캔버스 웨딩사진",
      href: "/wedding",
    },
    {
      image: "family-photo-picture-rail-05",
      title: "가족사진",
      desc: "큰 가족사진을 가운데, 작은 사진을 양옆에",
      href: "/family",
    },
    {
      image: "picture-rail-41",
      title: "여섯 폭 그림",
      desc: "세로로 긴 액자 여섯 점을 한 줄로",
      href: "/painting",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "picture-rail-16", caption: "대리석 무늬 벽 아크릴 액자" },
    { image: "picture-rail-38", caption: "복도 액자 세 점" },
    { image: "office-picture-rail-13", caption: "사무실 서예 액자" },
    { image: "picture-rail-30", caption: "깊이 있는 큰 액자" },
    { image: "gallery-picture-rail-26", caption: "복도 대형 그림" },
    { image: "picture-rail-23", caption: "캔버스 액자" },
    { image: "family-photo-picture-rail-01", caption: "복도 가로 긴 가족사진" },
    { image: "picture-rail-47", caption: "가로로 긴 그림" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "gallery-picture-rail-21", caption: "천장 쪽에 레일 고정" },
    { image: "family-photo-picture-rail-03", caption: "레일에 와이어 걸기" },
    { image: "picture-rail-17", caption: "수평계로 액자 수평 맞추기" },
  ],

  about: {
    image: "gallery-picture-rail-27",
    imageAlt: "현명한 홈케어가 액자레일을 설치한 복도의 대형 그림",
    body: "현명한 홈케어는 가정집, 사무실, 갤러리에 액자레일을 설치합니다.\n상담부터 시공까지 대표가 직접 맡고, 출장비·견적비 없이 사진 한 장으로 비용을 안내해 드립니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "설치할 벽과 천장 사진, 걸 액자 개수를 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "약속한 날짜에 방문해 레일을 달고 액자까지 걸어 드립니다.",
    },
  ],

  pricing: {
    heading: "액자레일 설치 비용",
    lead: "설치할 벽과 천장 사진, 걸 액자 개수를 보내주시면 확인 후 비용을 안내해 드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 무료", // 고객 확인(안전바)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "설치할 벽과 천장 사진, 걸 액자 개수를 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "벽에 못을 박지 않나요?",
      a: "네. 액자는 천장 쪽에 단 레일에서 내려온 와이어에 겁니다. 벽에는 못을 박지 않습니다.",
    },
    {
      q: "나중에 액자를 바꾸거나 옮길 수 있나요?",
      a: "네. 와이어의 고리 높이를 바꾸거나 와이어를 레일을 따라 옮기면 됩니다. 새로 구멍을 낼 필요가 없습니다.",
    },
    { q: "무거운 액자도 걸 수 있나요?", a: "" }, // 채워 주세요: 와이어 한 줄이 버티는 무게, 무거울 때 거는 방법
    { q: "시공은 얼마나 걸리나요?", a: "" }, // 채워 주세요
    { q: "출장비나 견적비가 따로 있나요?", a: "출장비와 견적비 모두 무료입니다." }, // 고객 확인(안전바)
  ],

  // 메인 페이지 제목들처럼 사이트마다 달라지는 문구. \n은 줄바꿈
  text: {
    serviceType: "액자레일 설치",
    catalogName: "액자레일 설치 서비스",
    servicesHeading: "어디에 액자레일을 다시나요?",
    galleryHeading: "액자레일 시공 사진",
    galleryAltSuffix: "액자레일 설치",
    faqHeading: "액자레일 설치,\n이런 점을 많이 물어보십니다",
    groupLabels: { service: "서비스 안내", space: "설치 장소별", target: "거는 액자별", info: "알아두면 좋은 정보" },
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
