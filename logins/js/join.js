let IdInput = document.getElementById("IdInput").value;
let idplace = document.querySelector(".input");
let IDError = document.querySelector(".IDError");

let PassInput = document.getElementById("PassInput").value;
let PassError = document.querySelector(".PassError");

let IdtagError = document.querySelector(".error");
let passtagError = document.querySelector(".pasError");

//아이디 에러 메세지
function IDE() {
    if (IdInput === '' || IdInput == undefined) {
        IDError.style.display = "block";
        document.getElementById("IdInput").setAttribute("placeholder", "아이디");
        document.getElementById("IdInput").classList.add("red-placeholder"); // 클래스 추가
        IDFocusError();
    }else{
        IDError.style.display = "none";
        document.getElementById("IdInput").removeAttribute("placeholder");
        document.getElementById("IdInput").classList.remove("red-placeholder"); // 클래스 제거
    }
}

function IDFocusError() {
    IdtagError.style.border = "2px solid red";
}

//비밀번호 에러 메세지
function PE() {
    if (PassInput === '' || PassInput == undefined) {
        PassError.style.display = "block";
        document.getElementById("PassInput").setAttribute("placeholder", "비밀번호");
        document.getElementById("PassInput").classList.add("red-placeholder"); // 클래스 추가
        PassFocusError();
    }else{
        PassInput.style.display = "none";
        document.getElementById("PassInput").removeAttribute("placeholder");
        document.getElementById("PassInput").classList.remove("red-placeholder"); // 클래스 제거
    }
}

function PassFocusError() {
    passtagError.style.border = "2px solid red";
}


