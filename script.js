const tasksContainer = document.getElementById("list-container");
const tasks = tasksContainer.querySelectorAll("li");
const addButton = document.querySelector(".add");
const taskContent = document.querySelector(".input-task");
const delTask = document.querySelectorAll("li>span");
///////////////////////////////////

function addTask() {
  if (taskContent.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskContent.value;
    tasksContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskContent.value = "";
  saveData();
}

tasksContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", tasksContainer.innerHTML);
}
function showTask() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}
showTask();
// const renderTasks = function (Arr) {
//   if ((Arr = [])) {
//     tasksContainer.innerHTML = "";
//     for (let i = 0; i < Arr.length; i++) {
//       localStorage.setItem(`task${i + 1}`, Arr[i]);
//     }
//     Arr.forEach((task) => {
//       tasksContainer.insertAdjacentHTML("afterbegin", task);
//     });
//   } else {
//     for (let i = 0; i < Arr.length; i++) {
//       if (JSON.parse(localStorage.getItem(`task${i + 1}`))) {
//         Arr[i] = JSON.parse(localStorage.getItem(`tasks${i + 1}`));
//       }
//     }
//   }

//   let tasksArr = [];
// };

// renderTasks(tasksArr);

// localStorage.getItem("task");
// addButton.addEventListener("click", function () {
//   console.log(taskContent.value);
//   if (!taskContent.value == "") {
//     const newTask = `<li class='task'>${taskContent.value}<span class='del-button'>X</span></li>`;
//     // newTask.innerHTML += taskContent.value;
//     tasksContainer.insertAdjacentHTML("afterbegin", newTask);
//     tasksArr.unshift(newTask);
//     localStorage.setItem("tasks", JSON.stringify(tasksArr));
//   }
// });

// tasksContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("task")) {
//     e.target.classList.toggle("checked");
//   }
// });
// tasksContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("del-button")) {
//     const valueToRemove = `${e.target.parentElement}`;
//     console.log(valueToRemove, tasksArr);
//     const indexToRemove = tasksArr.findIndex((item) => item === valueToRemove);

//     if (indexToRemove > -1) {
//       array.splice(indexToRemove, 1); // Removes 1 item at the found index
//     }
//   }
// });
// console.log(tasks);
