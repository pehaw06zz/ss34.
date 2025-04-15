let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Xóa";
    delBtn.onclick = () => deleteTodo(index);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (value) {
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    renderTodos();
  }
}
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
renderTodos();
