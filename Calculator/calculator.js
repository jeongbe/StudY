const numText = document.querySelector('.num');

const remove = document.querySelector('.remove');
const num7 = document.getElementById('num_7');

var answer = 0;

remove.addEventListener('click', inputNum);

num7.addEventListener('click', (event) => {
    answer = numText.innerHTML += num7.innerText;
    // console.log(+answer + 2);
    console.log(answer);
});

function inputNum(_num) {
    answer = answer.slice(0, -1);
    numText.innerHTML = answer;
    console.log(answer);
}
