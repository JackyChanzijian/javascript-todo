const _todoText = document.getElementById("todo-input");
const _todoSubmitButton = document.getElementById("submit-button");
const _form = document.querySelector("form")
const _todoList = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
displayTodo();

_form.onsubmit = (event) => {
    event.preventDefault();
    if (_todoText.value === "") return;
    addTodo(_todoText.value);
    _todoText.value = "";
}
function addTodo(value) {
    todos.push(value);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    displayTodo();
}
function displayTodo() {
    _todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        const text = document.createElement("span")
        const deleteButton = document.createElement("button")
        text.innerHTML = todo;
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = (event) => {
            event.preventDefault();
            deleteTodo(index);
        }
        li.appendChild(text);
        li.appendChild(deleteButton);
        _todoList.appendChild(li);
    })
}
function deleteTodo(index) {
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    displayTodo();
}

