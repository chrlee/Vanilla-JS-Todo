const db = {
    data: {},
    readAll: function() {
        console.log('Returning all data: ', this.data);
        return this.data;
    },
    newTaskInput: function(name) {
        const newTask = this._createTask(name);
        this.data[newTask.id] = newTask.name;
        return newTask;
    },
    completeTask: function(taskId) {
        delete this.data[taskId];
    },
    _createTask: function(name) {
        return {
            id: crypto.randomUUID(),
            name: name,
        }
    }
};
const form = document.querySelector('#inputForm');
const taskList = document.querySelector('#taskList');

function createTaskListItem(task) {
    const taskItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const checkBoxLabel = document.createElement('label');

    checkBox.type = 'checkbox';
    checkBox.id = task.id;
    checkBox.onchange = handleCheckBoxChange;
    checkBoxLabel.textContent = ' ' + task.name;
    checkBoxLabel.htmlFor = task.id;

    taskItem.appendChild(checkBox);
    taskItem.appendChild(checkBoxLabel)
    taskList.appendChild(taskItem);
}

function handleSubmit(event) {
    event.preventDefault();
    const taskName = form.querySelector('#taskName').value;
    const newTask = db.newTaskInput(taskName);
    form.reset();

    createTaskListItem(newTask);
    return false;
}

function handleCheckBoxChange(event) {
    event.preventDefault();
    const taskItem = event.target;
    db.completeTask(taskItem.id);
    taskItem.parentNode.remove();
    db.readAll();
}

form.addEventListener('submit', handleSubmit);