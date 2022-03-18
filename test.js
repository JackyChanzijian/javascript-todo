// OUR TODOS
let todosArr = [
    { value: "write articles" },
    { value: "code" },
    { value: "play guitar" },
    { value: "read" },
  ];
  
  // GRAB OUR span and ul from DOM
  let todoList = document.getElementById("todoList");
  let noOfTodos = document.getElementById("noOfTodos");
  
  // A FUNCTION TO CREATE TODO
  const createTodo = (arr) => {
    todoList.innerHTML = "";
    arr.forEach((todo, id) => {
      let list = document.createElement("li");
      let spanWithValue = document.createElement("span");
      let spanWithBtn = document.createElement("button");
  
      spanWithValue.innerText = todo.value;
      spanWithBtn.innerText = "X";
      spanWithBtn.style.color = "red";
  
      spanWithBtn.addEventListener("click", () => {
        deleteTodo(id);
      });
  
      list.appendChild(spanWithValue);
      list.appendChild(spanWithBtn);
  
      todoList.appendChild(list);
    });
    noOfTodos.innerText = todosArr.length;
  };
  
  const deleteTodo = (index) => {
    todosArr.splice(index, 1);
    createTodo(todosArr);
  };
  window.addEventListener("load", () => {
    createTodo(todosArr);
  });