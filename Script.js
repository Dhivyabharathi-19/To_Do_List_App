const input = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("You must write something in your to  do");
    return false;
  }

  // creating p tag
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  // Creating delete Btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Remove";
  deleteBtn.classList.add("btn", "deleteBtn");
  li.appendChild(deleteBtn);

  //Creating edit Btn
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("btn", "editBtn");
  li.appendChild(editBtn);

  todoList.appendChild(li);
  inputBox.value = "";
};

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
