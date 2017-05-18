## 1. 타이포그래피 설계

### 1. 본문/단락(Paragraph) 설정
 
1. **본문 크기 설정**
	+ 본문 크기란? 문서의 기본이 되는 폰트의 크기를 말합니다.
    + 브라우저 기본 폰트사이즈 : 16px
    > 본문 크기 = `font-size : 16px` 설정

1. **기본 행간 크기 설정 (base-line-height)**
	+ 베이스라인 이란? 문서의 기준이 되는 행의 기본 높이를 말합니다.
    + 브라우저 기본 행간 배율 : 1.2 (120%)
    + 기본 행간(base-line-height) = 본문 크기(font-size) * 행간 배율
    > 행간 배율 = `line-height : 1.5` 설정


### 2. 제목(Headings) 설정

1. **제목 간의 스케일 크기 설정**
	+ 규칙적인 스케일 설정은 다수의 세션 제목 사용에 있어 도움이 됩니다.
    + `<H1>, <h2>, <h3>, <h4>, <h5>, <h6>` 제목간의 스케일 배율 설정
    + 제목 크기(font-size) = 이전 제목 크기 × 타입 배율(type-scale)
    > 타입 배율 = `1.25 (Major Third)` 설정
    + [참고 : 타이포그래피 설계 도구](https://www.gridlover.net/try)

1. **제목 크기의 행간 설정**
    + 기본 공식 :<br>
	> 행간(line-height) = ceil( 폰트크기(font-size) ÷ 기본행간(base-line-height) ) × ( 기본행간(base-line-height) ÷ 폰트크기(font-size) )
    + 베이스라인 기준 공식 :<br>
    > 행간(line-height) = ceil( 기본행간(base-line-height) × 제목이 차지하는 라인의 개수 )

### 3.버티컬리듬 설정

1. **모듈 간의 버티컬리듬 설정**
	+ 버티컬 리듬이란? 각 요소(Elements)간의 수직적인 공간 배열 관계를 말합니다.
	> 버티컬리듬 설정 = `margin-bottom : 24px` 설정

## 2. 그리드시스템 설계

1. 그리드시스템 구조
    + 컬럼(Column)
	+ 거터(Gutter)
	+ 마진(Margin)

2. 중단점 설정
	+ [참고 : 디바이스 뷰크기 확인](http://screensiz.es)

3. 와이어프래임 스케치
