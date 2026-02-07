

export function markupItem (obj) {
    return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${obj.taskName}</h3>
      <p>${obj.taskDescription}</p>
  </li>`
};

