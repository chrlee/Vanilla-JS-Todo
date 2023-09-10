const db = {
    data: [],
    readAll: function() {
        console.log('Returning all data: ', this.data);
        return data;
    },
    newToDoInput: function(name) {
        this.data.push(this._createToDoItem(name));
        console.log(this.data);
    },
    _createToDoItem: function(name) {
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
    checkBoxLabel.textContent = ' ' + task;
    checkBoxLabel.htmlFor = task;
    taskItem.appendChild(checkBox);
    taskItem.appendChild(checkBoxLabel)
    taskList.appendChild(taskItem);
}

function handleSubmit(event) {
    event.preventDefault();
    const taskName = form.querySelector('#taskName').value;
    db.newToDoInput(taskName);
    form.reset();

    createTaskListItem(taskName);
    return false;
}

form.addEventListener('submit', handleSubmit);