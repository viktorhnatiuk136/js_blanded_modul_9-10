
export function markupItem (obj) {
    return `<li class="task-list-item" data-id=${obj.id}>
      <button class="task-list-item-btn">Delete</button>
      <h3>${obj.taskName}</h3>
      <p>${obj.taskDescription}</p>
  </li>`
};

export function markupList(array) { 
  return array.map(markupItem).join("");
}