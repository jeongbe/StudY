 // DOM 요소 가져오기
 const check1 = document.querySelector(".check-wap"); // 첫 번째 체크박스 컨테이너
 const check2 = document.querySelector(".check-wap2"); // 두 번째 체크박스 컨테이너
 const item1 = document.querySelector(".item1"); // 첫 번째 체크박스 레이블
 const item2 = document.querySelector(".item2"); // 두 번째 체크박스 레이블
 const btn = document.querySelector(".btn-submit"); // "다음" 버튼

 var x = false; // 첫 번째 체크박스 상태
 var y = false; // 두 번째 체크박스 상태

 // 첫 번째 체크박스 클릭 시 처리
 item1.addEventListener('click', () => {
     x = !x; // 상태 반전
     updateCheck1Content();
     c_Check(); // 버튼 활성화 여부 확인
 })

 // 두 번째 체크박스 클릭 시 처리
 item2.addEventListener('click', () => {
     y = !y; // 상태 반전
     updateCheck1Content2();
     c_Check(); // 버튼 활성화 여부 확인
 });

 // 첫 번째 체크박스 상태에 따른 UI 업데이트
 function updateCheck1Content() {
     if (x) {
         onclickitem1();
     } else {
         Notclickitem1();
     }
 }

 // 두 번째 체크박스 상태에 따른 UI 업데이트
 function updateCheck1Content2() {
     if (y) {
         onclickitem2();
     } else {
         Notclickitem2();
     }
 }

 // 첫 번째 체크박스 클릭 시 UI 업데이트
 function onclickitem1() {
     check1.classList.add('check-desc2'); // 체크박스 컨테이너에 스타일 추가
     item1.classList.add('item1-clicked'); // 체크박스 레이블에 스타일 추가
 }

 // 첫 번째 체크박스 클릭 해제 시 UI 업데이트
 function Notclickitem1() {
     check1.classList.remove('check-desc2'); // 체크박스 컨테이너 스타일 제거
     item1.classList.remove('item1-clicked'); // 체크박스 레이블 스타일 제거
 }

 // 두 번째 체크박스 클릭 시 UI 업데이트
 function onclickitem2() {
     check2.classList.add('check-desc2'); // 체크박스 컨테이너에 스타일 추가
     item2.classList.add('item2-clicked'); // 체크박스 레이블에 스타일 추가
 }

 // 두 번째 체크박스 클릭 해제 시 UI 업데이트
 function Notclickitem2() {
     check2.classList.remove('check-desc2'); // 체크박스 컨테이너 스타일 제거
     item2.classList.remove('item2-clicked'); // 체크박스 레이블 스타일 제거
 }

 // 체크박스 상태에 따라 버튼 활성화 여부 결정
 function c_Check() {
     if (x == true && y == true) {
         btn.disabled = false; // 버튼 활성화
     } else {
         btn.disabled = true; // 버튼 비활성화
     }
 }

 // "다음" 버튼 클릭 시 페이지 이동
 btn.onclick = () => {
     location.href = ("/logins/login/join.html");
 }











