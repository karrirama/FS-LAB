// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// Update task counter
function updateCounter() {
  taskCount.textContent = taskList.children.length;
}


// Add a new task
function addTask() {

  const taskText = taskInput.value.trim();

  // Check for empty input
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }


  // Create list item
  const li = document.createElement("li");


  // Create task text
  const span = document.createElement("span");

  span.textContent = taskText;


  // Create delete button
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";


  // Mark task as completed
  span.addEventListener("click", function () {

    li.classList.toggle("completed");

  });


  // Delete task
  deleteButton.addEventListener("click", function () {

    li.remove();

    updateCounter();

  });


  // Add elements to list item
  li.appendChild(span);
  li.appendChild(deleteButton);


  // Add list item to DOM
  taskList.appendChild(li);


  // Clear input
  taskInput.value = "";

  taskInput.focus();


  // Update counter
  updateCounter();
}


// Add task when button is clicked
addButton.addEventListener("click", addTask);


// Add task when Enter key is pressed
taskInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    addTask();
  }

});