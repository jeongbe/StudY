

var category = document.getElementById("category");
var dropdown = document.getElementById("dropdown");
var line = document.querySelector(".line");
var btnContainer = document.querySelector('.btn');

// category와 line 요소에 마우스 이벤트 리스너를 등록합니다.
category.addEventListener("mouseenter", function () {
    // 마우스가 category 위에 있을 때 dropdown을 보이도록 설정합니다.
    dropdown.style.display = "block";
});

line.addEventListener("mouseenter", function () {
    // 마우스가 line 위에 있을 때 dropdown을 보이도록 설정합니다.
    dropdown.style.display = "block";
});

// 이벤트 리스너 함수: 마우스가 요소를 벗어날 때 dropdown을 감춥니다.
function hideDropdown(event) {
    // 마우스가 dropdown, category, line 요소 밖으로 나가면 dropdown을 감춥니다.
    if (!dropdown.contains(event.relatedTarget) && !category.contains(event.relatedTarget) && !line.contains(event.relatedTarget)) {
        dropdown.style.display = "none";
    }
}