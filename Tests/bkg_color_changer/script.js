function hexadecimalNumber(){
    const min = 0;
    const max = 255;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(){
    let color = '';
    for (let i = 0; i < 3; i++){
        color += `${hexadecimalNumber().toString(16)}`;
    }
    return color;
}

const container = document.getElementById('container');
const text = document.getElementById('text');
setInterval(function changeColor(){
    const newColor = randomColor();
    container.style.backgroundColor = `#${newColor}`;
    text.innerHTML = newColor;
}, 1500);