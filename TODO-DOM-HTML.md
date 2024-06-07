// Get references to the input, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item for the task
        const listItem = document.createElement('li');

        // Create a checkbox for the task
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create a label for the task text
        const label = document.createElement('label');
        label.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Add event listener to remove the task when the remove button is clicked
        removeButton.addEventListener('click', function () {
            listItem.remove();
        });

        // Append the checkbox, label, and remove button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = '';
    }
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addTask);

// Add event listener to the input field to also handle Enter key press
taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
});
