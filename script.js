// ================================
// SELECTING ELEMENTS FROM DOM
// ================================

// Get input field
const taskInput = document.getElementById("taskInput");

// Get add button
const addTaskBtn = document.getElementById("addTaskBtn");

// Get task list container
const taskList = document.getElementById("taskList");

// Get filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Get date value
const dateInput = document.getElementById("dateInput");

// Track the active filter
let currentFilter = "all";


// ================================
// FILTER FUNCTION
// ================================

function applyFilter() {
    const tasks = taskList.querySelectorAll(".task-item");

    tasks.forEach(function (task) {
        const isCompleted = task.classList.contains("completed");

        if (currentFilter === "all") {
            task.style.display = "flex";
        } else if (currentFilter === "completed") {
            task.style.display = isCompleted ? "flex" : "none";
        } else {
            task.style.display = isCompleted ? "none" : "flex";
        }
    });
}


// ================================
// ADD TASK FUNCTION
// ================================

function addTask() {

    // Get the text entered by the user
    const taskText = taskInput.value.trim();

    // Get the date entered by the user
    const dueDate = dateInput.value;

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item (li)
    const li = document.createElement("li");

    // Add class for styling
    li.classList.add("task-item");

    // Create a container to store and display task information (text and due date)
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-info");

    // Create span to hold task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create a small element for the date
    const dateDisplay = document.createElement("small");
    dateDisplay.classList.add("due-date");
    dateDisplay.textContent = dueDate ? `Due: ${dueDate}` : "No date";
    taskDetails.appendChild(span);
    taskDetails.appendChild(dateDisplay);

    // Toggle completed class when clicking task text
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
        applyFilter();
    });

    // Create complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    // Mark task as completed when complete button is clicked
    completeBtn.addEventListener("click", function () {
        li.classList.add("completed");
        applyFilter();
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Remove task when delete button is clicked
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        applyFilter();
    });

    // Add details container and action buttons
    li.appendChild(taskDetails);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(li);

    // Ensure newly added task respects active filter
    applyFilter();

    // Clear input fields after adding task
    taskInput.value = "";
    dateInput.value = "";
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

// Switch filters
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        applyFilter();
    });
});
