let todoItemsElement = document.getElementById("todoItemsContainer");
let addTodoEle = document.getElementById("addTodoEle");

let obj = [
  {
    text: "Learn HTML",
    id: 1,
  },
  {
    text: "Learn CSS",
    id: 2,
  },
  {
    text: "Learn JavaScript",
    id: 3,
  },
];

function onTodoStatus(checkboxId, labelId) {
  //   let checkBoxElement = document.getElementById(checkboxId);
  //   console.log(checkBoxElement.checked);
  let labelEle = document.getElementById(labelId);

  labelEle.classList.toggle("checked");
  //   if (checkBoxElement.checked === true) {
  //     labelEle.classList.add("checked");
  //   } else {
  //     labelEle.classList.remove("checked");
  //   }
}

function onTodoDelete(todoId) {
  let todoEle = document.getElementById(todoId);
  todoItemsElement.removeChild(todoEle);
}

function createAndAppendTodo(obj) {
  let checkboxId = "checkbox" + obj.id;
  let labelId = "label" + obj.id;
  let todoId = "todo" + obj.id;

  let todoELement = document.createElement("li");
  todoELement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsElement.appendChild(todoELement);
  todoELement.id = todoId;

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.onclick = function () {
    onTodoStatus(checkboxId, labelId);
  };
  inputElement.classList.add("checkbox-input");
  todoELement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoELement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = obj.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.onclick = function () {
    onTodoDelete(todoId);
  };
  deleteIcon.classList.add("fa-regular", "fa-trash-can");
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of obj) {
  createAndAppendTodo(todo);
}

let todoCount = obj.length;

function addTodoItem() {
  todoCount = todoCount + 1;
  let userInputEle = document.getElementById("todoUserInput");
  let userInputValue = userInputEle.value;
  if (userInputValue === "") {
    alert("Please Enter Valid Input ");
    return;
  }

  let newTodo = {
    text: userInputValue,
    id: todoCount,
  };
  createAndAppendTodo(newTodo);
  userInputEle.value = "";
}

addTodoEle.onclick = function () {
  addTodoItem();
};
