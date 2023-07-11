# Create React App 에서 React를 이용하여 개발 구현

# 프론트엔드 화면을 보기 위하여 cmd에 npm start를 이용하여 서버를 실행 시킨다.

# 프론트엔드 서버는 localhost:3000을 default 채널로 잡는다.

# Code Splitting
  - 실제 프론트엔드 개발에서는 한 페이지당 코드가 10만줄이 넘어가는 등 한 페이지에 들어갈 요소들이 굉장히 많다.
  - 이것을 하나의 js에 모두 작성하면 줄이 너무 길어져 개발이 힘들어지기 때문에 요소마다 코드를 쪼개어 파일에 저장하여
    개발을 편리하게 하도록 한다.
  - 쪼개어 개발한후 import를 통하여 연결하여 주는 형식으로 구현할 것

# 개발 순서 계획
  - 랜딩 페이지 -> 로그인 -> 회원가입 -> 메인 페이지 (개인 스케줄) -> 메인 페이지 (팀 프로젝트 생성) -> 팀 프로젝트 페이지 -> 마이페이지 -> 로그인 시 비밀번호 찾기 -> 기타 메뉴 -> 마무리

# 개발 요소(페이지)
 - 랜딩 페이지
 - 로그인 페이지
 - 회원가입 페이지
 - 비밀번호 찾기 페이지
 - 로그인 후 메인 페이지(개인 스케줄)
 - 프로젝트 별 페이지
 - 마이페이지
 - 기타 메뉴 페이지 등등

# 개발요소(알림 창)
  - 메인 페이지에서 개인 스케쥴 추가 시 알림창
  - 메인 페이지에서 팀 프로젝트 생성 시 알림창
  - 팀 페이지에서 모임 생성 시 알림창

# 개발 고려 사항 (이외 세부 사항)
  - 서버간 통신 방법
  - 페이스북, 카카오 등 소셜을 통한 로그인 방법
  - 스케줄 표에 원하는 시간대의 스케줄 뜨도록 하기
  - 팀 일정 생성 시 개인 스케줄 별을 고려한 가능한 시간 확인 방법

# 배포 시 npm run build로 배포 가능
