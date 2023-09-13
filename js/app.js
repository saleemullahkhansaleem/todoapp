const taskBox = document.getElementById('task');
var input = document.getElementById("text");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
});

function addTask() {
    const data = document.getElementById('text');
    if (data.value != "") {
        taskBox.innerHTML += `<div class="task">
        <p class="text">${data.value} </p>
        <div class="icons-box">
            <span class="icons orange" onclick="editTask(this)"
              ><ion-icon name="create-outline"></ion-icon
            ></span>
            <span class="icons red" onclick="delTask(this)"
              ><ion-icon name="close-circle-outline"></ion-icon></span>
          </div>
      </div>`
      data.value = "";
    }
}
function editTask(e) {
    let data = e.parentElement.previousElementSibling.textContent;
    e.parentElement.parentElement.innerHTML = `<input value="${data}" id="text" class="text-input" type="text" />
    <button class="btn" type="button"  onclick="updateTask(this)">
    <ion-icon name="arrow-up-outline"></ion-icon>
    </button>`
}
function updateTask(e) {
    let data = e.previousElementSibling.value;
    e.parentElement.innerHTML = `<p class="text">${data} </p>
    <div class="icons-box">
            <span class="icons orange" onclick="editTask(this)"
              ><ion-icon name="create-outline"></ion-icon
            ></span>
            <span class="icons red" onclick="delTask(this)"
              ><ion-icon name="close-circle-outline"></ion-icon></span>
          </div>`
}
function delTask(e) {
    e.parentElement.parentElement.remove();
}
// toggle mode 
function toggleMode(e) {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--bg') === '#222') {
        root.style.setProperty('--bg', '#fff');
        root.style.setProperty('--clr', '#000');
        e.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    }
    else{
        root.style.setProperty('--bg', '#222');
        root.style.setProperty('--clr', '#fff');
        e.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    }
}