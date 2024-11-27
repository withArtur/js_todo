// console.log('Hello World!');

// definizione variabili necessarie
const inputTodoForm = document.getElementById('todoInput');



document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // 1 - Recuperare il testo della To-Do list
    const textTodo = inputTodoForm.value;
    console.log(textTodo);


    // 2 - Creare HTML per inserire la To-Do
    // const htmlTodo = `<li class="list-group-item d-flex align-items-center">
    //         <input type="checkbox" class="form-check-input me-2">
    //         <span>${textTodo}</span>
    //         <button class="btn btn-sm btn-danger ms-auto">Elimina</button>
    // </li>`;
    // // console.log(htmlTodo);

    // HTML li del To-Do item

    const htmlTodoElement = document.createElement('li');
    // htmlTodoElement.className = 'list-group-item d-flex align-items-center'; // className = proprieta string
    htmlTodoElement.classList.add('list-group-item', 'd-flex', 'align-items-center'); //.remove()/.toggle()/.contains(); // classList = metodo object

    htmlTodoElement.innerHTML = `<span>${textTodo}</span>
        <button class="btn btn-sm btn-danger ms-auto">Elimina</button>`;

    // HTML checkbox To-Do item
    const htmlCheck = document.createElement('input');
    htmlCheck.classList.add('todo-checkbox', 'form-check-input', 'me-2');
    htmlCheck.setAttribute('type', 'checkbox');

    htmlCheck.addEventListener('change', function (e) {
        toggleDone(e.target); // qui
    });

    htmlTodoElement.prepend(htmlCheck);

    console.log(htmlTodoElement);


    // 3 - Aggiungere HTML nuovo alla lista
    document.querySelectorAll('ul')[0].appendChild(htmlTodoElement);
});


// Al click sul check aggiungo line-trough al To-Do item
// selezionare check box
const checkboxes = document.querySelectorAll('input.todo-checkbox');


checkboxes.forEach((checkbox, index) => {
    console.log('forEach checkbox ', checkbox);

    if (checkbox.getAttribute('checked') !== null) {
        checkbox.parentElement.classList.add('text-decoration-line-through');
    }

    // agganciarli un evento click
    checkbox.addEventListener('change', (e) => {
        console.log('evento checked!');

        toggleDone(e.target); // qui
    })
});

// Rimuovere un To-Do item
function deleteTodo() {
    // click
}

function toggleDone(checkbox) {
    // aggiungere style="text-decoration: line-trough;"
    const elSpan = checkbox.parentElement.querySelector('span');

    elSpan.classList.toggle('text-decoration-line-through');
    elSpan.classList.toggle('text-gray');
}


