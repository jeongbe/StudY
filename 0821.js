const f = prompt("숫자를 입력하시오.")


if(f % 4 === 0 ){
    document.write("<h5>" + f + "는 4의 배수입니다." + "</h5>");
}else{
    document.write("<h5>" + f + "는 4의 배수가 아닙니다." + "</h5>");
}