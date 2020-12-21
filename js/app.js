const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

const changeColor = () => {
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

red.addEventListener('change', changeColor);

green.addEventListener('change', changeColor);

blue.addEventListener('change', changeColor);
