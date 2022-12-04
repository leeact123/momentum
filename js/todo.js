const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInpuut = toDoForm.querySelector("input");과 같다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 기존에 const toDos로 했을 때, 새로운 데이터를 업데이트 할 수 없었고, 새로 리스트를 작성할 때마다 빈공간에 다시 리스트가 작성 되어 이전에 썼던 리스트들이 삭제되었다.

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); 
    //json.stringify() 대입값을 string형태로 만든다.toDos배열 전체를 string형태로 저장. 그 이유는 localstorage안에는 배열이 저장이 안되기 때문
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //todO는 파라미터로 Todos의 각각의 아이템을 뜻함. toDo의 id가 li.id(삭제클릭된 아이디)와 다르면 true이고 리스트에 남는다. parseInt()는 string을 number로 바꿔준다. toDo.id는 숫자고, li.id는 문자기 때문에 바꿔줘야한다.
    saveToDos(); // 리스트를 삭제한 후 남은 리스트를 다시 저장한다.
}
    

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //newTodO 파라미터로 newTodoObj값을 받았다. 받은 값의 id를 li에 id로 저장한다.
    const span = document.createElement("span");
    span.innerText = newTodo.text; //newTodo파라미터로 newTodoObj 객체값을 받았다. text와 id를 둘다 받았으므로 text로 newTodo에 .text를 추가해줘야 text가 표시된다.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    //li안에 span을 위치시킨다. 
    toDoList.appendChild(li);
    //toDoList안에 만든 li를 넣어준다.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //input을 칠때마다 그 value를 새로운변수(newTodo에 저장한다) 그다음에 toDoInput.value로 무엇을 하든 newToDo변수와는 상관이 없다.
    toDoInput.value = "";
    //todOIput.value에 값(타이핑한것)을 비워준다.이때 위의 newTodo가 비워지는것은 아니다. newTodo에는 이미 저장되있다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);//toDos.push(newTodo)를 했을 때는 각각의 아이템에 id를 부여할 수 없었다. newTodoObj를 만들어서 text와 id를 같이 toDos에 추가한다.
    paintToDo(newTodoObj);//painToDo에도 newTodoObj를 보낸다.
    saveToDos();
   
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //toDos에 이전에 저장된 리시트들이 들어가게한다. 새로운 리스트가 추가 될때마다 localstorage에 있던 것이 사라지지 않고 기존 리스트에 추가 되게 된다.
    parsedToDos.forEach(paintToDo); // 새로고침 하게 되면 toDo리스트가 사라지 되는 것을 해결. 배열형태로 저장된 parsedToDos 각각을 paintToDo하게 하면 새로 고침해도 리스트가 사라지지 않는다.
}

// function sayhello(item){
//     console.log("blablabla", item);
// } = (item) => console.log("blablabla", item); 