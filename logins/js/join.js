// 아이디 입력란 요소와 값 가져오기
let IdInput = document.getElementById("IdInput").value;
let idplace = document.querySelector(".input");
let IDError = document.querySelector(".IDError");
let IdimagEr = document.querySelector(".form-img-error");
let idImg = document.querySelector(".form-img");


// 비밀번호 입력란 요소와 값 가져오기
let PassInput = document.getElementById("PassInput").value;
let PassError = document.querySelector(".PassError");
let passImg = document.querySelector(".password-img-error");
let passImgEr = document.querySelector(".password-img");
let inputPssword = document.querySelector(".inputpassword");

//버튼 보이게하는 버튼
let showBtn = document.querySelector(".btn-show");

//아이디, 비밀번호 <div>가져오기 -> 오류났을경우 태두리를 빨간색으로 바꿔주기 위해서
let IdtagError = document.querySelector(".user");
let passtagError = document.querySelector(".pasError");

// 아이디 에러 메시지 처리 함수
function IDE() {
    if (IdInput === '' || IdInput == undefined) {
        IDError.style.display = "block"; // 에러 메시지 표시
        document.getElementById("IdInput").setAttribute("placeholder", "아이디");
        document.getElementById("IdInput").classList.add("red-placeholder"); // 클래스 추가
        idImg.style.display = "none";
        IdimagEr.style.display = "block";
        IDFocusError();
    } else {
        IDError.style.display = "none"; // 에러 메시지 감추기
        document.getElementById("IdInput").removeAttribute("placeholder");
        document.getElementById("IdInput").classList.remove("red-placeholder"); // 클래스 제거
        idImg.style.display = "block";
        IdimagEr.style.display = "none";
        
    }
}

// 아이디 입력란에 포커스 아웃 시 에러 메시지와 스타일 처리 함수
function IDFocusError() {
    IdtagError.style.borderRight = "3px solid red"; // 빨간 테두리 스타일 추가
    IdtagError.style.borderTop = "3px solid red"; // 빨간 테두리 스타일 추가
    IdtagError.style.borderLeft = "3px solid red"; // 빨간 테두리 스타일 추가
    IdtagError.style.borderBottom = "2px solid red"; // 빨간 테두리 스타일 추가
}

// 비밀번호 에러 메시지 처리 함수
function PE() {
    if (PassInput === '' || PassInput == undefined) {
        PassError.style.display = "block"; // 에러 메시지 표시
        document.getElementById("PassInput").setAttribute("placeholder", "비밀번호");
        document.getElementById("PassInput").classList.add("red-placeholder"); // 클래스 추가
        passImg.style.display = "block";
        passImgEr.style.display = "none";
        PassFocusError();
    } else {
        PassInput.style.display = "none"; // 에러 메시지 감추기
        document.getElementById("PassInput").removeAttribute("placeholder");
        document.getElementById("PassInput").classList.remove("red-placeholder"); // 클래스 제거
        passImg.style.display = "none";
        passImgEr.style.display = "block";
        
    }
}

// 비밀번호 입력란에 포커스 아웃 시 에러 메시지와 스타일 처리 함수
function PassFocusError() {
    passtagError.style.borderBottom = "3px solid red"; // 빨간 테두리 스타일 추가
    passtagError.style.borderRight = "3px solid red"; // 빨간 테두리 스타일 추가
    passtagError.style.borderTop = "2px solid red"; // 빨간 테두리 스타일 추가
    passtagError.style.borderLeft = "3px solid red"; // 빨간 테두리 스타일 추가
}

//비밀번호 옆에 눈 버튼 누르면 비밀번호 보이게 하는 함수
function togglePasswordVisibility1() {
	
    if (inputPssword.type === 'password') {
        inputPssword.type = 'text';
    } else {
        inputPssword.type = 'password';
    }
}

showBtn.onclick = () => {
    togglePasswordVisibility1();
}

