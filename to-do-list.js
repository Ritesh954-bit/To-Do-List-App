// Get elements
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDueDate = taskDate.value;

    if(taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Task text and date
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText + (taskDueDate ? ` (Due: ${taskDueDate})` : '');
    li.appendChild(taskSpan);

    // Complete task on click
    taskSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button with confirmation popup
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm('Are you sure you want to delete this task?');
        if(confirmDelete) {
            li.remove();
        }
    });

    li.appendChild(deleteBtn);

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    taskDate.value = '';
}

// Add task button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') addTask();
});
