let todos = JSON.parse(localStorage.getItem('todo')) || [];

const todoList = document.getElementsByClassName('todos')[0];
const todoForm = document.getElementsByClassName('add-todo-form')[0];

function addTodo(e) {
    e.preventDefault();
    const todoInput = document.querySelectorAll('input[name="add-todo"]')[0];
    let todoValue = todoInput.value;
    const todo = {
        value: todoValue,
        done: false
    }
    todos.push(todo);
    // todoValue = '';
    todoInput.value = '';
    localStorage.setItem('todo', JSON.stringify(todos));
    // todoInput.setAttribute('value', ' ');
    populateList(todos);
    todos = []
}

function populateList(todos) {
    todos.forEach((todo) => {
        const label = document.createElement('label');
        label.innerHTML = todo.value;
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('value', todo.done);
        const li = document.createElement('li');
        li.appendChild(input);
        li.appendChild(label);
        todoList.appendChild(li);
    });
    
}

const test = document.querySelector('input[type = "submit"]')
test.addEventListener('click', addTodo);