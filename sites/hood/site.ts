// ─────────────────────────────────────────────────────────────
// 주방 후드 교체 사이트 설정. sites/fan을 복사해 만들었다.
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// 원본 사진·키워드: 자료/hood/ (git에 올리지 않음)
//
// «고객 확인»이라고 적힌 값은 안전바 사이트 때 고객이 확인해 준 내용(2026-09-29)이다.
// 주방 후드에도 똑같은지 다시 확인받아야 한다.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01057061741"; // 숫자만
const phoneDisplay = "010-5706-1741"; // 표시용

const site = {
  id: "hood",
  // 배포 도메인 (임시: hood — 확정되면 바꾼다). 폴더 이름(hood)과 달라도 된다.
  // 시안 주소(*.pages.dev / *.workers.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://hood.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true,
  lang: "ko",
  // 메인 공유 이미지 (hero.image를 scripts/og.mjs가 1200×630으로 자른 것)
  ogImage: "/images/hood/og/chimney-kitchen-hood-21.jpg",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "주방 후드 교체 전문 업체 비용",
  shortTitle: "주방 후드 교체",
  description:
    "주방 · 부엌 렌지후드 교체 · 설치 전문 업체. 기름때, 냄새, 소음, 모터 고장 수리, 슬림형 · 침니형 후드 시공",
  keywords: [
    "주방 후드 교체",
    "주방 환풍기 교체",
    "주방 후황 교체",
    "주방 후드 고장",
    "주방 후드 수리",
    "주방 후드 교체 비용",
    "주방 후드 교체 업체",
    "주방 후드 기름때",
    "주방 후드 설치",
    "부엌 후드 교체",
    "부엌 환풍기 교체",
    "렌지후드 교체",
    "가스렌지 후드 교체",
    "가스레인지 후드 교체",
    "주방 후드 소음",
    "주방 후드 냄새",
    "주방 후드 모터 고장",
  ],

  // ── 브랜드 ──
  brand: {
    name: "현명한 홈케어",
    tagline: "기름 냄새 없는 주방으로",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "주방 후드 교체 문의드립니다.\n\n" +
      "· 증상(예: 소음, 냄새, 모터 고장, 기름때):\n" +
      "· 지금 후드 모양(예: 슬림형, 침니형):\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "지금 달린 후드 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
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
    specialty: "주방 후드 · 렌지후드 교체",
    mainWork: "슬림형 · 침니형 · 박스형 후드", // 시공 사진 기준
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서브도메인마다 따로 발급) ──
  verification: {
    naver: "b12ae5f666d92fb7f2e9f89903e07d18df97458d",
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 주방 후드 교체",
    heading: "주방 후드 교체",
    subheading: "기름때 · 냄새 · 소음 · 모터 고장, 슬림형부터 침니형까지",
    lead: "지금 달린 후드 사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "chimney-kitchen-hood-21" as string | null,
    imageAlt: "상부장 사이에 새로 단 침니형 주방 후드",
    slides: [
      { image: "chimney-kitchen-hood-21", position: "50% 45%" },
      { image: "range-hood-17", position: "50% 45%" },
      { image: "slim-range-hood-20", position: "50% 40%" },
      { image: "kitchen-hood-17", position: "50% 45%" },
      { image: "chimney-range-hood-20", position: "50% 45%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 · 인천" }, // 고객 확인(안전바)
    { label: "시공 담당", value: "대표자 직접 상담 · 시공" }, // 고객 확인(안전바)
    { label: "시공 제품", value: "슬림형 · 침니형 · 박스형 후드" }, // 시공 사진 기준
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "chimney-kitchen-hood-21",
      title: "침니형 후드",
      desc: "낡은 삼각 후드를 떼고 새 침니형으로",
      href: "/chimney",
    },
    {
      image: "slim-range-hood-20",
      title: "슬림형 후드",
      desc: "상부장 아래 얇은 후드를 새것으로",
      href: "/slim",
    },
    {
      image: "range-hood-17",
      title: "스테인리스 박스형 후드",
      desc: "상부장 사이를 덮는 후드 교체",
      href: "/range-hood",
    },
    {
      image: "slim-kitchen-hood-06",
      title: "기름때 낀 후드",
      desc: "팬 망에 기름이 눌어붙은 후드",
      href: "/grease",
    },
    {
      image: "range-hood-replacement-07",
      title: "낡은 모터",
      desc: "기름때에 찌든 모터를 떼어 내고",
      href: "/motor",
    },
    {
      image: "range-hood-replacement-13",
      title: "수평 맞추기",
      desc: "수평계를 올려 기울기 없이 고정",
      href: "/process",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "kitchen-hood-17", caption: "흰색 박스형 후드" },
    { image: "gas-range-hood-16", caption: "가스레인지 위 스테인리스 후드" },
    { image: "chimney-range-hood-20", caption: "침니형 후드" },
    { image: "slim-kitchen-hood-17", caption: "슬림형 후드" },
    { image: "kitchen-hood-replacement-18", caption: "필터 두 장짜리 후드" },
    { image: "range-hood-replacement-23", caption: "조명 켜고 작동 확인" },
    { image: "slim-range-hood-21", caption: "검은 타일 주방 슬림형 후드" },
    { image: "chimney-kitchen-hood-15", caption: "새 필터와 조명" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "kitchen-hood-replacement-09", caption: "기존 후드 떼기" },
    { image: "range-hood-replacement-13", caption: "수평 맞춰 본체 달기" },
    { image: "range-hood-replacement-15", caption: "덕트 · 전원 연결" },
  ],

  about: {
    image: "range-hood-replacement-24",
    imageAlt: "현명한 홈케어가 상부장 사이에 단 스테인리스 주방 후드",
    body: "현명한 홈케어는 주방 후드를 교체합니다.\n상담부터 시공까지 대표가 직접 맡고, 출장비·견적비 없이 사진 한 장으로 비용을 안내해 드립니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "지금 달린 후드 사진과 증상을 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "맞는 제품과 시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "약속한 날짜에 방문해 기존 후드를 떼고 새 후드를 달아 드립니다.",
    },
  ],

  pricing: {
    heading: "주방 후드 교체 비용",
    lead: "지금 달린 후드 사진과 원하는 제품을 보내주시면 확인 후 비용을 안내해 드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 무료", // 고객 확인(안전바)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "지금 달린 후드 사진과 원하는 제품을 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "인덕션 주방도 후드를 바꿀 수 있나요?",
      a: "네. 가스레인지든 인덕션이든 후드 교체 방법은 같습니다. 시공 사진에도 두 주방이 모두 있습니다.",
    },
    {
      q: "기름때가 심한데 청소로 안 될까요?",
      a: "필터와 겉면은 청소로 나아지기도 합니다. 모터와 팬 안쪽까지 기름이 눌어붙었거나 소리가 커졌다면 교체를 권합니다.",
    },
    { q: "제품은 직접 사 두면 되나요?", a: "" }, // 채워 주세요: 제품 포함 시공인지, 고객이 산 제품도 달아 주는지
    { q: "시공은 얼마나 걸리나요?", a: "" }, // 채워 주세요
    { q: "출장비나 견적비가 따로 있나요?", a: "출장비와 견적비 모두 무료입니다." }, // 고객 확인(안전바)
  ],

  // 메인 페이지 제목들처럼 사이트마다 달라지는 문구. \n은 줄바꿈
  text: {
    serviceType: "주방 후드 교체",
    catalogName: "주방 후드 교체 서비스",
    servicesHeading: "어떤 점이 불편하신가요?",
    galleryHeading: "주방 후드 교체 사진",
    galleryAltSuffix: "주방 후드 교체",
    faqHeading: "주방 후드 교체,\n이런 점을 많이 물어보십니다",
    groupLabels: { service: "서비스 안내", space: "증상별", target: "종류별", info: "알아두면 좋은 정보" },
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
