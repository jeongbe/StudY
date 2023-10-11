var category = document.getElementById("category");
var dropdown = document.getElementById("dropdown");

category.addEventListener("mouseenter", function() {
    // category위에 마우스가 있을때
    dropdown.style.visibility = "visible";
});

dropdown.addEventListener("mouseenter", function() {
    // 마우스가 dropdown 요소에 있을 때 dropdown을 계속해서 보이게 한다.
    dropdown.style.visibility = "visible";
});

category.addEventListener("mouseleave", function(event) {
    // 마우스가 category 요소를 벗어날 때 dropdown을 감춘다.

    //event.relatedTarget을 사용하여 마우스 커서가 카테고리 요소를 떠나 다른 요소로 이동한 경우 체크
    //if (!dropdown.contains(event.relatedTarget))는 드롭다운 요소 안에 마우스 커서가 있지 않은 경우를 체크
    if (!dropdown.contains(event.relatedTarget)) {
        dropdown.style.visibility = "hidden";
    }
});

dropdown.addEventListener("mouseleave", function(event) {
    // 마우스가 dropdown 요소를 벗어날 때 dropdown을 감춘다.
    if (!category.contains(event.relatedTarget)) {
        dropdown.style.visibility = "hidden";
    }
});

