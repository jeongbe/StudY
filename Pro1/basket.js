// const checkAll = document.getElementById('Allc');

// let is_checked = checkAll.checked;
// console.log(is_checked);

// checkAll.onclick = () => {
//     is_checked = checkAll.checked;
//     console.log(is_checked);
// };
const checkAll = document.getElementById('Allc');
const checkboxes = document.querySelectorAll('.chk');
const deleteButtons = document.querySelectorAll('.Ximg');
const products = document.querySelectorAll('.product');
const allDeleteButton = document.querySelector('.Alldelete');
const productsContainer = document.querySelector('.products');
const clickDeleteButton = document.querySelector('.clickdelete');

//전체 삭제
allDeleteButton.onclick = () => {
    // productsContainer 내의 모든 product 요소를 삭제
    productsContainer.innerHTML = '';
};

//선택삭제
clickDeleteButton.onclick = () => {
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            // 체크된 product 요소를 삭제
            products[index].remove();
        }
    });
};

// "전체 선택" 체크박스를 클릭할 때의 이벤트 핸들러입니다.
checkAll.onclick = () => {
    // "전체 선택" 체크박스의 상태를 가져와 is_checked 변수에 저장합니다.
    is_checked = checkAll.checked;

    // 각 상품의 체크박스에 대해 is_checked 값으로 상태를 설정하여 모두 선택 또는 해제합니다.
    checkboxes.forEach((checkbox) => {
        checkbox.checked = is_checked;
    });
};

// 각 상품의 체크박스에 대한 이벤트 핸들러를 등록합니다.
checkboxes.forEach((checkbox) => {
    // 개별 체크박스를 클릭할 때의 이벤트 핸들러입니다.
    checkbox.onclick = () => {
        // 모든 체크박스가 선택되었는지 확인하는 변수를 선언합니다.
        const allChecked = Array.from(checkboxes).every((chk) => chk.checked);

        // 만약 모든 체크박스가 선택되었다면 "전체 선택" 체크박스를 활성화합니다.
        checkAll.checked = allChecked;
    };
});

//X이미지 클릭시 해당 상품 삭제
deleteButtons.forEach((button, index) => {
    button.onclick = () => {
        // 해당 버튼이 속한 product 요소를 삭제
        products[index].remove();
    };
});
