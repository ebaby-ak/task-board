# Task Board


## User Story

```md
AS A project team member with multiple tasks to organize
I WANT a task board 
SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly
```

## Acceptance Criteria

```md
GIVEN a task board to manage a project
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist
```

# Overview

The user is provided with starter code to build out a task board that allows any user to organize multiple tasks. The first step is to create a modal in html using bootstrap so that when a user selects the "add task" button, a form is populated with fields for title, due date, and description of the task. Next the user will need to create functions in JavaScript to create task cards, make the task cards render and draggable, handle adding a new task, handle deleting a task, handle dropping a task into different status lanes, and rendering the task list.

# Expectation
A user can expect that the final deployment to allow them to create a task upon clicking the "add task" button. The task will be populated under the "To Do" lane and will be draggable to other lanes, upon status change, and can be deleted once completed.