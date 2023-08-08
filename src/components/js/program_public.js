// 지원 프로그램 리스트들 정리
const pro_list = [
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=387&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "기타",
    category_description: "언어능력",
    deadline: "2023.08.18",
    title: "읽기 능력 향상 앱 지원",
    content:
      "아동복지 시설 보호대상 아동 및 자립준비를 하는 청년을 위하여 언어 읽기 능력 향상을 위한 앱 지원을 해 줍니다.",
    agency: "아동권리보장원",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=386&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "기타",
    category_description: "정신건강",
    deadline: "2023.11.30",
    title: "청년의 마음건강 '함께 잇길'",
    content:
      "자살,우울 선별 검사, 외로움 스트레스 검사 등 청년을 위한 정신건강 척도 검사 및 심리 지원 서비스, 자연 기반 정신건강 프로그램 지원 및, 심리 사회 서비스를 지원 해 줍니다.",
    agency: "충청남도광역정신건강복지센터",
    region: "충남",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=377&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "진학",
    category_description: "진학",
    deadline: "2023.08.13",
    title: "IBK 자립준비청년 장학금취업지원",
    content:
      "대학교 및 대학원 진학중인 자 또는 조기종료아동 및 보호아동을 위한 취업 지원 프로그램",
    agency: "IBK기업은행",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=381&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "금융",
    category_description: "금융",
    deadline: "2023.08.11",
    title: "버라이어티 메이터스 살롱",
    content:
      "메이커 성공팩터 찾기 세미나 및 교류활동, 나만의 자기다움 찾기 세미나 및 교류 활동, 글로벌 메이커들의 버라이어티 플리파티",
    agency: "인천 중구청",
    region: "서울",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=375&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "금융",
    category_description: "금융",
    deadline: "2023.12.31",
    title: "강남구청 자립준비청년 지원사업",
    content: "강남 구청에서 강남구 거주 예비 자립 준비 청년을 지원하여 줍니다",
    agency: "서울 강남구청",
    region: "서울 강남",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=376&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",

    category: "진학",
    category_description: "진학",
    deadline: "2023.08.07",
    title: "상반기 군산시 학자금 이자지원 사업",
    content:
      "군산시에 주민등록이 되어 있는 전국대학 재학생으로 2016년 1학기 이후 한국장학재단을 통해 대출받은 학자금 미상환자를 위한 학자금 이자지원 사업입니다.",
    agency: "군산시청",
    region: "군산",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=374&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",

    category: "기타",
    category_description: "멘토링",
    deadline: "2023.08.10",
    title: "바람개비서포터즈 14기 3차 모집",
    content:
      "직종별 전문가 멘토링, 지역별 자조모임, 방문교육, 서포터즈 연계 멘토링",
    agency: "서울특별시 자립지원전담기관",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=373&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",

    category: "취업",
    category_description: "취업",
    deadline: "2023.08.21",
    title: "기업탐방형 일경험프로그램 공연예술분야",
    content:
      "종로여성인력개발센터에서 공연예술분야 기업탐방형 일경험프로그램을 진행합니다. 청년들에게 다양한 직업 세계 및 산업현장에 대한 체험 기회를 제공 및 국민취업지원제도, 국민취업지원제도 일경험프로그램, 국민내일배움카드 등 고용노동부 사업 프로그램 연계를 해줍니다",
    agency: "종로여성인력개발센터",
    region: "서울",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=362&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",

    category: "주거",
    category_description: "주거",
    deadline: "2023.09.27",
    title: "유스타트 주택청약종합저축 지원사업",
    content: "자립준비 청년의 주거복지를 위한 주택청약, 종합저축 납입금 지원",
    agency: "대한 적십자사",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=354&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "청년도전지원사업",
    content:
      "자립준비 청년이 사회에 도전할 수 있도록 도전프로그램 참여수당 및 인센티브 지급",
    agency: "고용노동부",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=351&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "금융",
    category_description: "금융",
    deadline: "2023.12.31",
    title: "「배움마켓」 자립정착금 필수 교육",
    content:
      "아동복지시설 또는 가정위탁 보호종료인 자립준비청년을 위한 자립정착금을 지원하여 줍니다.",
    agency: "서울특별시아동자립지원사업단",
    region: "서울",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=323&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=3",
    category: "진학",
    category_description: "진학",
    deadline: "2023.08.13",
    title: "한국관관공사 호텔분야취업연계 추가모집",
    content:
      "참가교육생 대상 사전간담회 및 맞춤형 온라인 교육과정 운영, 집체교육 실시 및 현장실습 호텔 배치 후 현장실습 진행을 도와줍니다.",
    agency: "아동권리보장원",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=320&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=3",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "청년면접정장 대여사업",
    content: "미취업 구직중인 청년을 위하여 면접정장을 대여해 줍니다.",
    agency: "익산시 기업일자리과",
    region: "전북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=318&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=3",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "취준꾸러미 참여자모집",
    content:
      "취업을 위한 면접대상자를 위하여 면접비,면접의상,자격증 응시료, 면접사진 촬영비를 지원해 줍니다.",
    agency: "전라북도일자리센터",
    region: "전북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=312&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=3",
    category: "취업",
    category_description: "취업",
    deadline: "2023.10.24",
    title: "청년도전 지원사업",
    agency: "고용노동부 한국고용정부",
    content:
      "청년도전 지원사업은 구직단념 청년들의 구직의욕 고취, 노동시장 참여 및 취업을 촉진할 수 있도록 자치단체 청년센터를 통해 1. 구직단념청년 발굴·모집 → 2. 사회활동 참여의욕 고취를 위한 맞춤형 프로그램 제공 → 3. (이수시) 국민취업지원제도, (취업시) 고용촉진장려금까지 연계하여 지원하는 사업을 해줍니다.",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=305&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=4",
    category: "기타",
    category_description: "정신건강",
    deadline: "2023.11.30",
    title: "청년내일상담소",
    content:
      "세입자 상담, 금융신용 상담, 홈스타일링 상담, 반려견 상담, 의사소통 상담을 도와줍니다.",
    agency: "대전청년내일센터",
    region: "대전",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=297&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=4",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.29",
    title: "청년 희망날개 지원사업",
    content: "면접정장 상하의 및 구두 대여",
    agency: "청주시",
    region: "충북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=289&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=4",
    category: "진학",
    category_description: "진학",
    deadline: "2023.12.31",
    title: "미래내일경험사업 안내",
    content:
      "고용노동부에서 창냔층의 노동시장 진입을 촉진하기 위해 기업탐방, 프로젝트 수행, 인턴십 등 기회를 제공하는 '미래내일일경험사업(청년일경험지원사업)'을 운영하고 있습니다.",
    agency: "고용노동부",
    region: "전국",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=291&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=4",
    category: "기타",
    category_description: "정신건강",
    deadline: "2023.12.31",
    title: "청년의 마음건강 '함께 잇길'",
    content:
      "충남 정신건강 복지센터에서 자립준비청년을 위한 정신건강 지원 사업을 아래와 같이 진행합니다",
    agency: "충남광역정신건강복지센터",
    region: "충남",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=284&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=5",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "한국도로공사 휴게소 일자리연계",
    content:
      "청소년 취업을 위하여 첫 직장을 휴게소로 하여 이후 영업,유통,식자제,에너지 관련으로 진출 또는 자체승진 또는 모회사 이직을 도와줍니다.",
    agency: "한국도로공사 대전충남지부",
    region: "충남",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=256&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=5",
    category: "취업",
    category_description: "취업",
    deadline: "2023.11.30",
    title: "인천 청년 자격증 응시료 지원",
    content:
      "인천광역시에서 인천 청년을 대상으로 자격증 응시료 지원 사업을 진행합니다.",
    agency: "인천광역시",
    region: "인천",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=250&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "주거",
    category_description: "주거",
    deadline: "2023.08.21",
    title: "(충북)청년월세특별지원",
    content:
      "국토교통부 주관으로 어려운 경제여건 속에서도 학업, 취업 준비 등 본연의 삶을 꾸려나가는데 보탬이 될 수 있도록 소득이 낮은 청년을 대상으로 『청년월세 한시 특별지원』사업을 실시합니다.",
    agency: "청주시",
    region: "충북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=248&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "청년취업희망디딤돌",
    content:
      "전라북도 일자리센터에서 미취업 청년을 대상으로 취업 활동을 아래와 같이 지원합니다.",
    agency: "전라북도일자리센터",
    region: "전북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=238&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "기타",
    category_description: "정신건강",
    deadline: "2023.11.15",
    title: "청년정착상담소 참여자 모집",
    content:
      "세종 청년센터에서 전문 상담가에게 고민을 털어놓는 '청년상담소-1:1 개별상담' 을 진행합니다.",
    agency: "세종청년센터",
    region: "세종",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=235&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "주거",
    category_description: "주거",
    deadline: "2023.12.31",
    title: "(세종)청년 월세 특별지원",
    content: "세종에 사는 청년을 위하여 월세 지원 사업을 진행합니다.",
    agency: "세종특별자치시",
    region: "세종",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=234&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "주거",
    category_description: "주거",
    deadline: "2023.08.21",
    title: "(전북) 청년월세 한시 특별지원 모집",
    content: "12개월 간 월 최대 20만원 임차료를 지원해주는 사업을 합니다.",
    agency: "부안군",
    region: "전북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=232&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "취업",
    category_description: "취업",
    deadline: "2023.08.31",
    title: "(순창)지역사회 맞춤형 평생직업교육",
    content:
      "정원디자이너 과정, 디자인 기초과정, 제과제빵과정, 커피바리스타 과정, 플라워 디자이너 과정 등 교육을 진행합니다.",
    agency: "순창군청",
    region: "전북",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=229&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=7",
    category: "주거",
    category_description: "주거",
    deadline: "2023.12.31",
    title: "(세종) 주택임차보증금 이자지원사업",
    content:
      "세종특별자치시에서 ​세종시 청년들의 주거 부담을 완화하고 안정적인 주거생활 지원을 위하여「2023년 청년 주택임차보증금 이자지원사업」을 진행합니다.",
    agency: "세종특별자치시",
    region: "세종",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=197&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=7",
    category: "주거",
    category_description: "주거",
    deadline: "2023.12.31",
    title: "경기도 자립준비청년 주거기반 자립지원",
    content:
      "안녕하세요. 경기도 내 아동복지시설 보호종료 5년 이내 또는 종료예정인 자립준비청년 대상으로, 최대 2년간 무상주거지원을 통하여 건강하고 안정적인 생활유지 및 자립을 지원하는 주거기반 자립지원 사업 참여자를 모집합니다.",
    agency: "경기복지재단",
    region: "경기",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=202&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=7",
    category: "주거",
    category_description: "주거",
    deadline: "2023.11.30",
    title: "청년 주택임차보증금 이자 지원 사업",
    content:
      "대전광역시에서는 청년들의 주거비용 부담을 완화하고 안정적인 주거생활 지원을 위해 「2023년 청년 주택임차보증금 이자지원사업」 신청자를 모집합니다.",
    agency: "대전일자리경제진흥원",
    region: "대전",
  },
  {
    who: "공공",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=171&act=&searchValueList4=A&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=8",
    category: "취업",
    category_description: "취업",
    deadline: "2023.12.31",
    title: "디지털 교육분야 사업 안내",
    content:
      "과학기술정보통신부에서 자립준비청년 대상 디지털 교육분야 우대사업 및 다양한 교육사업을 진행하고 있습니다. 자세한 내용은 아래 링크를 통해 확인하실 수 있습니다.",
    agency: "과학기술정보통신부",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=384&act=&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "취업",
    category_description: "취업",
    deadline: "2023.08.11",
    title: "전라북도 취업연계형 디지털부트캠프",
    content:
      "디지털도 배우고, 자격증도 취득하고 취업도 할수있는 디지털부트캠프 프로그램입니다.",
    agency: "한국지능정보사회진흥",
    region: "전북",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=378&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "금융",
    category_description: "금융",
    deadline: "2023.08.06",
    title: "한국콜마와 함께하는 장학금 지원사업",
    content:
      "사회적기업 소이프스튜디오에서 보육시설 및 공동생활가정 퇴소(예정)청년과 청소년의 건강한 자립을 돕기 위해 장학금 지원사업을 진행합니다.",
    agency: "소이프스튜디오",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=372&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "주거",
    category_description: "주거",
    deadline: "2023.08.11",
    title: "주거환경개선 꿈꾸는 그루터기 꿈터",
    content:
      "자립준비청년 대상 주거지 맞춤형 인테리어를 지원한다고 하오니 관심있는 청년 분들은 참고하시기 바랍니다.",
    agency: "청소년 그루터기 재단",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=364&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "금융",
    category_description: "금융",
    deadline: "2023.12.31",
    title: "두나무 넥스트 JOB 창업지원사업",
    content:
      "자립준비청년을 10%이상 정규고용한 기업을 위한 창업지원 사업입니다.",
    agency: "(사)함께만드는세상(사회연대은행)",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=363&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1",
    category: "기타",
    category_description: "모임",
    deadline: "2023.08.02",
    title: "청년들의 자립이야기 청자기 3.5기",
    content:
      "’청자기(청년들의 자립 이야기의 줄임말)’는 보호연장아동, 자립준비청년, 쉼터퇴소청소년으로 이루어진 활동가모임입니다. 청자기에게 자립이란 ’많은 경험을 쌓으며 성장하고 도움을 주는 사람이 되는 것’입니다.",
    agency: "초록우산 어린이재단 경기지역본부",
    region: "경기",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=361&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "기타",
    category_description: "여행",
    deadline: "2023.08.04",
    title: "자립준비청년과 함께하는 독도비전트립",
    content:
      "도비전트립 전 일정 경비(숙박, 식사, 교통비, 입장료 일체) 제공, 자립준비청년 프로그램 진행시 우선 선정 특혜",
    agency: "함께하는 사랑밭",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=360&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "취업",
    category_description: "취업",
    deadline: "2023.08.06",
    title: "희망디딤돌 자립준비청년 취업지원사업",
    content:
      "(재)함께일하는재단에서는 고용노동부가 주최하는 [2023년 미래내일 일경험 사업]의 일환으로 자립준비 청년을 대상으로 다음과 같이 직무교육 참여자를 모집하오니 많은 관심과 참여바랍니다.",
    agency: "(재)함께일하는재단",
    region: "서울",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=358&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "취업",
    category_description: "취업",
    deadline: "2023.08.08",
    title: "CJ도너스캠프 꿈키움 아카데미",
    content:
      "만 18세~29세의 소외계층 청년들에게 요리, 베이커리, 서비스매니저(식음서비스/헬스&뷰티) 직무 교육을 무료로 지원하고 CJ계열사 및 동종업계 취업을 연계하는 ‘꿈키움 아카데미’ 사업입니다. ",
    agency: "CJ도너스캠프 꿈키움 아카데미",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=355&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2",
    category: "취업",
    category_description: "취업",
    deadline: "2023.07.31",
    title: "디지털마케팅 실무역량강화 및 취업연계",
    content:
      "채용 전문 컨설턴트를 통한 채용 연계 및 후속관리 기초 역량 및 트랜드 학습 위한 콘텐츠 이러닝 최대 4개 과정 강의 수강권 3개월 무상제공 ",
    agency: "(주)에이블런",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=281&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=4",
    category: "기타",
    category_description: "정신건강",
    deadline: "2023.11.30",
    title: "감정코칭 지원 사업",
    content:
      "스트레스 검사를 통한 나의 감정 알아차리기, 스트레스를 낮추는 대화, 관계의 긍정성 쌓기, 자신의 꿈과 기여하는 삶을 살아가는 사람들의 이야기",
    agency: "충남아동자립지원전담기관",
    region: "충남",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=258&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=5",
    category: "주거",
    category_description: "주거",
    deadline: "2023.12.31",
    title: "삼성희망 디딤돌 센터",
    content:
      "삼성 희망디딤돌은 자립준비청년들에게 주거공간 제공, 자립지원 및 교육을 통해 실질적인 자립을 위한 첫 발걸음을 함께하고 있습니다. ",
    agency: "삼성",
    region: "전국",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=217&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=5",
    category: "주거",
    category_description: "주거",
    deadline: "2023.12.10",
    title: "'나의 첫 살림' 사업",
    content:
      "강원자립지원전담기관은 초록우산어린이재단 강원지역본부와 함께 2023년 자립준비청년의 ‘나의 첫 살림’ 지원사업을 운영하고 있습니다. 아래와 같이 23년도 자립을 준비하는 보호종료예정아동에게 홍보와 지원사업이 필요한 대상자 추천을 요청드립니다.",
    agency: "초록우산어린이재단",
    region: "서울",
  },
  {
    who: "민간",
    url: "https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=175&act=&searchValueList4=B&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=6",
    category: "기타",
    category_description: "교육",
    deadline: "2023.12.31",
    title: "엘-아띠 2기 대상자 모집",
    content:
      "취업, 진학, 주거 등 미래설계에 어려움을 겪는 자립준비청년(자립예정자 및 자립진행중인 자 모두 포함) 대상으로 금융교육, 진로설계, 주거환경 등의 교육을 통한 자립 설계를 지원해 생활 안정을 도모함.",
    agency: "대한사회복지회",
    region: "전국",
  },
];

export default pro_list;
