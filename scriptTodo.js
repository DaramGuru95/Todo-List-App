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

// Local Storage in JavaScript
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
let city = localStorage.getItem("city");
let location2 = localStorage.getItem("location");

console.log(name);
console.log(age);
console.log(city);
console.log(location2);

let textEle = document.createElement("textarea");
textEle.cols = 50;
textEle.rows = 5;
let btnEle = document.createElement("button");
btnEle.textContent = "Save Button";

todoItemsElement.appendChild(textEle);
todoItemsElement.appendChild(btnEle);

btnEle.onclick = function () {
  let userEneteredValue = textEle.value;
  localStorage.setItem("userEneteredValue", userEneteredValue);
};

let getText = localStorage.getItem("userEneteredValue");
console.log("Local Storage", getText);
if (getText === null) {
  textEle.value = "";
} else {
  textEle.value = getText;
}

let countValue = document.getElementById("countValue");
countValue.style.color = "#c20a72";
let btnUpdate = document.getElementById("btnUpdate");

let clickCount = localStorage.getItem("updateCount");
console.log(clickCount);

if (clickCount === 0) {
  countValue.textContent = 0;
} else {
  countValue.textContent = clickCount;
}

btnUpdate.onclick = function () {
  let previousCount = countValue.textContent;
  let updateCount = parseInt(previousCount) + 1;
  console.log(updateCount);

  localStorage.setItem("updateCount", updateCount);
  countValue.textContent = updateCount;
};
