let todoItemsElement = document.getElementById("todoItemsContainer");

let obj = [
  {
    text: "Learn HTML",
  },
  {
    text: "Learn CSS",
  },
  {
    text: "Learn JavaScript",
  },
  {
    text: "Learn React",
  },
];

function createAndAppendTodo(obj) {
  let todoELement = document.createElement("li");
  todoELement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsElement.appendChild(todoELement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = "myCheckbox";
  inputElement.classList.add("checkbox-input");
  todoELement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoELement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "myCheckbox");
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = obj.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelElement.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-regular", "fa-trash-can");
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of obj) {
  createAndAppendTodo(todo);
}
