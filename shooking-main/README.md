# shooking
슈킹 신발 쇼핑몰 개발을 위한 문서 가이드 저장소입니다.
# 상품 목록 페이지 요구사항 분석 및 기능 목록

## 📌 기본 정보
### 프로젝트명: 슈킹 쇼핑몰 상품 목록 페이지

### 사용하게 될 기술: 
예) React

### 문서 작성자: 예) 최은서

## 📝 고객 요구사항 정리

-  모바일 UI
-  신발 상품 사진 잘 보이도록 배치
-  장바구니에 담긴 상품 갯수 실시간 업데이트
-  배포 URL

## 📋 기능 목록
- 상품 리스트
상품을 2개의 컬럼으로 배치
  - `<ProductList />`

- 상품 카드
이미지, 상품명, 가격, 장바구니 담기 버튼
  - `<ProductCard/>`

- 장바구니 기능
1. 담기 버튼 클릭 시 장바구니에 담기
 `<ProductCard/>` - onClickAddToCart()
2. 헤더 상단 상품 개수 표시
 `<Header/>`

- 무한 스크롤
  react-infinite-scroll-component
