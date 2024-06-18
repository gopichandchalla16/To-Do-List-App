// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Grab references to the input, button, and list elements
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
  
    // Function to create a new task item
    function createTask(taskText) {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
  
      const taskTextElement = document.createElement('span');
      taskTextElement.className = 'task-text';
      taskTextElement.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-task-button';
      deleteButton.textContent = 'Delete';
  
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(taskTextElement);
      listItem.appendChild(deleteButton);
  
      return listItem;
    }
  
    // Function to add a task to the list
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const newTask = createTask(taskText);
        taskList.appendChild(newTask);
        taskInput.value = ''; // Clear the input field
      } else {
        alert('Please enter a task!');
      }
    }
  
    // Add event listener to the button to add tasks
    addTaskButton.addEventListener('click', addTask);
  
    // Add event listener to the input to add tasks when pressing Enter
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });