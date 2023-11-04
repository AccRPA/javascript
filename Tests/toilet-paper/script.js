const rollElement = document.querySelector('.roll');
const separationElement = document.querySelector('.separation');
const paperElement = document.querySelector('.paper');

rollElement.addEventListener('click', function(){
    rollElement.classList.toggle('move-roll');
    separationElement.classList.toggle('move-separation');
    paperElement.classList.toggle('move-paper');
});