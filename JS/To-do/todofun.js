function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

    if (taskText === '') {
        return; 
    }

    var li = document.createElement('li');
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    var completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.onclick = function() {
        li.classList.toggle('completed');
    };

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.onclick = function() {
        li.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(removeButton);

    var ul = document.getElementById('taskList');
    ul.appendChild(li);

    input.value = '';
}

var addButton = document.getElementById('addTaskButton');
addButton.onclick = addTask;
