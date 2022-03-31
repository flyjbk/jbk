# 퍼플레이 team
회사 소개 페이지

# 폴더 구조
┏assets┳css━styles.css : scss로 생성된 css 파일  
┃   ┣images : 이미지 파일 폴더  
┃   ┗scss┳abstracts : mixin, 색/사이즈 변수 등 파일  
┃      ┣base : reset.scss  
┃      ┣components  
┃      ┣pages : common.scss (전체 페이지 공통으로 들어가는)  
┃      ┗styles.scss : scss import하는 파일  
┗docs : html 파일  
  
# 이미지 및 버튼  사이즈
1. 메인페이지
- 더보기 버튼: 700*68
- 그외 버튼:(텍스트+양옆여백)*68
- 서비스카드이미지: 300*400
- 팀퍼플레이 배너: 1920*540

# 클래스 작명한 방식
1. 클래스명에 페이지를 명시하는 것 
=> 영역, 목적 좀더 명확하게 하고 싶을 때
=> 다른 페이지의 클래스와 혼동/겹칠 가능성이 있을 때
=> 중첩된 하위 영역에는 굳이 페이지를 명시하지 않음
2. 클래스명에 사용한 용어 간단 정리
Area: 페이지 내 콘테이너 바로 아래 대영역
Desc: 부연설명, 소개/서술하는 텍스트
Title: 제목
Inner-container: 페이지 내 콘테이너 아래 area가 화면 전체를 쓸 때, 실제 내용물을 감싸는 내부 콘테이너
List, item: 리스트,아이템
Article: 인덱스, 뉴스룸 각각 기사

# json-server
https://github.com/typicode/json-server

- 짧은 시간에 REST API를 구축해주는 패키지
- 실제 프로덕션에서는 사용하지 않음
- npm을 통해 설치 가능
- 시작(터미널 열고 복붙): json-server --watch db.json