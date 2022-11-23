const toDoForm = document.getElementById("todo-form");
const ToDoInput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list");

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSumbit(event) {
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSumbit);