var s = parseInt(prompt("몇까지 3의 배수를 찾을까요"));
var _count = 0;
var i;

for(i = 1; i <= s; i++){
    if(s % 3 === 0){
        _count++;
        document.write("<h4>"+ s + "</h4>")
    }
}
document.write("<h4>" + s + "까지 3의 배수의 개수 : " + _count +"</h4>" );