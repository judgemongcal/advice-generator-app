const adviceNum = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const generateBtn = document.querySelector('.dice');

const getAdvice = async () => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const result = await data.json();
    displayAdvice(result);
}

const displayAdvice = (res) => {
    adviceNum.innerHTML = res.slip.id;
    adviceText.innerHTML = res.slip.advice;
}

generateBtn.addEventListener('click', getAdvice);
