var count = 0; // 더보기 버튼 클릭 횟수를 저장할 변수

// 유틸리티 함수: 카드 생성
function createCard() {
    // 새로운 카드 요소를 생성합니다.
    var card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';

    // 카드 이미지를 생성하고 설정합니다.
    var cardImage = document.createElement('img');
    cardImage.src = '/Pro1/image/cat-8197577_1280.jpg';
    cardImage.className = 'card-img-top';
    cardImage.alt = '...';

    // 카드 본문을 생성하고 설정합니다.
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // 카드 이름 요소를 생성하고 설정합니다.
    var cardName = document.createElement('p');
    cardName.className = 'card-text';
    cardName.textContent = '이름';

    // 카드 가격 요소를 생성하고 설정합니다.
    var cardPrice = document.createElement('p');
    cardPrice.className = 'card-text';
    cardPrice.textContent = '가격';

    // 생성한 요소들을 조립합니다.
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardImage);
    card.appendChild(cardBody);

    return card;
}

// 이벤트 리스너 함수: 마우스가 요소를 벗어날 때 dropdown을 감춥니다.
function hideDropdown(event) {
    // 마우스가 dropdown, category, line 요소 밖으로 나가면 dropdown을 감춥니다.
    if (!dropdown.contains(event.relatedTarget) && !category.contains(event.relatedTarget) && !line.contains(event.relatedTarget)) {
        dropdown.style.display = "none";
    }
}

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

// category와 line 요소에 마우스 이벤트 리스너를 등록합니다.
category.addEventListener("mouseleave", hideDropdown);
line.addEventListener("mouseleave", hideDropdown);

// 더보기 버튼에 클릭 이벤트 리스너를 등록합니다.
document.querySelector('.btn2').addEventListener('click', function () {
    // 기존의 더보기 버튼을 제거합니다.
    btnContainer.remove();

    // 카드 그룹을 추가하는 함수를 호출합니다.
    addCardGroup();
});

// 이벤트 리스너 함수: 더보기 버튼 클릭 시 새로운 카드 그룹을 추가합니다.
function addCardGroup() {
    // 기존의 더보기 버튼이 이미 있는지 확인합니다.
    var existingButton = document.querySelector('.btn2');
    // 클릭 횟수를 증가시킵니다.
    count++;

    // 기존의 더보기 버튼이 있다면 제거합니다.
    if (existingButton) {
        existingButton.remove();
    }

    // 새로운 카드 그룹을 생성합니다.
    var newCardGroup = document.createElement('div');
    newCardGroup.className = 'cards';

    // 4개의 카드를 생성하고 카드 그룹에 추가합니다.
    for (var i = 0; i < 4; i++) {
        var card = createCard();
        newCardGroup.appendChild(card);
    }

    // 새로운 카드 그룹을 문서에 추가합니다.
    // 기존의 footer 요소의 이전 형제로 추가하여 footer 아래에 두도록 합니다.
    document.body.insertBefore(newCardGroup, document.querySelector('.footer'));

    // 새로운 더보기 버튼을 생성합니다.
    var newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = 'btn btn-outline-dark btn2 button-wrapper';
    newButton.textContent = '더보기';

    // 클릭 횟수가 2일 때 더보기 버튼을 비활성화합니다.
    if (count === 2) {
        newButton.disabled = true;
    }

    // 새로운 더보기 버튼을 문서에 추가합니다.
    // 기존의 footer 요소의 이전 형제로 추가하여 footer 아래에 두도록 합니다.
    document.body.insertBefore(newButton, document.querySelector('.footer'));

    // 새로운 더보기 버튼에 클릭 이벤트 리스너를 등록합니다.
    newButton.addEventListener('click', addCardGroup);
}

