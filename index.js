const _todoText = document.getElementById("todo-input");
const _todoSubmitButton = document.getElementById("submit-button");
const _form = document.querySelector("form")
const _todoList = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
refreshTodo();

_form.onsubmit = (event) => {
    event.preventDefault();
    if (_todoText.value === "") return;
    addTodo(_todoText.value);
    _todoText.value = "";
}
function addTodo(value) {
    todos.push({
        text: value,
        isDone: false
    });
    storeTodo();
    refreshTodo();
}
function refreshTodo() {
    _todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        const text = document.createElement("span")
        const doneButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        text.innerHTML = todo.text;
        doneButton.innerHTML = "✔"
        deleteButton.innerHTML = "🗑";
        //Onclick event register
        doneButton.onclick = (event) => {
            event.preventDefault();
            markAsDone(index);
        }
        deleteButton.onclick = (event) => {
            event.preventDefault();
            deleteTodo(index);
        }
        //Cross out text if is done
        if (todo.isDone) {
            text.style.textDecoration = "line-through";
        }
        //Appen all element to li
        li.appendChild(text);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        _todoList.appendChild(li);
    })
}
function deleteTodo(index) {
    todos.splice(index, 1);
    storeTodo();
    refreshTodo();
}
function markAsDone(index) {
    todos[index].isDone = !todos[index].isDone;
    storeTodo();
    refreshTodo();
}
function storeTodo() {
    window.localStorage.setItem("todos", JSON.stringify(todos));
}
