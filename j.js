const go = prompt("단을 입력하세요");

var i, j;

for( i = 1; i <= go; i++){
    if(i % 2 === 0){
        document.write("<div>")
        document.write("<h3>" + i + "단</h3>");
        for(j = 1; j <= 9; j++){
            document.write(i + "X" + j + " = " + i * j + "<br>");
        }
    }
    document.write("</div>");
}