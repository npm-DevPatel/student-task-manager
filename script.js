// ================================
// SELECTING ELEMENTS FROM DOM
// ================================

// Get input field
const taskInput = document.getElementById("taskInput");

// Get add button
const addTaskBtn = document.getElementById("addTaskBtn");

// Get task list container
const taskList = document.getElementById("taskList");


// ================================
// ADD TASK FUNCTION
// ================================

function addTask() {

    // Get the text entered by the user
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item (li)
    const li = document.createElement("li");

    // Add class for styling
    li.classList.add("task-item");

    // Create span to hold task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Toggle completed class when clicking task text
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Remove task when delete button is clicked
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Append span and button inside list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
}


// ================================
// EVENT LISTENERS
// ================================

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Also allow pressing "Enter" key to add task
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
