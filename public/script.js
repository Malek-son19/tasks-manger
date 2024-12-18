import Task from "../models/task";

const displayTasks = async () => {
    try{
        const response = await fetch('/tasks');
        const tasks = await response.json();

        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};
displayTasks();