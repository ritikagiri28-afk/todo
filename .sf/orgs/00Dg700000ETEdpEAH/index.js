const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");
let nextTaskId = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = input.value.trim();
    if (!task) return;

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const removeButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.id = `todo-${nextTaskId++}`;
    label.textContent = task;
    label.htmlFor = checkbox.id;
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove task: ${task}`);
    removeButton.addEventListener("click", () => {
        item.remove();
        emptyMessage.hidden = list.children.length > 0;
    });

    item.append(checkbox, label, removeButton);
    list.append(item);
    input.value = "";
    emptyMessage.hidden = true;
    input.focus();
});