document.addEventListener("DOMContentLoaded", function() {

    const removeButtons = document.querySelectorAll ('li button');
    const form = document.querySelector ('#add-item');
    const input = document.querySelector ('#new-task');
    const toDoList = document.querySelector ('#Todos-List');


    toDoList.addEventListener ('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove ();
        }
    });

    toDoList.addEventListener ('click', function (e) {
        const element = document.getElementById(e.target.id); 
        element.classList.add("stike");
    });

    let i = 0;

    form.addEventListener ('submit', function (e) {
        e.preventDefault ();
        console.log (input.value);
        const newToDoList = document.createElement('li');
        newToDoList.setAttribute("id", i++);
        const removeBtn = document.createElement('button');

        const newCheckbox = document.createElement ('input');
        newCheckbox.setAttribute ('type', 'checkbox');
    
        removeBtn.innerText = 'Remove';
        newToDoList.innerText = input.value;

        newToDoList.prepend (newCheckbox);
        newToDoList.appendChild (removeBtn);
        input.value = '';
        toDoList.appendChild(newToDoList);
    })
})
