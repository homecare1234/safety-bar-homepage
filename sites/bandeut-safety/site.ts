// ─────────────────────────────────────────────────────────────
// 반듯한 홈케어 · 안전바 설치 사이트 설정 (두 번째 브랜드, 2026-10-28).
// 사진은 현명한 홈케어 안전바(safetybar) 사진을 scripts/derive-images.mjs로 반전·자르기·색 조정해 새 이름으로 만든 것(public/images/bandeut-safety).
// 디자인(theme: "warm")과 글은 다르게 한다. 같은 글이 두 도메인에 있으면 네이버가 유사문서로 본다.
// content/*.md 36개는 2026-10-28 해요체로 새로 씀(대표 사진도 다르게). safetybar 글을 고칠 때 이쪽에 그대로 복사하지 말 것.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01080981741"; // 숫자만 (준호형 확인 2026-10-28, 현명한 홈케어와 다른 번호)
const phoneDisplay = "010-8098-1741"; // 표시용

const site = {
  id: "bandeut-safety",
  theme: "warm", // 디자인: public/themes/warm.css (크림 바탕 · 짙은 초록 · 명조 제목)
  url: process.env.SITE_URL ?? "https://safety.bandeuthome.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true, // 2026-10-28 공개
  lang: "ko",
  ogImage: "/images/bandeut-safety/og/bathtub-door-grab-bar-30.jpg",

  // ── 검색 결과에 뜨는 제목 ──
  title: "화장실 안전바 설치 전문 업체 비용", // 현명한 홈케어(«안전바 설치 전문 업체 비용»)와 겹치지 않게
  shortTitle: "안전바 설치",
  description:
    "부모님 댁 화장실 · 욕조 · 계단 안전바 설치. 벽에 단단히 고정하는 낙상 방지 손잡이와 핸드레일을 대표가 직접 시공합니다. 출장비 · 견적비 무료",
  keywords: [ // 현명한 홈케어와 같은 키워드 (준호형 결정 2026-10-29: 사람들이 많이 찾는 말)
    "화장실 안전바 설치",
    "안전바 설치",
    "안전바 설치 비용",
    "안전바 설치 업체",
    "노인 안전바 설치",
    "안전바 시공",
    "욕실 안전바 설치",
    "부모님 안전바 설치",
    "계단 안전바 설치",
    "변기 안전바 설치",
    "어르신 안전바 설치",
    "침대 안전가드 설치",
    "세면대 안전바 설치",
    "소변기 안전바 설치",
    "장애인 안전바 설치",
    "핸드레일 설치",
    "안전손잡이 설치",
  ],

  // ── 브랜드 ──
  brand: {
    name: "반듯한 홈케어",
    tagline: "넘어지기 전에, 잡을 곳부터",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "안전바 설치 상담 부탁드립니다.\n\n" +
      "· 달 곳(예: 변기 옆, 욕조 벽, 계단):\n" +
      "· 쓰실 분(예: 부모님, 어르신):\n" +
      "· 지역(시·구):\n" +
      "· 원하는 날짜:\n\n" +
      "달 곳 사진을 함께 보내주시면 보고 비용과 날짜를 말씀드립니다.",
    hours: "24시간 연락 주셔도 됩니다", // 고객 확인(현명한 홈케어 안전바, 2026-09-29)
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
    specialty: "안전바 · 핸드레일 · 안전손잡이",
    mainWork: "화장실 · 욕조 · 세면대 · 복도 · 계단",
    geo: null as { lat: number; lng: number } | null,
  },

  verification: {
    naver: "52f4f4d4cf403f3dcd52ea24b8e1998f583c0d8d", // 네이버 서치어드바이저 HTML 태그 (2026-10-28)
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 안전바 시공",
    heading: "부모님 댁\n안전바 설치",
    subheading: "화장실 · 욕조 · 계단, 짚고 일어설 자리를 단단하게",
    lead: "달 곳을 사진으로 찍어 보내주시면, 보고 비용과 날짜를 말씀드립니다.",
    image: "bathtub-door-grab-bar-30" as string | null,
    imageAlt: "욕조 위 벽에 일자 안전바와 ㄱ자 안전바를 단 욕실",
    slides: [
      { image: "bathtub-door-grab-bar-30", position: "50% 55%" },
      { image: "toilet-shower-grab-bar-26", position: "50% 55%" },
      { image: "villa-stairs-wall-rail-25", position: "50% 50%" },
      { image: "sink-toilet-folding-grab-bar-12", position: "50% 50%" },
      { image: "bathroom-entrance-grab-bar-26", position: "50% 50%" },
    ],
  },

  features: [
    { label: "다니는 곳", value: "서울 · 경기 · 인천" },
    { label: "누가 오나요", value: "상담한 대표가 직접" },
    { label: "걸리는 시간", value: "보통 1~2시간" },
    { label: "물어보는 법", value: "전화 · 문자로 사진" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "sink-toilet-folding-grab-bar-12",
      title: "변기 옆 접이식",
      desc: "앉고 일어설 때 짚는 손잡이, 안 쓸 땐 위로 접어서",
      href: "/toilet",
    },
    {
      image: "bathtub-l-grab-bar-25",
      title: "욕조 벽 손잡이",
      desc: "욕조에 들어가고 나올 때 미끄러지지 않게",
      href: "/bathtub",
    },
    {
      image: "villa-stairs-wall-rail-26",
      title: "빌라 계단 손잡이",
      desc: "양쪽 벽을 따라 처음부터 끝까지",
      href: "/stairs",
    },
    {
      image: "pedestal-sink-grab-bar-23",
      title: "세면대 옆 손잡이",
      desc: "세수하고 허리를 펼 때 짚는 자리",
      href: "/sink",
    },
    {
      image: "hallway-bathroom-wall-rail-16",
      title: "복도 · 화장실 앞 핸드레일",
      desc: "방에서 화장실까지 벽을 짚고 걸을 수 있게",
      href: "/handrail",
    },
    {
      image: "shower-booth-toilet-grab-bar-24",
      title: "샤워부스 옆 화장실",
      desc: "좁은 욕실에 변기 손잡이와 벽 손잡이를 함께",
      href: "/bathroom",
    },
  ],

  // ── 메인 사진 모음 ──
  gallery: [
    { image: "old-bathroom-grab-bar-20", caption: "오래된 타일 욕실" },
    { image: "outdoor-stairs-wall-rail-30", caption: "바깥 계단 벽" },
    { image: "shower-chair-grab-bar-30", caption: "샤워 의자 옆" },
    { image: "public-restroom-grab-bar-29", caption: "가게 화장실" },
    { image: "toilet-entrance-grab-bar-24", caption: "화장실 문 옆 벽" },
    { image: "narrow-bathroom-grab-bar-26", caption: "좁은 욕실 변기 옆" },
    { image: "bathroom-entrance-grab-bar-29", caption: "샤워하는 자리 벽" },
    { image: "toilet-shower-grab-bar-27", caption: "변기와 샤워 자리 함께" },
  ],

  // ── 작업 모습 3장 ──
  workPhotos: [
    { image: "bathtub-l-grab-bar-26", caption: "수평계로 기울기 보기" },
    { image: "public-restroom-grab-bar-28", caption: "단 뒤 힘 주어 당겨 보기" },
    { image: "narrow-bathroom-grab-bar-27", caption: "손으로 쥐어 보며 마무리" },
  ],

  about: {
    image: "toilet-shower-grab-bar-26",
    imageAlt: "반듯한 홈케어가 변기 옆과 벽에 단 안전바",
    body: "반듯한 홈케어는 집 안에서 넘어지지 않도록 손잡이를 다는 일을 합니다.\n전화를 받은 대표가 직접 가서 달고, 다 단 뒤에도 문제가 생기면 다시 봐 드립니다. 출장비와 견적비는 받지 않습니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 찍어 보내기",
      body: "손잡이를 달 벽을 조금 떨어져서 찍어 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "비용 · 날짜 말씀드리기",
      body: "사진을 보고 어떤 손잡이가 맞는지와 비용, 가능한 날짜를 알려 드립니다.",
    },
    {
      step: "03",
      title: "찾아가서 달기",
      body: "정한 날 찾아가 벽에 단단히 고정합니다. 보통 1~2시간이면 끝납니다.",
    },
  ],

  pricing: {
    heading: "안전바 설치 비용",
    lead: "어디에 몇 개를 다는지에 따라 다릅니다. 사진을 보내주시면 보고 바로 말씀드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 받지 않습니다",
  },

  faq: [
    {
      q: "가격은 어떻게 알 수 있나요?",
      a: "손잡이를 달 곳을 사진으로 찍어 문자로 보내주세요. 보고 비용을 알려 드립니다.",
    },
    {
      q: "저는 멀리 살고, 부모님 댁에만 달아 드리고 싶어요.",
      a: "네, 자녀분과 문자로 상담하고 부모님 댁으로 찾아갑니다.",
    },
    {
      q: "붙이는 손잡이(흡착식)면 안 되나요?",
      a: "붙이는 손잡이는 몸무게를 실으면 떨어질 수 있습니다. 넘어짐을 막으려면 벽에 나사로 고정하는 손잡이가 안전합니다.",
    },
    { q: "다는 데 얼마나 걸리나요?", a: "보통 1~2시간이면 끝납니다." },
    { q: "타일이 깨지지 않을까요?", a: "타일이 깨지지 않게 뚫어서 답니다." },
    { q: "보러 오는 것도 돈이 드나요?", a: "출장비와 견적비 모두 받지 않습니다." },
  ],

  text: {
    serviceType: "안전바 설치",
    catalogName: "안전바 설치",
    servicesHeading: "집 안 어디에\n손잡이가 필요할까요?",
    galleryHeading: "집마다 다는 자리가 다릅니다",
    galleryAltSuffix: "안전바",
    faqHeading: "상담할 때\n자주 듣는 질문",
    groupLabels: { service: "안내", space: "다는 곳", target: "쓰실 분", info: "알아 두기", case: "다녀온 집" },
  },

  nav: [
    { label: "비용", href: "/cost" },
    { label: "다는 순서", href: "/process" },
    { label: "다녀온 집", href: "/cases" },
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
