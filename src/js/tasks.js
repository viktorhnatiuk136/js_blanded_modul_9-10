import { nanoid } from 'nanoid'

import refs from "./refs";
import { markupItem, markupList } from "./markup-tasks";

const itemKey = "tasks";
const taskList = JSON.parse(localStorage.getItem(itemKey));

if (!taskList) {
    localStorage.setItem(itemKey, JSON.stringify([]));
} else {
    refs.list.insertAdjacentHTML("beforeend", markupList(taskList));
}

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value;
  const taskDescription = event.target.elements.taskDescription.value;

    if (taskName === "" || taskDescription === "") {
        return alert("Заповніть ці поля!");
    }
    
    const newTask = {
    id: nanoid(),
    taskName,
    taskDescription,
    };

    const taskList = JSON.parse(localStorage.getItem(itemKey));

    taskList.push(newTask);
    localStorage.setItem(itemKey, JSON.stringify(taskList));


        
    refs.list.insertAdjacentHTML("beforeend", markupItem(newTask));
    refs.form.reset(); 
})


refs.list.addEventListener("click", (ev) => {
    
    if (!ev.target.classList.contains("task-list-item-btn")) {
        return;
    }

    const perrentLi = ev.target.closest(".task-list-item");
    const id = perrentLi.dataset.id;

    if (perrentLi) {
        perrentLi.remove();

        const taskList = JSON.parse(localStorage.getItem(itemKey));

        const newTaskList = taskList.filter(item => item.id !== id);
        localStorage.setItem(itemKey, JSON.stringify(newTaskList));

    }


})

