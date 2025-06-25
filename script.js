let form = document.querySelector("form");
let userTask = document.querySelector(".user__input");
let taskList = document.querySelector(".todo__list");
let addTaskBtn = document.querySelector(".add-btn");

// toggle background
let body = document.querySelector("body");
let toggleimg = document.querySelector(".toggle__img");

// adding task to the list
addTaskBtn.addEventListener("click", (event) => {
  if (!form.checkValidity()) {
    return;
  }

  event.preventDefault();
  userInput = userTask.value.trim();
  if (userInput.length > 0) {
    taskList.appendChild(createTaskElement(userInput));
    console.log(createTaskElement(userInput));
    userTask.value = "";
    userTask.focus();
  } else {
    //   can alert user to not enter space  value
  }
});

// edit and remove btn
taskList.addEventListener("click", (event) => {
  const classList = Array.from(event.target.classList);
  if (classList.includes("edit-btn")) {
    // console.log("edit btn clicked");
    const btn = event.target;
    handleEdit(btn);
  } else if (classList.includes("remove-btn")) {
    // console.log("remove btn clicked");
    const btn = event.target;
    handleRemove(btn);
  }
});

// toggleimg mode
toggleimg.addEventListener("click", (e) => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
});

function handleEdit(btn) {
  // selecting todo task paragraph
  const text = btn.parentNode.previousElementSibling.innerHTML;
  userTask.value = `${text}`;
  taskList.removeChild(btn.parentNode.parentNode);
  userTask.focus();
}
function handleRemove(btn) {
  // console.log(btn);
  taskList.removeChild(btn.parentNode.parentNode);
}
function createTaskElement(userInput) {
  // Creating div--- task > taskPara & btnContainer > taskEditBtn & taskRemoveBtn
  const taskItem = document.createElement("div");
  taskItem.classList.add("todo__items");

  // taskPara = text, editbtn = edit, removebtn = remove
  const taskPara = document.createElement("p");
  taskPara.innerText = `${userInput}`;
  taskPara.classList.add("todo__task");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("buttons");

  const taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("btn", "edit-btn");
  taskEditBtn.innerText = "Edit";

  const taskRemoveBtn = document.createElement("button");
  taskRemoveBtn.innerText = "Remove";
  taskRemoveBtn.classList.add("btn", "remove-btn");

  btnContainer.append(taskEditBtn, taskRemoveBtn);
  taskItem.append(taskPara, btnContainer);

  return taskItem;
}
