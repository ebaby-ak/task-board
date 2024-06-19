// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');

  const titleElement = document.createElement('h3');
  titleElement.textContent = task.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = task.description;

  const deadlineElement = document.createElement('p');
  deadlineElement.textContent = `Deadline: ${task.deadline}`;

  taskCard.appendChild(titleElement);
  taskCard.appendChild(descriptionElement);
  taskCard.appendChild(deadlineElement);

  const taskContainer = document.getElementById('task-container');
  taskContainer.appendChild(taskCard);
}

createTaskCard(task);

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
const taskListContainer = document.getElementById('task-list');

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  taskCard.setAttribute('draggable', 'true');
  taskCard.setAttribute('data-task-index', index);

  taskCard.textContent = task.title;

  taskCard.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', index);
  });

  taskListContainer.appendChild(taskCard);

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();

  const title = $('#taskTitle').val();
  const dueDate = $('#taskDueDate').val();
  const description = $('#taskDescription').val();

  if (title && dueDate && description) {
    const newTask = {
      id: generateTaskId(),
      title: title,
      dueDate: dueDate,
      description: description,
      status: 'to-do'
    };

    taskList.push(newTask);
    renderTaskList();
    $('#formModal').modal('show');
    $('#taskForm')[0].reset();

    localStorage.setItem("task", JSON.stringify(taskList));
    localStorage.setItem("nextId", JSON.stringify(nextId));
  }
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList();
});
