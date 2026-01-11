# 🌉 CareerBridge - 취업 체험 플랫폼

직장 생활을 미리 경험하고 인턴십으로 연결되는 기회를 제공하는 웹사이트입니다.

## 📁 프로젝트 구조

```
career-bridge/
├── index.html              # 메인 페이지
├── programs.html           # 프로그램 리스트 페이지
├── program-detail.html     # 프로그램 상세 페이지
├── application.html        # 신청 페이지
├── mypage.html            # 마이페이지
├── login.html             # 로그인 페이지
├── signup.html            # 회원가입 페이지
├── css/
│   └── style.css          # 전체 스타일시트
├── js/
│   ├── main.js            # 공통 JavaScript
│   ├── detail.js          # 상세 페이지 기능
│   ├── application.js     # 신청 폼 기능
│   ├── mypage.js          # 마이페이지 기능
│   └── auth.js            # 로그인/회원가입 기능
├── images/
│   ├── logo.svg           # CareerBridge 로고
│   └── logo.png           # 대체 로고 (옵션)
└── README.md              # 프로젝트 설명서
```

## 🚀 실행 방법

1. **파일 준비**
   - 모든 파일이 위 구조대로 저장되어 있는지 확인하세요

2. **웹사이트 실행**
   - `index.html` 파일을 더블클릭하거나
   - 브라우저로 직접 드래그하여 열기

3. **페이지 이동**
   - 상단 네비게이션에서 "체험 프로그램" 클릭 → `programs.html`로 이동
   - 프로그램 카드 클릭 → `program-detail.html` (상세 페이지)
   - "신청하기" 버튼 클릭 → `application.html` (신청 페이지)
   - 로그인 후 → `mypage.html` (마이페이지)

## ✨ 주요 기능

### 현재 구현된 기능
- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 메인 페이지 (히어로, 프로그램 카드, 기능 소개)
- ✅ 프로그램 리스트 페이지 (필터, 정렬, 검색)
- ✅ 프로그램 상세 페이지 (일정, FAQ, 관심 등록)
- ✅ 신청 페이지 (폼 유효성 검사, 파일 업로드)
- ✅ 마이페이지 (신청 내역, 관심 프로그램, 인증서)
- ✅ 로그인 / 회원가입 (소셜 로그인 UI 포함)
- ✅ 부드러운 애니메이션 및 호버 효과
- ✅ FAQ 아코디언
- ✅ 모달 다이얼로그
- ✅ 탭 네비게이션
- ✅ 로고 디자인 및 적용

### 추가 예정 기능
- 🔜 실제 데이터베이스 연동 (Java + MySQL)
- 🔜 백엔드 API 개발 (Spring Boot)
- 🔜 실제 인증 시스템
- 🔜 결제 시스템 (유료 프로그램용)
- 🔜 리뷰 및 평점 시스템

## 🎨 디자인 특징

- **컬러 팔레트**
  - Primary: #4A90E2 (파란색)
  - Secondary: #50C878 (초록색)
  - Accent: #FF6B6B (빨간색)

- **타이포그래피**
  - 시스템 기본 폰트 사용 (깔끔한 가독성)

- **레이아웃**
  - 그리드 시스템 활용
  - 카드형 디자인
  - 고정 헤더

## 💻 기술 스택

- **Frontend**
  - HTML5
  - CSS3 (Grid, Flexbox)
  - Vanilla JavaScript

- **Backend** (추후 구현)
  - Java (Spring Boot)
  - MySQL

## 📱 반응형 지원

- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1024px
- **Mobile**: 768px 이하

## 🔧 커스터마이징

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 변수 수정:

```css
:root {
    --primary-color: #4A90E2;  /* 원하는 색상으로 변경 */
    --secondary-color: #50C878;
    --accent-color: #FF6B6B;
}
```

### 프로그램 추가
`index.html` 또는 `programs.html`에서 `.program-card` 복사하여 수정

## 📧 문의

- 이메일: contact@careerbridge.com
- 개발자: 윤찬 + Claude

## 📝 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

---

**Made with ❤️ by 윤찬 & Claude**
