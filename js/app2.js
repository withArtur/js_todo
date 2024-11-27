// console.log('Hello World!');

// definizione variabili necessarie
const inputTodoForm = document.getElementById('todoInput2');



document.getElementById('todoForm2').addEventListener('submit', function (e) {
    e.preventDefault();

    // 1 - Recuperare il testo della To-Do list
    const textTodo = inputTodoForm.value;
    console.log(textTodo);


    // 2 - Creare HTML per inserire la To-Do
    // const todo = `<li class="list-group-item d-flex align-items-center">
    //         <input type="checkbox" class="form-check-input me-2">
    //         <span>${textTodo}</span>
    //         <button class="btn btn-sm btn-danger ms-auto">Elimina</button>
    // </li>`;
    // // console.log(todo);

    // HTML li del To-Do item

    const todoElement = document.createElement('li');
    // todoElement.className = 'list-group-item d-flex align-items-center'; // className = proprieta string
    todoElement.classList.add('list-group-item', 'd-flex', 'align-items-center'); //.remove()/.toggle()/.contains(); // classList = metodo object

    todoElement.innerHTML = `<span>${textTodo}</span>
        <button class="btn btn-sm btn-danger ms-auto">Elimina</button>`;

    // HTML checkbox To-Do item
    const htmlCheck = document.createElement('input');
    htmlCheck.classList.add('todo-checkbox', 'form-check-input', 'me-2');
    htmlCheck.setAttribute('type', 'checkbox');

    htmlCheck.addEventListener('change', function (e) {
        toggleDone(e.target); // qui
    });

    todoElement.prepend(htmlCheck);

    console.log(todoElement);


    // 3 - Aggiungere HTML nuovo alla lista
    document.querySelectorAll('ul')[0].appendChild(todoElement);
});


// Al click sul check aggiungo line-trough al To-Do item
// selezionare check box
const checkboxes = document.querySelectorAll('input.todo-checkbox');


checkboxes.forEach((checkbox, index) => {
    console.log('forEach checkbox ', checkbox);

    if (checkbox.getAttribute('checked') !== null) {
        checkbox.parentElement.querySelector('span').classList.add('text-decoration-line-through');
        checkbox.parentElement.querySelector('span').classList.add('text-gray');
    }

    // agganciarli un evento click
    checkbox.addEventListener('change', (e) => {
        console.log('evento checked!');

        toggleDone(e.target); // qui
    })
});

// event listener's per la delete
const deleteButtons = document.querySelectorAll('.deleteTodo');
deleteButtons.forEach((deleteButton) => {
    const todoElement = deleteButton.parentElement;

    console.log(todoElement)

    deleteButton.addEventListener('click', function () {
        deleteTodo(todoElement);
    });
});

// Rimuovere un To-Do item
function deleteTodo(todoElement) {
    todoElement.remove();
}

function toggleDone(checkbox) {
    // aggiungere style="text-decoration: line-trough;"
    const elSpan = checkbox.parentElement.querySelector('span');

    elSpan.classList.toggle('text-decoration-line-through');
    elSpan.classList.toggle('text-gray');
}


