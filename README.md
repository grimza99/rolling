# 📝 Rolling -team 4

* 배포 URL : https://rolling-xi.vercel.app/

## 📖 목차

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 내용](#프로젝트-내용)
- [🛠개발 환경](#-개발-환경)
- [프로젝트 구조](#프로젝트-구조)
- [프로젝트 팀 구성 및 역할](#프로젝트-팀-구성-및-역할)
- [프로젝트 과정](#프로젝트-과정)
- [프로젝트 수행 경과](#프로젝트-수행-경과)
- [회고](#회고)
- [개발 기간 및 작업 관리](#개발-기간-및-작업-관리)


# **💡** 프로젝트 개요

</aside>

> ▫️ Rolling은 롤링페이퍼 문화를 웹에서 즐길수 있게 구현한 커뮤니티형 플랫폼 입니다.
> 
> 
> ▫️ 간편한 UI로 쉽게 커스텀 롤링페이퍼를 생성, 삭제, 메시지 삭제, 메시지 생성이 가능합니다.
> 
> ▫️ 롤링페이퍼에 대한 반응 기능으로 단순 롤링페이퍼가 아니라, 좀더 나아가 커뮤니티의 기능까지 도모  할수 있는 플랫폼 입니다.
> 


<br>

### **✨** 프로젝트 내용

🔹  **반응형 디자인** (모바일, 태블릿, 랩탑, 데스크탑 지원)

- mobile, tablet, laptop, desktop 지원

🔹  **Header** 

- 해당 롤링페이퍼에 이모지로 반응을 남길수 있어, 커뮤니티형 플랫폼의 기능을 도모했습니다.

🔹  **롤링페이퍼, 메시지 생성**

- 편리한 UI로 커스텀 롤링페이퍼를 쉽게 생성하고 삭제할 수 있습니다.
- 익명으로 롤링페이퍼에 메시지를 남기고, 폰트를 지정하여, 메시지에 좀더 감정을 불러일으킬 수 있습니다.

🔹  **list 페이지**

- 최신 롤링페이지와 인기 롤링페이지를 보여주어 활발하게 반응이 이루어진 롤링페이퍼를 확인할 수 있습니다.
- 사용자 친화적인 swiper로 ….

🔹  **롤링페이퍼 페이지** 

- 무한 스크롤로 사용자의 편의성을 높였습니다.
- scrollupButtton 으로 스크롤이 너무 많이 내려갔을때를 고려한 사용자 편의성을 높였습니다.
- 롤링 페이퍼 삭제기능시 이중체크로 사용자의 불편함을 유발할수 있는 부분을 고려했습니다.

<br>
<hr>

### **🛠** 개발 환경

* **Front-End** 
  <p><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=VITE&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=Lodash&logoColor=white"> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"> <img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"></p>

* **Back-end** 
    <p><img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"></p>
*  **배포 환경**
    <p><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"></p>
* **디자인**
    <p><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"></p>
* **버전 및 이슈 관리**
   <p><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"></p>
* **협업 툴**
    <p><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"></p>

### 📂 프로젝트 구조

```jsx
├── src/
│		├── api/                       # API 호출 함수
│		│
│		├── constants/
│		├── hooks/                     # 커스텀 훅
│		│   
│		├── components/                # 컴포넌트 관련
│		│   │
│		│   ├── Badge/ 
│		│   ├── CircleImages/ 
│		│   ├── Emoji/ 
│		│   ├── ListCard/
│		│   ├── ModalContent/
│		│   ├── SelectableBox/
│		│   ├── ShareButton/
│		│   ├── Skeleton/ 
│		│   ├── RollingCard/                 
│		│   └── common/                # 공통 컴포넌트 관련 
│		│       ├── Header/ 
│		│       ├── Button/
│		│       ├── Input/ 
│		│       ├── Line/
│		│       ├── Modal/
│		│       ├── Select/                    
│		│       └── Toast/
│		├── pages/                     # 페이지 관련 파일 
│		│   ├── FromPage/                  
│		│   ├── LandingPage/                
│		│   ├── ListPage/
│		│   ├── RollingPage/                 
│		│   └── ToPage/
│		│
│		└── styles/                     # 전역 스타일, theme 관련 
│		    ├── GlobalStyle.jsx
│		    ├── Layout.jsx
│		    └── theme.jsx
│		...
├── .env                            # 환경변수
├── .gitignore
├── package.json
├── vercel.json
└── README.md

```

# **👥** 프로젝트 팀 구성 및 역할

</aside>

---

## 🧑‍💻👩‍💻👩‍💻🧑‍💻👩‍💻 팀원 소개와 역할

| 이름 | 역할 | GitHub |
| --- | --- | --- |
| **임용균** | button 컴포넌트 / toast 컴포넌트 / list page | https://github.com/ozen0718 |
| **김희진** | header / layout / badge / postCard 컴포넌트 / landing page /emoji | https://github.com/heewls |
| **황혜진** | modal 컴포넌트 / to page / 카카오 공유 버튼/ 발표 / theme.color | https://github.com/hhjin1 |
| **이재혁** | 초기 프로젝트 세팅 / input 컴포넌트 / from page | https://github.com/LEEHAEHYUK |
| **유선향** | select / post{id} page / 배포 / 발표 준비 / theme.font / 전여상수 / 모달 컨텐츠 | https://github.com/grimza99 |

## 🤓 멘토링 (이종명 멘토님)

- “PR시 approve 적용 고려”
    - **피드백 반영 → approve 설정이 잘 이루어지지 않아 pr 확인시 해당 PR conversation에 comment 남기는 것으로 보완**
- “공통 컴포넌트에는 구체적인 값이 하드 코딩 되면 유연성이 떨어지기 때문에, 설령 기획 상으로 한가지 값이 명시되어 있더라도 동적인 값으로 처리하는 것이 더 바람직”
    - **피드백 반영 →  어떠한 값도 공통 컴포넌트 에서 하드 하게 지정하지 않게 전팀원 수정 절차 => 컴포넌트 사용시 값을 전달하는 방식으로 수정**

<aside>

</aside>

---

## 프로젝트 과정

**1. 프로젝트 사전 기획**

- **목표 설정**
    → 커뮤니티 기능 목적의 웹 애플리케이션 개발
    → 제시된 피그마와 swagger를 기반으로 필수 구현기능 뿐아니라 사용자의 경험 개선을 목적으로 추가기능 구현까지 목표로 한 
- **일정 계획**: 프로젝트 마일스톤 설정 및 일정 관리
    
    *  1주차 : 공통 컴포넌트 완료후 1차 배포
    *  2주차 : 분담된 페이지를 개발, 주기적인 코어타임으로 서로의 진행 현황 교류 
    *  3주차 : UX 와 성능 향상을 위한 리팩토링 , 회고 , 프로젝트 발표 자료 준비 
    
- **팀 구성 및 역할 분담**:
- **리소스 및 도구 선정**

**2. 프로젝트 수행**

- **개발**:
    
    
- **배포**:
    → Vercel로 배포 상황에서 발생할 수 있는  오류의 주기적인 관찰을 목표로 함

**3. 프로젝트 완료**

- **최종 리뷰 및 피드백**
    → 발표일보다 2일전인 9일을 최종 배포일로 목표하여 예기치 못한 오류에 대비 할수 있게 함.
    
- **결과 보고서 작성**:
    → *예시: README.md, 프로젝트 요약 보고서*
    
- **회고**:
    → 마지막 배포 이후 전체 팀원의 회고를 수집하고 취합, 전달하여 각 팀원의 성장을 촉진할 수 있는 방안을 모색했다.

<aside>

# 프로젝트 수행 경과

</aside>

---

시연 사진, 짤 생성 예정 

<aside>

# 회고
### **🐢 임용균**
> 
> 

### **🐿️ 🌰 황혜진**
> 확실히 강의만 수강 하는 것보다 직접 기획과 프로젝트 전반에 걸친 이해를 필요로 하는 프로젝트 진행이 저의 이해도를 더욱 향상 할 수 있게 해준 것 같아서 강의 뿐만 아니라 개인적인 스프린트 미션 또한 잘 수행 해야겠다는 생각이 들었습니다.
또한 “프로젝트의 절반이 곧 기획이다.” 라는 생각이 들 만큼 기획의 중요성을 다시 한번 실감하게 되었습니다. 
> 

### **🐱 김희진**
> 초기 라이브러리 세팅과 환경 변수 관리의 중요성을 다시 한번 느꼈습니다. 팀원 간 개발 환경 차이로 인해 package-lock.json 충돌이 지속적으로 발생했고, 이를 맞추는 과정에서 많은 시간이 소요되었습니다. 또한 기획 단계에서 충분한 소통이 이루어지지 않아 프로젝트 후반에 조정이 필요했고, 이 과정에서 효율성이 떨어지는 아쉬움이 있었습니다.
> 

### **🐶 이재혁**
> 
> 

### **🏍️ 유선향**

> 처음 경험하는 팀프로젝트기에 뿌듯함과 아쉬움이 공존 하는 데요, 프로젝트를 통해 팀원 들과 협력하며 많은 기술을 배우고 경험할 수 있었습니다. 
일정 관리와 효율적인 개발을 위해 노력했지만, 일부 예기치 못한 상황에서 어려움을 겪었습니다. 
기획 단계에서 미처 의논 하지 못했던 부분이 나중에 문제가 되는 경우도 있었습니다. 
향후 프로젝트에서는 더 꼼꼼히 초기 기획과 커뮤니케이션을 개선하려고 합니다.
>
</aside>


## 개발 기간 및 작업 관리
### 개발 기간
* 전체 개발 기간 : 2025년 1월 23일 ~ 2월 11일
* 1차 배포 : 2025년 1월 27일
* 최종 배포 : 2025년 2월 9일 
