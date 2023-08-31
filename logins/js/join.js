let IdInput = document.getElementById("IdInput").value;
let IDError = document.querySelector(".IDError");

let PassInput = document.getElementById("PassInput").value;
let PassError = document.querySelector(".PassError");


//아이디 에러 메세지
function IDE() {
    if (IdInput === '' || IdInput == undefined) {
        IDError.style.display = "block";
    }
}

//비밀번호 에러 메세지
function PE() {
    if (PassInput === '' || PassInput == undefined) {
        PassError.style.display = "block";
    }
}


