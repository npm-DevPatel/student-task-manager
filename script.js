// ================================
// SELECT DOM ELEMENTS
// ================================

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const priorityInput = document.getElementById("priorityInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");
const darkModeToggle = document.getElementById("darkModeToggle");

let currentFilter = "all";

// ================================
// LOCAL STORAGE FUNCTIONS
// ================================

// Save all tasks to localStorage
function saveTasks() {
    const tasks = [];

    document.querySelectorAll(".task-item").forEach(task => {
        const priorityBadge = task.querySelector(".priority-badge");
        tasks.push({
            text: task.querySelector("span").textContent,
            date: task.querySelector(".due-date").textContent.replace("Due: ", ""),
            priority: priorityBadge ? priorityBadge.dataset.priority : "medium",
            completed: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage on page load
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => {
        createTask(task.text, task.date === "No date" ? "" : task.date, task.completed, task.priority || "medium");
    });
}

// ================================
// CREATE TASK FUNCTION (Reusable)
// ================================

function createTask(text, dueDate, completed = false, priority = "medium") {

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.classList.add(`priority-${priority}`);
    if (completed) li.classList.add("completed");

    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-info");

    const span = document.createElement("span");
    span.textContent = text;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("priority-badge");
    priorityBadge.dataset.priority = priority;
    priorityBadge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    const dateDisplay = document.createElement("small");
    dateDisplay.classList.add("due-date");
    dateDisplay.textContent = dueDate ? `Due: ${dueDate}` : "No date";

    taskDetails.appendChild(span);
    taskDetails.appendChild(dateDisplay);
    taskDetails.appendChild(priorityBadge);

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
        applyFilter();
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
        li.classList.add("completed");
        saveTasks();
        applyFilter();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
        applyFilter();
    });

    li.appendChild(taskDetails);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    applyFilter();
}

// ================================
// ADD TASK
// ================================

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dateInput.value;
    const priority = priorityInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(taskText, dueDate, false, priority);
    saveTasks();

    taskInput.value = "";
    dateInput.value = "";
    priorityInput.value = "medium";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});

// ================================
// FILTERING
// ================================

function applyFilter() {
    document.querySelectorAll(".task-item").forEach(task => {
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

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        applyFilter();
    });
});

// ================================
// DARK MODE
// ================================

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// ================================
// INITIAL LOAD
// ================================

loadTasks();
