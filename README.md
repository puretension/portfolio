# Portfolio

### URL: [https://puretension.vercel.app](https://puretension.vercel.app/)

![스크린샷 2024-01-25 오전 9 19 02](https://github.com/puretension/portfolio/assets/106448279/b0748f32-b615-41d6-83d6-9e3da569469c)

## 프로젝트 소개 및 동기

### 프로젝트 소개
포트폴리오 프로젝트는 SEO에 최적화된 웹 애플리케이션으로, `NEXT.js와 JavaScript`를 사용하여 개발하였습니다. <br>
본 프로젝트를 수행하며 `SSR(Server-Side Rendering)과 검색 엔진 최적화(SEO)`에 대해 공부해볼 수 있었고, 미니 프로젝트였지만 Next.js에 흥미를 크게 갖게 된 계기가 되었습니다. <br>
앞으로 진행하게 될 프로젝트들도 이 사이트에 함께 나타날 것이며, 개인 프로젝트이기에 놀이터라고 생각하며, 추가해보고 싶은 기능들을 마음껏 구현해 볼 생각입니다. <br>
### 동기
Portfolio는 자바스크립트를 포함한 웹개발 공부를 시작한 후, 처음 진행해본 웹 토이프로젝트입니다. <br>
책을 통해 언어와 프래임워크를 이해하고, 강의를 보고 코드를 따라치는것도 좋지만 가끔씩은 작은 프로젝트라도 진행해보며 코드를 손에 익히는게 더 효과적이라고 생각했기에 부족한 실력이지만 만들어보았습니다.
### 소요 기간
2024년 1월 24일 - 2023년 1월 25일<br/>

## 기능 구현

### Theme(LightMode/DarkMode)

- 기능 소개 : Header의 Theme 버튼(아이콘)을 통해서 Light 또는 Dark 테마를 적용할 수 있습니다.
- 기능 구현 : MyApp 컴포넌트는 AppProps를 매개변수로 받고, `ThemeProvider` 컴포넌트로 감싸져 있습니다. ThemeProvider는 "class"라는 속성을 가지며, 클래스를 사용하여 테마를 전환할 수 있게 합니다. <br>
헤더에는 themeToggleButton 컴포넌트가 있습니다. 이 컴포넌트는 버튼을 렌더링하며, 버튼을 클릭하면 useTheme 함수를 사용하여 테마를 토글할 수 있습니다. 만약 현재 테마가 "light"이면 "dark"로, "dark"이면 "light"로 테마가 전환됩니다.

### 🌑Dark Mode
![스크린샷 2024-01-25 오전 8 22 27](https://github.com/puretension/portfolio/assets/106448279/345a1da8-342d-4dce-b88d-697bf1056ef7)
### ☀️Light Mode
![스크린샷 2024-01-25 오전 8 22 27](https://github.com/puretension/portfolio/assets/106448279/fcd97f0e-0708-4db8-af0b-0a1086a2a2d9)

### Notion API를 사용한 프로젝트 가져오기

기능 소개 : Notion API를 사용하여 데이터를 파싱하고 프로젝트 목록을 표시하는 기능을 구현했습니다
기능 구현 : postman을 통해 API 통신을 확인한 후, `getStaticProps()`를 사용하였으며 정적 페이지 생성(Static Site Generation) 방식에 대해 익힐수 있었습니다. 
이는 성능면에서 뛰어난데 그 이유는 항상 서버에서 실행되고 빌드 단계에서만 데이터를 가져오고 JSON으로 저장하여 고정적으로 사용하여 페이지 요청 때마다 데이터를 가져오는 게 아니기 때문입니다.
아래는 PostMan을 통해 Notion API 통신 테스트를 거친뒤에 getStaticProps()를 통해 불러온 데이터를 파싱을 통해 렌더링하는 모습입니다.

![스크린샷 2024-01-25 오전 8 49 29](https://github.com/puretension/portfolio/assets/106448279/a77f185a-aaaf-497b-9735-8aa1f3a436a6)
![스크린샷 2024-01-25 오전 8 51 26](https://github.com/puretension/portfolio/assets/106448279/6d81b749-1dbf-4ee8-9e6c-57e4c22a7f88)
![스크린샷 2024-01-25 오전 8 50 49](https://github.com/puretension/portfolio/assets/106448279/b267c601-83de-43af-8378-3f87584bf6a2)

## 🛠️ Tech Stack 🛠️
<div>
    <!-- Language 추가 -->
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white/">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
</div>

## 추가적으로 개발해보고 싶은 기능 & 컴포넌트
- [ ] 나의 프로필 이미지
- [ ] 날씨 정보 🌤️ OpenWather api 이용(방문자의 API요청 필요없이 나의 현재 위치를 기준으로)
- [ ] 웹 브라우저 아이콘 포함한 디자인 업그레이드
- [ ] Hits 방문객 숫자 누적
- [ ] 내가 작성한 글 업로드
- [ ] 동적 이미지 생성


## 🎯Commit Convention

| 커밋 유형 | 설명 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 버그 수정 |
| Docs | 문서 수정 |
| Style | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor | 코드 리팩토링 |
| Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| Chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Comment | 필요한 주석 추가 및 변경 |
| Rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| Remove | 파일을 삭제하는 작업만 수행한 경우 |
| !BREAKING CHANGE | 커다란 API 변경의 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |
