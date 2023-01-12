const toDoList = document.querySelector(".toDo-container");
const input = document.createElement("input");
const button = document.createElement("button",);
const check = document.createElement("input");
const list = document.createElement("ul");

// Load the current To Do list from a file
fetch("todo.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            let listItem = document.createElement("li");
            listItem.innerHTML = todo;
            list.appendChild(listItem);
        });
    });
check.type = "checkbox";
input.placeholder = "Enter a new To Do";
button.innerHTML = "Add";
toDoList.appendChild(list);
toDoList.appendChild(input);
toDoList.appendChild(button);


// Add a new To Do when the button is clicked
button.addEventListener("click", () => {
    if (input.value === "") return;
    let listItem = document.createElement("li");
    listItem.innerHTML = input.value;
    list.appendChild(listItem);
    input.value = "";

    // Automatically save the updated To Do list to the localstorage
    let todos = Array.from(list.children).map(item => item.innerHTML);
    localStorage.setItem("todos", JSON.stringify(todos));
});
