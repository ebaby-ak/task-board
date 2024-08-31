// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) 1;

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $(`
    <div class="card mb-2 task-card" data-id="${id}">
         <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <p class="card-text"><small class="text-muted">Due: ${task.dueDate}</small></p>
            <button type="button" class="btn btn-danger delete-task-btn">Delete</button>
         </div>
    </div>
    `);

    const today = dayjs();
    const dueDate = dayjs(task.dueDate);
    if (dueDate.isBefore(today)) {
      taskCard.addClass('bg-alert');
    } else if (today.isAfter(dueDate)) {
      taskCard.addClass('bg-warning');
    }

  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
$('#todo-cards').empty();
$('#in-progress-cards').empty();
$('#done-cards').empty();

taskList.forEach(task => {
  const taskCard = createTaskCard(task);
  $(`#${task.status}-cards`).append(taskCard);
});

$('.task-card').draggable({
  revert: 'invalid',
  helper: 'clone'
});

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
