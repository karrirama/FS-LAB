// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Function to update empty message
function updateEmptyMessage() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

}
// Function to add a new task
function addTask() {

    // Get the value entered by the user

    const taskText = taskInput.value.trim();


    // Check if input is empty

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create a new list item

    const li = document.createElement("li");

    li.classList.add("task-item");


    // Create span for task text

    const span = document.createElement("span");

    span.classList.add("task-text");

    span.textContent = taskText;


    // Create Complete button

    const completeBtn = document.createElement("button");

    completeBtn.textContent = "Complete";

    completeBtn.classList.add("complete-btn");


    // Create Delete button

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Add elements to list item

    li.appendChild(span);

    li.appendChild(completeBtn);

    li.appendChild(deleteBtn);


    // Add list item to task list

    taskList.appendChild(li);


    // Clear input box

    taskInput.value = "";


    // Put cursor back in input box

    taskInput.focus();


    // Complete button event listener

    completeBtn.addEventListener("click", function () {

        span.classList.toggle("completed");

    });


    // Delete button event listener

    deleteBtn.addEventListener("click", function () {

        li.remove();

        updateEmptyMessage();

    });


    // Update empty message

    updateEmptyMessage();
}


// Add click event to Add Task button

addTaskBtn.addEventListener("click", addTask);


// Allow Enter key to add a task

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// Display empty message when page loads

updateEmptyMessage();