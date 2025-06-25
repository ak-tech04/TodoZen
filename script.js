let form = document.querySelector("form");
let userTask = document.querySelector(".user__input");
let taskList = document.querySelector(".todo__list");
let addTask = document.querySelector(".add-btn");

// toggle background
let body = document.querySelector("body");
let toggle = document.querySelector(".toggle__img");

// adding task to the list
addTask.addEventListener("click", (event) => {
  event.preventDefault();
  userInput = userTask.value.trim();
  if (userInput.length > 0) {
    createTask(userInput);
  } else {
    alert("Don't Enter Empty task");
  }
});

// edit and remove btn
taskList.addEventListener("click", (event) => {
  const classList = Array.from(event.target.classList);
  if (classList.includes("edit-btn")) {
    // console.log("edit btn clicked");
    const btn = event.target;
    editBtn(btn);
  } else if (classList.includes("remove-btn")) {
    // console.log("remove btn clicked");
    const btn = event.target;
    removeBtn(btn);
  }
});

// toggle mode
toggle.addEventListener("click", (e) => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
});

function editBtn(btn) {
  // selecting todo task paragraph
  const text = btn.parentNode.previousElementSibling.innerHTML;
  userTask.value = `${text}`;
  taskList.removeChild(btn.parentNode.parentNode);
  userTask.focus();
}
function removeBtn(btn) {
  // console.log(btn);
  taskList.removeChild(btn.parentNode.parentNode);
}
function createTask(userInput) {
  // Creating div--- task > taskPara & btnContainer > taskEditBtn & taskRemoveBtn
  let task = document.createElement("div");
  let taskPara = document.createElement("p");

  let btnContainer = document.createElement("div");
  let taskEditBtn = document.createElement("button");
  let taskRemoveBtn = document.createElement("button");

  // taskPara = text, editbtn = edit, removebtn = remove
  taskPara.innerText = `${userInput}`;
  taskEditBtn.innerText = "Edit";
  taskRemoveBtn.innerText = "Remove";

  btnContainer.classList.add("buttons");
  taskEditBtn.classList.add("btn", "edit-btn");
  taskRemoveBtn.classList.add("btn", "remove-btn");
  task.classList.add("todo__items");
  taskPara.classList.add("todo__task");

  //   appending in task div
  task.appendChild(taskPara);
  task.appendChild(btnContainer);

  //   appending in btnContainer div
  btnContainer.appendChild(taskEditBtn);
  btnContainer.appendChild(taskRemoveBtn);

  //   adding in tasklist global div
  taskList.appendChild(task);
  //   clearing input field
  userTask.value = "";
}
