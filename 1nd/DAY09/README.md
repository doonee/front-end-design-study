#DAY09

##1. 반응형 레이아웃 설계
	- 그리드시스템 모듈 제작
	- 시멘틱 마크업 구조화
	- General Media Queries(범용 미디어 쿼리)

```css
/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px) and (max-device-width : 480px) {
	/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
	/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
	/* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
	/* Styles */
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
	/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
	/* Styles */
}

/* Desktops and laptops ----------- */
@media only screen and (min-width : 1224px) {
	/* Styles */
}

/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
	/* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio:1.5), only screen and (min-device-pixel-ratio:1.5) {
	/* Styles */
}
```

##2. 와이어프래임 구조화
	- 제작한 PSD 활용하여 레이아웃 퍼블리싱

##3. Chrome 기본 속성 보기
![브라우저 기본속성 보기](http://i.imgur.com/BtqebtD.png)

##[참고]
- [calc CSS 계산함수](http://caniuse.com/#feat=calc)
- [가상선택자 :, :: 차이](http://webdir.tistory.com/339)