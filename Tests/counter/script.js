let count = 0;
const animationTime = 500;
const container = document.getElementById('posContainer');

const init = () => {
    const digit = document.getElementsByClassName('digit')[0];
    digit.innerText = count;
}

init();

document.getElementById('plus').addEventListener('click', function(){
    count++;
    const element = document.createElement('div');
    element.classList.add('digit');
    element.innerText = count;
    
    container.appendChild(element);
    container.classList.add('animate');
    setTimeout(() => {
        container.removeChild(container.children[0]);
        container.classList.remove('animate');
    }, animationTime);
});

document.getElementById('minus').addEventListener('click', function(){
    count--;
    const element = document.createElement('div');
    element.classList.add('digit');
    element.classList.add('reverse');
    element.innerText = count;

    container.children[0].classList.add('reverse');
    container.prepend(element);
    container.classList.add('animate-reverse');
    setTimeout(() => {
        container.removeChild(container.children[container.childElementCount - 1]);
        container.children[0].classList.remove('reverse');
        container.classList.remove('animate-reverse');
    }, animationTime);
});