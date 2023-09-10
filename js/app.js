const db = {
    data: [],
    readAll: function() {
        console.log('Returning all data: ', this.data);
        return data;
    },
    newTaskInput: function(name) {
        const newTask = this._createTask(name);
        this.data.push(newTask);
        return newTask;
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
    checkBoxLabel.textContent = ' ' + task.name;
    checkBoxLabel.htmlFor = task;
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

form.addEventListener('submit', handleSubmit);