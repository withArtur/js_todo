document.addEventListener('DOMContentLoaded', () => {
    const todoContainers = document.querySelectorAll('.todo-container');
    todoContainers.forEach((container) => {
        console.log('TodoList: ', container);
        new TodoList(container);
    });
});

class TodoList {
    constructor(containerElement) {
        this.container = containerElement;
        this.form = this.container.querySelector('.todoForm');
        this.input = this.container.querySelector('.todoInput');
        this.list = this.container.querySelector('.todoList');

        // Bind dei metodi per mantenere il contesto
        this.addTodoItem = this.addTodoItem.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);

        // Aggiunta degli event listeners
        // console.log('Form: ', this);
        console.log('Form: ', this.form);
        this.form.addEventListener('submit', this.addTodoItem);

        // Inizializzazione dei To-Do esistenti
        this.initializeTodos();
    }

    initializeTodos() {
        // Gestione dei checkbox esistenti
        const checkboxes = this.list.querySelectorAll('input.todo-checkbox');
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                this.toggleDone(checkbox);
            }
            checkbox.addEventListener('change', (e) => {
                this.toggleDone(e.target);
            });
        });

        // Gestione dei pulsanti "Elimina" esistenti
        const deleteButtons = this.list.querySelectorAll('.deleteTodo');
        deleteButtons.forEach((deleteButton) => {
            const todoElement = deleteButton.parentElement;
            deleteButton.addEventListener('click', () => {
                this.deleteTodoItem(todoElement);
            });
        });
    }

    addTodoItem(e) {
        e.preventDefault();
        const textTodo = this.input.value.trim();
        if (textTodo === '') return;

        // Creazione dell'elemento To-Do
        const todoElement = document.createElement('li');
        todoElement.classList.add('list-group-item', 'd-flex', 'align-items-center');

        todoElement.innerHTML = `
            <span>${textTodo}</span>
            <button class="btn btn-sm btn-danger ms-auto deleteTodo">Elimina</button>
        `;

        // Creazione della checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('todo-checkbox', 'form-check-input', 'me-2');
        checkbox.addEventListener('change', (e) => {
            this.toggleDone(e.target);
        });

        // Inserimento della checkbox nell'elemento To-Do
        todoElement.prepend(checkbox);

        // Gestione del pulsante "Elimina"
        const deleteButton = todoElement.querySelector('.deleteTodo');
        deleteButton.addEventListener('click', () => {
            this.deleteTodoItem(todoElement);
        });

        // Aggiunta del nuovo To-Do alla lista
        this.list.appendChild(todoElement);

        // Reset del campo di input
        this.input.value = '';
    }

    toggleDone(checkbox) {
        const todoText = checkbox.parentElement.querySelector('span');
        todoText.classList.toggle('text-decoration-line-through');
        todoText.classList.toggle('text-gray');
    }

    deleteTodoItem(todoElement) {
        todoElement.remove();
    }
}