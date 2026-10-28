// ─────────────────────────────────────────────────────────────
// 싱크대 문짝 교체 사이트 설정. sites/sink를 복사해 만들었다.
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// 원본 사진·키워드: 자료/sinkdoor/ (git에 올리지 않음)
//
// «고객 확인»이라고 적힌 값은 안전바 사이트 때 고객이 확인해 준 내용(2026-09-29)이다.
// 싱크대 문짝에도 똑같은지 다시 확인받아야 한다.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01057061741"; // 숫자만
const phoneDisplay = "010-5706-1741"; // 표시용

const site = {
  id: "sinkdoor",
  // 배포 도메인. 폴더 이름(sinkdoor)과 달라도 된다.
  // 시안 주소(*.pages.dev / *.workers.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://sinkdoor.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  launched: true,
  lang: "ko",
  // 메인 공유 이미지 (hero.image를 scripts/og.mjs가 1200×630으로 자른 것)
  ogImage: "/images/sinkdoor/og/apartment-sink-door-28.jpg",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "싱크대 문짝 교체 전문 업체 비용",
  shortTitle: "싱크대 문짝 교체",
  description:
    "싱크대 문짝 교체 전문 업체. 들뜨고 부푼 싱크대 문짝만 새것으로 바꿔 드립니다. 상부장 · 하부장 · 경첩까지 함께 시공. 출장비 · 견적비 무료",
  keywords: [
    "싱크대 문짝 교체",
    "싱크대 문짝 교체 비용",
    "싱크대 문짝 교체 업체",
    "싱크대 문짝 교체 가격",
    "싱크대 문 교체",
    "싱크대 도어 교체",
    "주방 문짝 교체",
    "주방 싱크대 문짝 교체",
    "아파트 싱크대 문짝 교체",
    "원룸 싱크대 문짝 교체",
    "오피스텔 싱크대 문짝 교체",
    "오래된 싱크대 문짝 교체",
    "싱크대 상부장 문짝 교체",
    "싱크대 하부장 문짝 교체",
    "싱크대 문짝 처짐",
    "싱크대 경첩 교체",
    "싱크대 수리",
    "싱크대 리폼",
    "싱크대 부분 리폼",
    "주방 리폼",
  ],

  // ── 브랜드 ──
  brand: {
    name: "현명한 홈케어",
    tagline: "싱크대는 그대로, 문짝만 새것으로",
    logoImage: null as string | null,
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "싱크대 문짝 교체 문의드립니다.\n\n" +
      "· 바꿀 곳(하부장 / 상부장 / 둘 다):\n" +
      "· 문짝 개수(대략):\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "지금 싱크대 전체 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
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
    specialty: "싱크대 문짝 교체 · 주방 문짝 교체",
    mainWork: "싱크대 상부장 · 하부장 문짝 · 경첩", // 시공 사진 기준
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서브도메인마다 따로 발급) ──
  verification: {
    naver: "5df898608d2a37e332ff4952bce6ae17693e82d6",
    google: "",
    bing: "",
    daum: "",
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 · 인천 싱크대 문짝 교체",
    heading: "싱크대 문짝 교체",
    subheading: "싱크대 상부장 · 하부장 문짝 교체, 경첩까지 함께",
    lead: "지금 싱크대 사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "apartment-sink-door-28" as string | null,
    imageAlt: "짙은 갈색 문짝을 떼고 흰 문짝으로 바꾼 아파트 일자 싱크대",
    slides: [
      { image: "apartment-sink-door-28", position: "50% 60%" },
      { image: "kitchen-door-replacement-25", position: "50% 50%" },
      { image: "high-gloss-sink-door-27", position: "50% 55%" },
      { image: "kitchen-cabinet-door-13", position: "50% 50%" },
      { image: "old-sink-door-23", position: "50% 55%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 · 인천" }, // 고객 확인(안전바)
    { label: "시공 담당", value: "대표자 직접 상담 · 시공" }, // 고객 확인(안전바)
    { label: "시공 품목", value: "상부장 · 하부장 문짝 · 경첩" }, // 시공 사진 기준
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "old-sink-door-23",
      title: "오래된 싱크대 문짝 교체",
      desc: "모서리가 썩은 초록 문짝을 흰 문짝으로",
      href: "/old",
    },
    {
      image: "apartment-sink-door-28",
      title: "아파트 싱크대 문짝 교체",
      desc: "짙은 갈색 일자 싱크대를 밝게",
      href: "/apartment",
    },
    {
      image: "upper-cabinet-door-24",
      title: "상부장 문짝 교체",
      desc: "위 수납장까지 같은 색으로 맞춰",
      href: "/upper-cabinet",
    },
    {
      image: "oneroom-sink-door-05",
      title: "원룸 싱크대 문짝 교체",
      desc: "물에 부푼 나무무늬 문짝을 새것으로",
      href: "/oneroom",
    },
    {
      image: "officetel-sink-door-17",
      title: "오피스텔 싱크대 문짝 교체",
      desc: "세탁기 옆 작은 싱크대, 상부장까지",
      href: "/officetel",
    },
    {
      image: "sink-hinge-replacement-04",
      title: "싱크대 경첩 교체",
      desc: "처지고 안 닫히는 문은 경첩부터",
      href: "/hinge",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "peeling-sink-door-21", caption: "필름이 들뜬 ㄱ자 싱크대" },
    { image: "black-sink-door-20", caption: "검은 문짝을 흰 문짝으로" },
    { image: "move-in-sink-door-22", caption: "입주 전 주방 문짝" },
    { image: "lower-cabinet-door-14", caption: "오븐 옆 하부장 문짝" },
    { image: "kitchen-reform-05", caption: "아일랜드 식탁까지 함께" },
    { image: "sink-partial-reform-28", caption: "거울 상부장 주방 부분 리폼" },
    { image: "sink-reform-26", caption: "나무무늬 하부장으로 리폼" },
    { image: "vanity-cabinet-door-25", caption: "세면대 하부장 문짝" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "apartment-sink-door-12", caption: "기존 문짝 떼기" },
    { image: "apartment-sink-door-13", caption: "경첩 자리를 낸 새 문짝" },
    { image: "apartment-sink-door-10", caption: "경첩 달고 높이 맞추기" },
  ],

  about: {
    image: "kitchen-door-replacement-25",
    imageAlt: "현명한 홈케어가 문짝을 새로 단 주방",
    body: "현명한 홈케어는 싱크대 몸통은 그대로 두고 문짝만 새것으로 바꿉니다.\n상담부터 시공까지 대표가 직접 맡고, 출장비·견적비 없이 사진 한 장으로 비용을 안내해 드립니다.",
  },

  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "지금 싱크대 전체 사진을 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "문짝 개수와 크기를 확인하고 시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "약속한 날짜에 방문해 기존 문짝을 떼고 새 문짝을 달아 드립니다.",
    },
  ],

  pricing: {
    heading: "싱크대 문짝 교체 비용",
    lead: "지금 싱크대 사진과 바꿀 문짝(하부장·상부장)을 보내주시면 확인 후 비용을 안내해 드립니다.",
    factors: [] as { title: string; body: string }[],
    note: "출장비 · 견적비 무료", // 고객 확인(안전바)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "지금 싱크대 전체 사진과 바꿀 곳(하부장·상부장)을 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "싱크대 전체를 바꾸지 않고 문짝만 바꿀 수 있나요?",
      a: "네. 위 시공 사진들은 모두 상판과 싱크대 몸통은 그대로 두고 문짝만 새것으로 바꾼 현장입니다.",
    },
    {
      q: "상부장 문짝도 같이 바꿀 수 있나요?",
      a: "네. 하부장만, 상부장만, 둘 다 모두 가능합니다. 시공 사진 중에도 상부장까지 함께 바꾼 현장이 여럿 있습니다.",
    },
    {
      q: "문이 처지고 잘 안 닫히는데 문짝을 바꿔야 하나요?",
      a: "문짝이 멀쩡하면 경첩만 바꾸거나 조정해도 되는 경우가 많습니다. 사진을 보내주시면 어느 쪽이 맞는지 알려 드립니다.",
    },
    { q: "문짝 색은 고를 수 있나요?", a: "" }, // 채워 주세요: 고를 수 있는 색·재질(하이그로시·무광 등)
    { q: "시공은 얼마나 걸리나요?", a: "" }, // 채워 주세요
    { q: "출장비나 견적비가 따로 있나요?", a: "출장비와 견적비 모두 무료입니다." }, // 고객 확인(안전바)
  ],

  // 메인 페이지 제목들처럼 사이트마다 달라지는 문구. \n은 줄바꿈
  text: {
    serviceType: "싱크대 문짝 교체",
    catalogName: "싱크대 문짝 교체 서비스",
    servicesHeading: "싱크대 문짝을 바꿀 때\n함께 보는 것",
    galleryHeading: "싱크대 문짝 교체 사진",
    galleryAltSuffix: "싱크대 문짝 교체",
    faqHeading: "싱크대 문짝 교체,\n이런 점을 많이 물어보십니다",
    groupLabels: { service: "서비스 안내", space: "교체할 곳", target: "현장별 사례", info: "알아두면 좋은 정보" },
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
