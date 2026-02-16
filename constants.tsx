import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'chatie',
    title: '채팅형 웹 소설 서비스',
    titleAccent: 'Chatie',
    accentColor: '#FF5C4D',
    subtitle: 'Z세대를 위한 새로운 스토리텔링, 채팅형 웹소설 플랫폼 UI/UX 리뉴얼 & 기획',
    tags: ['PM', 'UI/UX 디자인', 'Marketing'],
    description: '채티는 사용자가 카카오톡 형식의 인터페이스를 통해 소설을 직접 작성하고, 독자는 대화를 읽듯 콘텐츠를 소비할 수 있는 채팅형 웹소설 서비스입니다.',
    overview: '채티는 사용자가 카카오톡 형식의 인터페이스를 통해 소설을 직접 작성하고, 독자는 대화를 읽듯 콘텐츠를 소비할 수 있는 채팅형 웹소설 서비스입니다.\n기존 텍스트 중심 웹소설의 진입 장벽을 낮추고, 누구나 쉽게 창작에 참여할 수 있도록 하는 것을 목표로 기획되었습니다.',
    role: 'Lead Product Designer',
    roleList: ['UI/UX Design', 'Web & App Design', 'Project Manage'],
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfMjQx/MDAxNzcxMjI2NDQ4NDkw.C10QUsi9uhR1qSyNw3WHXi7cQG6fOSAEgLbYxwmthPwg.WVVqkIoe5OI-ND6RsuMRSXtiuYq5e_9wGCLWRJZSPhUg.PNG/yammi_box.png?type=w966',
    mockupUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfMTk5/MDAxNzcxMjI2OTE4NjIx.HmsVXbli5LqfC5AtsS33k4wT3gTbIg7GRkS5WleOZcQg.Q38_VofbwHRFzEBPjjAQ6k9nWZPvK0cTDHd94AI8CGog.PNG/Group_1597880417.png?type=w966',
    color: '#F4F4F5',
    problemTitle: '다가가기 힘든 소설의 장벽',
    problemText: "기존 소설 앱들은 ‘읽는 행위’에 집중되어 있어, 콘텐츠에 진입하기까지의 진입 장벽이 높다고 느꼈습니다. 반면 많은 사용자가 하루에도 수십 번 메신저를 확인하며 대화를 소비한다는 점에 주목했고, 익숙한 채팅 경험 자체를 이야기 전달 방식으로 활용하면 소설을 더 가볍고 몰입감 있게 즐길 수 있지 않을까라는 문제의식에서 chatie를 기획하게 되었습니다.\n\nchatie는 독자가 소설을 ‘읽는다’기보다 대화를 엿보듯 자연스럽게 따라가며 체험하도록 만드는 데 초점을 둔 서비스입니다.",
    problemBullets: [
      '높은 초반 진입 장벽: 기존 웹소설은 긴 서사와 텍스트 중심 구성으로 인해 가볍게 시작하기 어려운 구조였습니다.',
      '모바일 소비 패턴과의 불일치: 짧고 빠른 콘텐츠에 익숙한 Z세대의 이용 방식과 맞지 않는 형식이었습니다.',
      '창작 진입의 어려움: 전문 플랫폼 중심 구조로 인해 일반 이용자가 작가로 전환되기 어려운 환경이었습니다.',
      '신규 플랫폼의 네트워크 한계: 출시 초기 작가와 독자가 모두 0명인 상태에서 생태계를 형성해야 했습니다.'
    ],
    solutionTitle: '채티가 제안하는 새로운 소설 소비 방식',
    solutionText: '기존 웹소설 앱은 긴 텍스트 중심의 구조로 인해 진입 장벽이 높고, 모바일 환경에서 가볍게 즐기기 어렵다는 한계가 있었습니다. 채티는 이러한 문제를 해결하기 위해 메신저 UI에 주목했습니다. 사용자가 매일 익숙하게 사용하는 채팅 경험을 소설의 전달 방식으로 확장해, 이야기를 읽기보다 대화를 따라가듯 자연스럽게 소비할 수 있도록 설계했습니다. 메시지가 순차적으로 등장하는 구조를 통해 몰입도를 높이고, 짧은 메시지 단위 구성으로 이동 중이나 틈새 시간에도 부담 없이 이용할 수 있는 새로운 소설 경험을 제공합니다.',
    solutionBullets: [
      '채팅형 서사 UX 도입: 메신저 UI 기반의 메시지 단위 전개 방식을 적용해 진입 장벽을 낮추고, 10대 이용자 비율 70%를 확보하며 핵심 타깃층을 형성했습니다.',
      '모바일 친화적 콘텐츠 구조 설계: 5분 내 소비 가능한 흐름을 구축해, 2019년 65만 다운로드 → 2020년 120만 명 → 2021~2023년 누적 355만~430만 명 규모로 성장했습니다.',
      '모바일·PC 통합 창작 스튜디오 구축: 누구나 쉽게 소설을 작성하고 발행할 수 있도록 모바일 및 PC 버전 스튜디오를 개발해 창작 진입 장벽을 낮췄고, 그 결과 누적 이용자 중 약 22%(약 26만 명)가 직접 작가로 활동하는 참여형 생태계를 형성했습니다.',
      '높은 플랫폼 활성도 확보: 하루 평균 3,000편 이상의 작품이 업로드되며, 이용자 참여 기반의 콘텐츠 순환 구조를 안정적으로 구축했습니다.'
    ]
  },
  {
    id: 'yammi',
    title: '스마트 캠퍼스 푸드오더',
    titleAccent: 'YAMMI',
    accentColor: '#3B82F6',
    subtitle: 'Z세대를 위한 캠퍼스 라이프스타일, 모바일 학식 주문 시스템 UI/UX 리뉴얼',
    tags: ['기획', 'UI/UX 디자인', 'Visual', 'Marketing'],
    description: 'Yammi는 학식을 먹기 위해 길게 줄 서야 하는 불편함에서 출발한 학식 주문 앱입니다.',
    overview: 'Yammi는 학식을 먹기 위해 길게 줄 서야 하는 불편함에서 출발한 학식 주문 앱입니다. 직접 학교를 돌아다니며 학생들의 이용 패턴과 불만을 듣고, 이를 해결하기 위해 학교 측과 운영 방식도 함께 조율했습니다. 수업 전이나 이동 중 미리 주문하고 준비 완료 알림을 받아 바로 픽업할 수 있도록 설계해, 바쁜 캠퍼스 생활 속 식사 경험을 한층 편하게 만들었습니다.',
    role: 'Lead Product Designer',
    roleList: ['UI/UX Design', 'Visual Design', 'Project Planning', 'SNS Marketing'],
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfMjQx/MDAxNzcxMjI2NDQ4NDkw.C10QUsi9uhR1qSyNw3WHXi7cQG6fOSAEgLbYxwmthPwg.WVVqkIoe5OI-ND6RsuMRSXtiuYq5e_9wGCLWRJZSPhUg.PNG/yammi_box.png?type=w966',
    mockupUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfOTAg/MDAxNzcxMjI2OTEzNjA1.7zctfukUHieL9j6sylvYuD5ht4BtJTgPdQOEqWTfEtwg._dy3kz_PrDiq03NgjILxTuhms5nwxTgkMBugSoV5NdAg.PNG/Group_1597880418.png?type=w966',
    color: '#E0F2FE',
    problemTitle: '반복되는 대기에서 시작된 질문',
    problemText: 'Yammi는 점심시간마다 반복되는 긴 대기 줄과 혼잡한 동선에서 출발했습니다. 많은 학생들이 식사를 위해 상당한 시간을 소비하고 있었고, 이는 바쁜 학업 일정 속에서 불편함으로 이어지고 있었습니다. 이미 대부분의 소비가 모바일 환경에서 이루어지고 있음에도 학식 주문만은 오프라인 방식에 머물러 있다는 점에 주목했습니다. 학생들의 실제 이용 패턴을 직접 관찰하고 의견을 수집하며 문제를 구체화했고, 학교 측과의 논의를 통해 보다 효율적인 주문 구조를 설계하고자 Yammi를 기획하게 되었습니다.',
    problemBullets: [
      '평균 15–20분 대기 시간: 점심 피크 시간대에는 주문과 결제까지 평균 15분 이상이 소요되어 1교시 공강 시간 대부분이 대기로 소비되었습니다.',
      '피크 시간대 이용 집중도 약 70% 이상: 전체 이용자의 다수가 12–13시에 몰리며 주문 수령 동선이 겹쳐 혼잡도가 급격히 상승했습니다.',
      '실시간 수요 예측 부재: 시간대별 주문량 데이터가 체계적으로 관리되지 않아 메뉴 소진, 조리 지연 등 운영 변수가 반복적으로 발생했습니다.',
      '학생 체감 이용 시간 부담: 30분 내외의 짧은 식사시간 중 절반 이상을 대기에 사용해야 해 식사 만족도가 낮아졌습니다.'
    ],
    solutionTitle: '줄 서지 않는 캠퍼스 식사 경험',
    solutionText: 'Yammi는 점심시간마다 반복되던 긴 대기 줄과 혼잡한 동선을 개선하기 위해 기획된 학식 주문 서비스입니다. 학생들은 수업 전이나 이동 중 모바일로 메뉴를 확인하고 주문 결제를 미리 완료할 수 있으며, 준비 완료 알림을 받은 뒤 지정된 시간에 바로 픽업할 수 있도록 설계했습니다. 이를 통해 평균 대기 시간을 줄이고, 주문과 수령 동선을 분리해 혼잡도를 완화했습니다. 또한 시간대별 주문 데이터를 기반으로 피크 시간 수요를 분산시켜 학생의 이용 편의성과 식당 운영 효율을 동시에 높이고자 했습니다.',
    solutionBullets: [
      '사전 주문·모바일 결제 도입: 현장 대기 중심 구조를 픽업 중심으로 전환하여 평균 대기 시간을 15–20분 → 5–8분 수준으로 단축(약 60% 이상 감소)하는 것을 목표로 설계했습니다.',
      '피크 시간 주문 분산 시스템 구축: 시간대별 픽업 슬롯 선택 기능을 도입해 12–13시 주문 집중도를 완화하고, 특정 시간대 주문 비율을 70% → 50% 이하로 분산하는 것을 KPI로 설정했습니다.',
      '데이터 기반 운영 개선 구조 설계: 메뉴·시간대별 주문 데이터를 축적해 재료 준비 및 조리 예측 정확도를 높이고, 메뉴 조기 소진 발생률 감소를 핵심 운영 지표로 설정했습니다.',
      '학생 체감 만족도 향상: 점심시간 중 대기 비중을 50% 이상 → 25% 이하로 낮추는 것을 목표로 하여, 이용 만족도 설문 80% 이상 긍정 응답을 성과 지표로 설정했습니다.'
    ]
  },
  {
    id: 'myrics',
    title: '글로벌 웹소설 플랫폼',
    titleAccent: 'myrics',
    accentColor: '#E91E63',
    subtitle: '중화권 시장을 타깃으로 기획된 웹소설 서비스, 현지 독서 문화와 콘텐츠 소비 흐름을 반영한 플랫폼',
    tags: ['기획', 'UI/UX 디자인'],
    description: 'myrics는 빠르게 성장하는 중화권 디지털 콘텐츠 시장을 겨냥해 기획된 웹소설 플랫폼입니다.',
    overview: 'myrics는 빠르게 성장하는 중화권 디지털 콘텐츠 시장을 겨냥해 기획된 웹소설 플랫폼입니다. 단순히 번역 콘텐츠를 제공하는 방식이 아니라, 현지 독자의 소비 패턴과 UI 사용 습관을 분석해 서비스 구조를 설계했습니다. 장르 선호도, 회차 소비 방식, 과금 흐름 등 중화권 플랫폼의 특징을 반영해 콘텐츠 탐색부터 결제까지의 흐름을 최적화했으며, 모바일 중심 환경에 맞춘 직관적인 인터페이스를 구축했습니다. 이를 통해 글로벌 확장 가능성을 고려한 웹소설 서비스 모델을 제안했습니다.',
    role: 'Lead Product Designer',
    roleList: ['UI/UX Design', 'Project Planning'],
    imageUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfMTM0/MDAxNzcxMjI2NDUwMzIx.N3PWsl86LcGl4ddAILtQ58TQWCMmFceXdS5g9THdE3gg.Ntdf419QdOPx5fuRX4x6w1bd9GuyGPmyBb9EjxKE5PUg.PNG/myrics_box.png?type=w966',
    mockupUrl: 'https://postfiles.pstatic.net/MjAyNjAyMTZfMTQ4/MDAxNzcxMjI2OTIyODY3.wg36tji6gb2euZEumY3BRMf-DgOwK8yIOoIYpzHJQhEg.2ky8zFbsuY_CFaIuwBkPpS1UVZ6-fwYlRfuHAYJPZTwg.PNG/Group_1597880419.png?type=w966',
    color: '#FEE2E2',
    problemTitle: '현지화되지 않은 글로벌 웹소설 서비스의 한계',
    problemText: '기존 글로벌 웹소설 플랫폼은 단순 번역 중심의 콘텐츠 제공 방식에 머물러 있어, 중화권 독자의 콘텐츠 소비 습관과 이용 환경을 충분히 반영하지 못하고 있었습니다. 독서 흐름, 회차 소비 방식, 과금 구조 등에서 발생하는 문화적 차이로 인해 사용자 경험에 이질감이 발생했으며, 이는 콘텐츠 탐색부터 결제까지 이어지는 이용 흐름의 비효율로 이어졌습니다. 특히 모바일 사용 비중이 높은 환경임에도 불구하고 이에 최적화된 UI가 부족해, 사용자 진입과 지속적인 이용을 유도하는 데 한계가 존재했습니다.',
    problemBullets: [
      '현지화되지 않은 콘텐츠 구조: 기존 글로벌 웹소설 서비스는 번역 중심 운영으로 중화권 독자의 콘텐츠 소비 습관을 충분히 반영하지 못했습니다.',
      '플랫폼 UX의 문화적 차이: 독서 흐름, 회차 소비 방식 등 지역별 이용 패턴 차이로 인해 사용자 경험에 이질감이 발생했습니다.',
      '탐색 및 결제 흐름의 비효율성: 현지 과금 방식 및 콘텐츠 탐색 방식과 맞지 않는 구조로 이용 전환율 저하가 발생했습니다.',
      '모바일 중심 환경 대응 부족: 모바일 사용 비중이 높은 환경에 비해 UI 및 콘텐츠 제공 방식이 최적화되지 않았습니다.'
    ],
    solutionTitle: '중화권 사용자에게 익숙한 방식으로의 서비스 재설계',
    solutionText: 'myrics는 단순히 콘텐츠를 번역해 제공하는 방식에서 벗어나, 중화권 독자들이 실제로 콘텐츠를 소비하는 방식에 맞춰 서비스 전반을 다시 설계했습니다. 장르 선호도나 회차 소비 패턴을 반영해 탐색 흐름을 개선하고, 익숙한 UI와 결제 방식을 적용해 처음 이용하는 사용자도 어렵지 않게 접근할 수 있도록 했습니다. 또한 모바일 환경에서 짧은 시간 안에 콘텐츠를 소비할 수 있도록 인터페이스를 최적화해, 콘텐츠 탐색부터 결제까지의 전환율을 약 20% 이상 개선하는 것을 목표로 설정했습니다.',
    solutionBullets: [
      '현지 소비 패턴 기반 콘텐츠 탐색 구조 개선: 장르 선호도 및 회차 소비 방식 분석을 통해 콘텐츠 추천 및 노출 방식을 재설계하고, 탐색 효율 20% 이상 향상을 목표로 설정했습니다.',
      '중화권 사용자 친화 UI 적용: 지역 플랫폼 이용 흐름에 맞춘 인터페이스를 구축해 서비스 이용 진입률 및 콘텐츠 소비 전환율 개선을 유도했습니다.',
      '현지 결제 방식 반영: 사용자에게 익숙한 과금 구조를 적용해 결제 이탈률 감소 및 유료 콘텐츠 이용률 증가를 핵심 지표로 설정했습니다.',
      '모바일 환경 최적화 설계: 모바일 중심 UI를 통해 사용자 체류 시간 증가 및 재방문율 15% 이상 향상을 목표로 설정했습니다.'
    ]
  }
];

export const TOOLS: Tool[] = [
  { name: 'FIGMA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
  { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
  { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Slack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
  { name: 'JIRA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Asana', icon: 'https://images.seeklogo.com/logo-png/32/2/asana-logo-png_seeklogo-326138.png' }
];