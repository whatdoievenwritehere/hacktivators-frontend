document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        // Create a new list item
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        // Append the delete button to the new list item
        newTask.appendChild(deleteButton);

        // Append the new list item to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
});
