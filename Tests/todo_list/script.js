document.querySelector('#newtask input').onkeypress = function(event){
    if(event.keyCode === 13){
        validateAndAddTask(this)
    }
}

document.querySelector('#push').onclick = function(){
    const input = document.querySelector('#newtask input');
    validateAndAddTask(input);
}

function validateAndAddTask(input){
    if (input.value.length === 0){
        alert('Please enter a task');
    }else{
        addTask(input);
    }
}

function addTask(input){
    document.querySelector('#tasks').innerHTML +=
    `
    <div class="task" onclick="crossTask(this)">
        <span id="taskname">
            ${input.value}
        </span>
        <button class="delete" onclick="deleteTask(this)">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
    </div>
    `;
    input.value = '';   
}

function deleteTask(elem){
    elem.parentNode.remove();
}

function crossTask(elem){
    elem.classList.toggle('completed');
}