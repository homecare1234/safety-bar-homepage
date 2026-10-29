// ─────────────────────────────────────────────────────────────
// 반듯한 홈케어 · 액자레일 사이트 설정 (두 번째 브랜드, 2026-10-29).
// 사진은 2026-10-29 받은 zip(액자1~21)에서 현명한 홈케어 액자레일(picture-rail)에 이미 쓴 사진 101장을 빼고 변환한 것
// (public/images/bandeut-picture-rail, 파일 이름 «-art-rail»). 빼 둔 사진: 자료/bandeut-picture-rail-겹침/
// 글은 해요체로 새로 씀. picture-rail 글을 고칠 때 이쪽에 그대로 복사하지 말 것(네이버 유사문서).
// 확인된 사실만 씀: 액자 하나 20kg, 레일은 천장·몰딩에 구멍 뚫어 고정(벽은 구멍 없음), 와이어 따로 구매 가능(2026-10-27 고객 확인).
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01080981741"; // 반듯한 홈케어 번호 (2026-10-28 확정)
const phoneDisplay = "010-8098-1741";

const site = {
  id: "bandeut-picture-rail",
  theme: "warm", // 반듯한 홈케어 디자인 (크림 바탕 · 짙은 초록 · 명조 제목)
  url: process.env.SITE_URL ?? "https://frame.bandeuthome.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true, // 2026-10-29 공개
  lang: "ko",
  ogImage: "/images/bandeut-picture-rail/og/sofa-canvas-art-rail-11.jpg",

  // ── 검색 결과에 뜨는 제목 ──
  title: "액자레일 설치 비용 시공 업체", // 준호형 결정(2026-10-29). 현명한 홈케어는 «액자레일 설치 전문 업체 비용»
  shortTitle: "액자레일 시공",
  description:
    "거실 · 복도 · 사무실 · 전시장 액자레일 시공. 천장 쪽에 레일을 달고 와이어로 걸어서 액자 거는 벽엔 못 자국이 남지 않아요. 출장비 · 견적비 무료",
  keywords: [ // 현명한 홈케어와 같은 키워드 (준호형 결정 2026-10-29: 사람들이 많이 찾는 말)
    "액자레일 설치",
    "액자레일 설치 비용",
    "액자레일 설치 업체",
    "못 없이 액자 걸기",
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
    "픽쳐레일 설치",
    "그림 레일 설치",
    "갤러리 레일 설치",
    "와이어 액자걸이",
    "벽에 액자 걸기",
    "액자 거는 법",
    "무타공 액자걸이",
    "천장 레일 액자걸이",
    "아트월 액자걸이",
    "액자 고리 달기",
  ],

  // ── 브랜드 ──
  brand: {
    name: "반듯한 홈케어",
    tagline: "벽은 그대로, 그림은 반듯하게",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "액자레일 시공 상담 부탁드립니다.\n\n" +
      "· 걸 곳(예: 거실 소파 위, 복도, 회의실):\n" +
      "· 걸 액자 수와 대략 크기:\n" +
      "· 지역(시·구):\n" +
      "· 원하는 날짜:\n\n" +
      "벽과 천장이 함께 나오게 찍은 사진을 보내주시면 보고 비용과 날짜를 말씀드립니다.",
    hours: "24시간 연락 주셔도 됩니다",
  },

  // ── 업체 정보 ──
  business: {
    legalName: "반듯한 홈케어",
    owner: "",
    registrationNo: "",
    address: {
      street: "",
      city: "서울특별시",
      region: "서울",
      postalCode: "",
      country: "KR",
    },
    areaServed: ["서울특별시", "경기도", "인천광역시"],
    areaServedLabel: "서울 · 경기 · 인천",
    specialty: "액자레일 · 와이어 액자걸이",
    mainWork: "거실 · 복도 · 침실 · 사무실 · 전시장",
    geo: null as { lat: number; lng: number } | null,
  },

  verification: {
    naver: "",
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 액자레일 시공",
    heading: "못 자국 없이\n액자레일 시공",
    subheading: "거실 · 복도 · 사무실 · 전시장, 천장 쪽 레일에 와이어로",
    lead: "걸 벽을 천장까지 나오게 찍어 보내주시면, 보고 비용과 날짜를 말씀드립니다.",
    image: "sofa-canvas-art-rail-11" as string | null,
    imageAlt: "거실 소파 위 벽에 와이어로 건 가로로 긴 캔버스 그림",
    slides: [
      { image: "sofa-canvas-art-rail-11", position: "50% 45%" },
      { image: "oriental-painting-art-rail-18", position: "50% 50%" },
      { image: "exhibition-hall-art-rail-03", position: "50% 50%" },
      { image: "large-artwork-art-rail-23", position: "50% 50%" },
      { image: "flower-painting-art-rail-10", position: "50% 50%" },
    ],
  },

  features: [
    { label: "다니는 곳", value: "서울 · 경기 · 인천" },
    { label: "누가 오나요", value: "상담한 대표가 직접" },
    { label: "한 액자 무게", value: "20kg까지" },
    { label: "물어보는 법", value: "전화 · 문자로 사진" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "sofa-canvas-art-rail-11",
      title: "소파 위 큰 캔버스",
      desc: "도배 벽에 구멍 없이, 소파와 간격을 맞춰",
      href: "/living-room",
    },
    {
      image: "oriental-painting-art-rail-18",
      title: "여섯 폭 동양화",
      desc: "세로로 긴 액자 여섯 점을 같은 높이로",
      href: "/multi-panel",
    },
    {
      image: "entrance-hallway-art-rail-13",
      title: "현관 복도 캔버스",
      desc: "좁은 복도 벽에 크기 다른 두 점",
      href: "/hallway",
    },
    {
      image: "private-office-art-rail-13",
      title: "사무실 방마다 한 점",
      desc: "대표실 · 개인실에 액자를 하나씩",
      href: "/office",
    },
    {
      image: "exhibition-hall-art-rail-03",
      title: "전시장 벽 전체",
      desc: "가벽까지 레일을 둘러 작품을 한 줄로",
      href: "/exhibition",
    },
    {
      image: "entrance-hallway-art-rail-19",
      title: "대리석 무늬 타일 벽",
      desc: "못을 박기 어려운 벽에도 와이어로",
      href: "/marble-wall",
    },
  ],

  // ── 메인 사진 모음 ──
  gallery: [
    { image: "large-artwork-art-rail-23", caption: "벽을 채우는 큰 그림" },
    { image: "panorama-canvas-art-rail-12", caption: "가로로 긴 야경 캔버스" },
    { image: "cove-light-art-rail-11", caption: "간접조명 천장 아래" },
    { image: "bedroom-photo-art-rail-12", caption: "침실 사진 액자" },
    { image: "corridor-oil-painting-art-rail-13", caption: "건물 복도 유화" },
    { image: "flower-painting-art-rail-10", caption: "꽃 그림 두 점" },
    { image: "poster-room-art-rail-19", caption: "방 몰딩 아래 포스터" },
    { image: "family-portrait-art-rail-12", caption: "소파 위 가족사진" },
  ],

  // ── 작업 모습 3장 ──
  workPhotos: [
    { image: "gold-frame-art-rail-06", caption: "몰딩 아래 레일 고정" },
    { image: "oriental-painting-art-rail-16", caption: "와이어에 고리 끼우기" },
    { image: "gold-frame-art-rail-11", caption: "수평계로 기울기 보기" },
  ],

  about: {
    image: "flower-painting-art-rail-21",
    imageAlt: "반듯한 홈케어가 거실 소파 위에 와이어로 건 항구 그림",
    body: "반듯한 홈케어는 천장 쪽에 레일을 달고 와이어로 액자를 거는 일을 해요.\n전화를 받은 대표가 직접 가서 레일을 달고 액자까지 걸어 드려요. 출장비와 견적비는 받지 않아요.",
  },

  process: [
    {
      step: "01",
      title: "사진 찍어 보내기",
      body: "걸 벽을 천장까지 나오게 찍고, 걸 액자 수와 크기를 함께 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "비용 · 날짜 말씀드리기",
      body: "천장 모양과 레일 길이를 보고 비용과 가능한 날짜를 알려 드려요.",
    },
    {
      step: "03",
      title: "찾아가서 걸기",
      body: "정한 날 찾아가 레일을 달고, 와이어로 액자 높이와 수평을 맞춰 걸어 드려요.",
    },
  ],

  pricing: {
    heading: "액자레일 시공 비용",
    lead: "레일 길이와 걸 액자 수에 따라 달라요. 사진을 보내주시면 보고 바로 말씀드려요.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 받지 않아요",
  },

  faq: [
    {
      q: "가격은 어떻게 알 수 있나요?",
      a: "걸 벽을 천장까지 나오게 찍어 문자로 보내주세요. 걸 액자 수와 크기도 알려 주시면 보고 비용을 말씀드려요.",
    },
    {
      q: "벽에 구멍이 하나도 안 생기나요?",
      a: "액자를 거는 벽에는 구멍을 내지 않아요. 다만 레일은 천장이나 몰딩에 구멍을 뚫어 고정해요.",
    },
    {
      q: "얼마나 무거운 액자까지 걸 수 있나요?",
      a: "액자 하나에 20kg까지 걸 수 있어요. 폭이 넓은 액자는 와이어를 양쪽에 두 줄 내려서 걸어요.",
    },
    {
      q: "나중에 액자를 더 걸고 싶으면요?",
      a: "레일은 그대로 두고 와이어만 더 걸면 돼요. 와이어는 따로 사실 수 있어요.",
    },
    { q: "보러 오는 것도 돈이 드나요?", a: "출장비와 견적비 모두 받지 않아요." },
  ],

  text: {
    serviceType: "액자레일 시공",
    catalogName: "액자레일 시공",
    servicesHeading: "어느 벽에\n액자를 거시나요?",
    galleryHeading: "집마다 거는 그림이 달라요",
    galleryAltSuffix: "액자레일",
    faqHeading: "상담할 때\n자주 듣는 질문",
    groupLabels: { service: "안내", space: "거는 곳", target: "거는 액자", info: "알아 두기", case: "다녀온 곳" },
  },

  nav: [
    { label: "비용", href: "/cost" },
    { label: "거는 순서", href: "/process" },
    { label: "다녀온 곳", href: "/cases" },
    { label: "업체 소개", href: "/#about" },
    { label: "질문", href: "/#faq" },
  ],
};

if (site.launched) {
  const missing = [
    (site.contact.phoneDigits.length < 10 || /^0+$/.test(site.contact.phoneDigits.slice(3))) && "전화번호",
  ].filter(Boolean);
  if (missing.length) throw new Error(`launched: true 인데 채우지 않은 항목이 있습니다: ${missing.join(", ")}`);
}

export type SiteConfig = typeof site;
export default site;
