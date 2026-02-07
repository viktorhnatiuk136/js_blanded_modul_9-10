import refs from "./refs";
import { markupItem } from "./markup-tasks";

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskObj = {
        taskName: "",
        taskDescription: ""
    };
    taskObj.taskName = event.target.elements.taskName.value;
    taskObj.taskDescription = event.target.elements.taskDescription.value;

    console.log(taskObj);

    refs.list.insertAdjacentHTML("beforeend", markupItem(taskObj));
    refs.form.reset(); 
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const taskName = event.target.elements.taskName.value;
//   const taskDescription = event.target.elements.taskDescription.value;

//   const newTask = {
//     name: taskName,
//     description: taskDescription,
//   };
//   console.log(newTask);
// })




