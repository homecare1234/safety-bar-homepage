// ─────────────────────────────────────────────────────────────
// 안전바 설치 사이트 설정. 새 키워드 사이트를 만들 때는 이 폴더를 복사해서
// 이 파일과 content/*.md 만 바꾸면 된다. 디자인·SEO 장치는 src/ 가 공통.
// ─────────────────────────────────────────────────────────────

const phoneDigits = "01000000000"; // TODO: 실제 번호 (숫자만). 시안에서는 0000 번호 + 상단 안내 줄로 표시
const phoneDisplay = "010-0000-0000"; // TODO: 실제 번호 (표시용)

const site = {
  id: "safetybar",
  // 배포 도메인. 루트 도메인을 쓰려면 'https://현명한홈케어.com'.
  // 시안 주소(*.pages.dev)로 올릴 때는 SITE_URL 환경변수로 덮어써야 카톡 미리보기 사진이 뜬다.
  url: process.env.SITE_URL ?? "https://safetybar.현명한홈케어.com",

  // ── 정식 공개 여부 ──
  // false(시안): 검색엔진 수집 차단(noindex + robots.txt 차단) + 화면 맨 위에 «시안» 안내 줄.
  // true로 바꾸기 전에 전화번호·대표·사업자번호·주소를 채워야 한다. 비어 있으면 빌드가 멈춘다.
  launched: false,
  lang: "ko",

  // ── 검색 결과에 뜨는 제목. 로고(브랜드)와 다르게 «검색어»로 쓴다 ──
  title: "화장실 안전바 설치",
  shortTitle: "안전바 설치",
  description:
    "수도권(서울·경기) 화장실·욕실·계단 안전바 설치 현명한 홈케어. 노인·부모님 낙상 방지 안전손잡이, 변기·세면대·욕조 안전바, 핸드레일, 침대 안전가드까지 현장 사진을 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
  keywords: [
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
    name: "현명한 홈케어",
    tagline: "어르신이 있는 집, 잡을 곳을 만들어 드립니다",
    logoImage: null as string | null, // 로고 파일이 생기면 '/images/logo.svg'
  },

  // ── 연락 ──
  contact: {
    phoneDigits,
    phoneDisplay,
    telHref: `tel:${phoneDigits}`,
    smsBody:
      "안전바 설치 문의드립니다.\n\n" +
      "· 설치 장소(예: 화장실 변기 옆, 계단):\n" +
      "· 주소(시·구까지):\n" +
      "· 희망 날짜:\n\n" +
      "현장 사진을 함께 보내주시면 확인 후 비용과 일정을 안내해 드립니다.",
    hours: "", // 채워 주세요: 상담 가능 시간 (예: 매일 08:00 ~ 21:00). 비워 두면 화면에 안 나옵니다
  },

  // ── 업체 정보 (JSON-LD LocalBusiness + 푸터) ──
  business: {
    legalName: "현명한 홈케어",
    owner: "", // 채워 주세요. 비어 있으면 화면에 안 나옴
    registrationNo: "", // 채워 주세요: 사업자등록번호. 비어 있으면 화면에 안 나옴
    address: {
      street: "", // 채워 주세요. 비어 있으면 화면에 안 나옴
      city: "서울특별시",
      region: "서울",
      postalCode: "",
      country: "KR",
    },
    areaServed: ["서울특별시", "경기도"],
    areaServedLabel: "수도권 (서울 · 경기 전역)",
    geo: null as { lat: number; lng: number } | null,
  },

  // ── 검색엔진 소유 확인 코드 (서치어드바이저 / 서치콘솔에서 발급) ──
  verification: {
    naver: "", // TODO: <meta name="naver-site-verification" content="...">
    google: "", // TODO: <meta name="google-site-verification" content="...">
  },

  // ── 메인 상단 ──
  hero: {
    eyebrow: "서울 · 경기 안전바 설치",
    heading: "화장실 안전바 설치",
    subheading: "욕실 · 가정집 · 계단 낙상 방지 손잡이 시공",
    lead: "사진 한 장 보내주시면 확인 후 비용과 날짜를 알려드립니다.",
    image: "bathroom-safety-bar-27" as string | null, // public/images/<id>/<이름>.webp
    imageAlt: "화장실 변기 옆 벽에 설치된 접이식 안전바와 수평 안전바",
    // 히어로 배경으로 3초마다 천천히 바뀌는 사진들. 첫 장이 대표 사진(공유 이미지·검색용).
    // position: 사진에서 화면 가운데에 둘 지점 (글이 왼쪽에 있으니 주인공은 오른쪽으로)
    slides: [
      { image: "bathroom-safety-bar-27", position: "70% 50%" },
      { image: "bathroom-safety-bar-09", position: "70% 55%" },
      { image: "bathtub-safety-bar-01", position: "75% 60%" },
      { image: "stairs-safety-bar-04", position: "65% 50%" },
      { image: "bathroom-safety-bar-21", position: "70% 50%" },
    ],
  },

  features: [
    { label: "시공 지역", value: "서울 · 경기 전역" },
    { label: "상담 방법", value: "전화 · 문자 사진 상담" },
    { label: "시공 시간", value: "" }, // 채워 주세요: 보통 걸리는 시간 (예: 대부분 당일). 비우면 안 나옴
    { label: "시공 담당", value: "" }, // 채워 주세요: 누가 시공하는지 (예: 대표 직접 시공). 비우면 안 나옴
  ],

  // ── 메인 «시공 사례» 카드 6장 ──
  cases: [
    {
      image: "bathroom-safety-bar-09",
      title: "변기 양옆 접이식 안전바",
      desc: "양손으로 밀어 일어설 수 있도록 좌우 대칭으로 설치",
      href: "/toilet",
    },
    {
      image: "bathtub-safety-bar-01",
      title: "욕조 벽 ㄱ자 · 수직 안전바",
      desc: "욕조를 넘을 때와 안에서 일어설 때 잡는 두 자리",
      href: "/bathtub",
    },
    {
      image: "stairs-safety-bar-04",
      title: "주택 계단 안전바",
      desc: "타일 벽 양쪽에 끊김 없이 이어 설치",
      href: "/stairs",
    },
    {
      image: "sink-safety-bar-02",
      title: "세면대 하부 지지 안전바",
      desc: "세면대 아래를 받쳐 바닥까지 이어지는 ㄷ자형",
      href: "/sink",
    },
    {
      image: "urinal-safety-bar-02",
      title: "소변기 양옆 안전바",
      desc: "서 있는 동안 양손으로 균형을 잡는 수직형",
      href: "/urinal",
    },
    {
      image: "bed-safety-guard-02",
      title: "침대 안전가드",
      desc: "자다가 떨어지지 않게, 일어설 때 잡을 수 있게",
      href: "/bed-guard",
    },
  ],

  // ── 메인 «유형별 사진» 갤러리 ──
  gallery: [
    { image: "bathroom-safety-bar-21", caption: "변기 옆 접이식" },
    { image: "bathroom-safety-bar-31", caption: "욕실 벽 일자형" },
    { image: "handrail-04", caption: "방 벽 핸드레일" },
    { image: "bathtub-safety-bar-02", caption: "욕조 벽 수평형" },
    { image: "stairs-safety-bar-01", caption: "계단 벽 안전바" },
    { image: "bathroom-safety-bar-25", caption: "세면대 · 변기 동시 시공" },
    { image: "bathroom-safety-bar-03", caption: "샤워부스 옆" },
    { image: "bed-safety-guard-01", caption: "침대 난간형 가드" },
  ],

  // ── 시공 과정 사진 3장 (현장 작업 모습) ──
  workPhotos: [
    { image: "bathroom-safety-bar-29", caption: "레이저로 수평과 높이 잡기" },
    { image: "bathroom-safety-bar-06", caption: "타일 타공" },
    { image: "bathroom-safety-bar-24", caption: "수평계로 기울기 확인" },
  ],

  about: {
    image: "bathroom-safety-bar-26",
    imageAlt: "현명한 홈케어가 시공한 변기 양옆 안전바",
    // 채워 주세요: 업체 소개 한두 문장 (경력, 시공 방식, 강점 등). 비워 두면 문단이 안 나옵니다
    body: "",
  },

  // 시공 순서 (안전바.txt 기준). body를 비우면 제목만 나옵니다
  process: [
    {
      step: "01",
      title: "사진 보내기",
      body: "설치할 곳 사진과 위치, 원하시는 작업을 문자로 보내주세요.",
    },
    {
      step: "02",
      title: "확인 후 안내",
      body: "시간, 날짜, 비용을 안내해 드립니다.",
    },
    {
      step: "03",
      title: "방문 시공",
      body: "", // 채워 주세요: 방문해서 어떻게 시공하는지 한 문장
    },
  ],

  pricing: {
    heading: "안전바 설치 비용",
    lead: "설치할 곳 사진을 보내주시면 확인 후 비용을 안내해 드립니다.",
    // 채워 주세요: 비용이 달라지는 요인. body를 채운 항목만 화면에 나옵니다
    factors: [
      { title: "안전바 종류·길이", body: "" },
      { title: "벽 재질", body: "" },
      { title: "설치 개수", body: "" },
    ],
    note: "", // 채워 주세요: 출장비·견적비 여부 등 (예: 출장비 없음 · 견적 무료)
  },

  // 자주 묻는 질문. a(답)를 비워 둔 질문은 화면에 안 나옵니다
  faq: [
    {
      q: "비용은 어떻게 알 수 있나요?",
      a: "설치할 곳 사진을 문자로 보내주시면 확인 후 비용을 안내해 드립니다.",
    },
    {
      q: "부모님 댁만 따로 시공도 되나요?",
      a: "네. 자녀분이 문자로 상담하실 수 있습니다.",
    },
    {
      q: "흡착식(빨판) 안전바와 뭐가 다른가요?",
      a: "흡착식은 체중을 실으면 떨어질 수 있습니다. 낙상 방지용은 벽에 고정하는 제품을 권합니다.",
    },
    { q: "시공은 얼마나 걸리나요?", a: "" }, // 채워 주세요
    { q: "타일 벽에 구멍을 뚫어도 괜찮나요?", a: "" }, // 채워 주세요
    { q: "출장비나 견적비가 따로 있나요?", a: "" }, // 채워 주세요
  ],

  nav: [
    { label: "비용 안내", href: "/cost" },
    { label: "시공 과정", href: "/process" },
    { label: "시공 사례", href: "/#cases" },
    { label: "업체 소개", href: "/#about" },
    { label: "자주 묻는 질문", href: "/#faq" },
  ],
};

// 정식 공개(launched: true)인데 자리표시자가 남아 있으면 빌드를 멈춘다.
if (site.launched) {
  const missing = [
    (site.contact.phoneDigits.length < 10 || /^0+$/.test(site.contact.phoneDigits.slice(3))) && "전화번호",
    !site.business.owner.trim() && "대표자명",
    !site.business.registrationNo.trim() && "사업자등록번호",
    !site.business.address.street.trim() && "주소",
  ].filter(Boolean);
  if (missing.length) throw new Error(`launched: true 인데 채우지 않은 항목이 있습니다: ${missing.join(", ")}`);
}

export type SiteConfig = typeof site;
export default site;
