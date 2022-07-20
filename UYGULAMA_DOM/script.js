
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeletAll');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);

    taskList.addEventListener('click', deleteItem);

    btnDeletAll.addEventListener('click', deleteAllItems);
}


function addNewItem(e) {

    if (input.value === '') {
        alert('add new item');
    }


    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    li.appendChild(a);
    taskList.appendChild(li);
    input.value = '';



    e.preventDefault();

}

function deleteItem(e) {
    if (e.target.className === 'fa-solid fa-xmark') {
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}
function deleteAllItems(e) {

    if (prompt('Are you sure?')) {

        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }

    //taskList.innerHTML = '';

    e.preventDefault();
}