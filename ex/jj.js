const go = prompt("입력받을 수를 쓰시오");

var i, j;

document.write("<div>")
document.write("<h3>" + go + "단</h3>");
for(j = 1; j <= 9; j++){
    document.write(go + "X" + j + " = " + go * j + "<br>");
}
document.write("</div>");