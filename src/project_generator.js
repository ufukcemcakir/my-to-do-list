export default loadProject;

import { format } from 'date-fns';

function loadProject(projectName) {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const projectTitle = document.createElement('h2');
  projectTitle.textContent = projectName;
  main.appendChild(projectTitle);

  const addTaskButton = document.createElement('button');
  addTaskButton.textContent = 'Add Task';
  addTaskButton.addEventListener('click', () => showAddTaskModal(main, projectName));
  main.appendChild(addTaskButton);

  const statusSections = ['to-do', 'doing', 'done'];
  const sectionContainers = {};

  statusSections.forEach(status => {
    const section = document.createElement('div');
    section.classList.add('status-section');
    
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    section.appendChild(sectionTitle);

    const taskList = document.createElement('ul');
    taskList.classList.add('task-list');
    taskList.id = `${status}-list`;
    section.appendChild(taskList);

    main.appendChild(section);
    sectionContainers[status] = taskList;
  });

  const tasks = JSON.parse(localStorage.getItem(`tasks_${projectName}`)) || [];
  tasks.forEach(taskData => {
    addTaskToList(sectionContainers[taskData.status] || sectionContainers['to-do'], taskData, projectName);
  });

  localStorage.setItem('lastActiveProject', projectName);
}

function showAddTaskModal(taskList, projectName) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modalContent.innerHTML = `
    <button class="close-modal">&times;</button>
    <h3>Add New Task</h3>
    <input type="text" id="task-title" placeholder="Title">
    <textarea id="task-description" placeholder="Description"></textarea>
    <input type="date" id="task-due-date">
    <select id="task-priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <select id="task-status">
      <option value="to-do">To-Do</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
    <button id="save-task">Save Task</button>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    document.body.removeChild(modalOverlay);
  };

  modalOverlay.querySelector('.close-modal').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  const saveTaskButton = document.getElementById('save-task');
  saveTaskButton.addEventListener('click', () => {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.getElementById('task-status').value;

    if (title && dueDate) {
      const taskData = { title, description, dueDate, priority, status };
      addTask(projectName, taskData);
      closeModal();
      loadProject(projectName);
    } else {
      alert('Title and due date are required!');
    }
  });
}

function addTask(projectName, taskData) {
  const tasks = JSON.parse(localStorage.getItem(`tasks_${projectName}`)) || [];
  tasks.push(taskData);
  localStorage.setItem(`tasks_${projectName}`, JSON.stringify(tasks));
}

function addTaskToList(taskList, taskData, projectName) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item', taskData.priority);
  
  const taskHeader = document.createElement('div');
  taskHeader.classList.add('task-header');
  
  const taskTitle = document.createElement('span');
  taskTitle.textContent = taskData.title;
  taskTitle.classList.add('task-title');
  
  const taskDate = document.createElement('span');
  taskDate.textContent = format(new Date(taskData.dueDate), 'MMM d, yyyy');
  taskDate.classList.add('task-date');
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showTaskDetails(taskData, taskItem, projectName);
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    removeTask(projectName, taskData);
    taskList.removeChild(taskItem);
  });

  taskHeader.appendChild(taskTitle);
  taskHeader.appendChild(taskDate);
  taskHeader.appendChild(editButton);
  taskHeader.appendChild(removeButton);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = taskData.description;
  taskDescription.style.display = 'none';

  taskItem.appendChild(taskHeader);
  taskItem.appendChild(taskDescription);

  taskItem.addEventListener('click', () => {
    taskDescription.style.display = taskDescription.style.display === 'none' ? 'block' : 'none';
  });

  taskList.appendChild(taskItem);
}

function showTaskDetails(taskData, taskItem, projectName) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modalContent.innerHTML = `
    <button class="close-modal">&times;</button>
    <h3>Edit Task</h3>
    <input type="text" id="edit-title" value="${taskData.title}">
    <textarea id="edit-description">${taskData.description}</textarea>
    <input type="date" id="edit-due-date" value="${taskData.dueDate}">
    <select id="edit-priority">
      <option value="low" ${taskData.priority === 'low' ? 'selected' : ''}>Low</option>
      <option value="medium" ${taskData.priority === 'medium' ? 'selected' : ''}>Medium</option>
      <option value="high" ${taskData.priority === 'high' ? 'selected' : ''}>High</option>
    </select>
    <select id="edit-status">
      <option value="to-do" ${taskData.status === 'to-do' ? 'selected' : ''}>To-Do</option>
      <option value="doing" ${taskData.status === 'doing' ? 'selected' : ''}>Doing</option>
      <option value="done" ${taskData.status === 'done' ? 'selected' : ''}>Done</option>
    </select>
    <button id="save-changes">Save Changes</button>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    document.body.removeChild(modalOverlay);
  };

  modalOverlay.querySelector('.close-modal').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.getElementById('save-changes').addEventListener('click', () => {
    const newStatus = document.getElementById('edit-status').value;
    const oldStatus = taskData.status;

    taskData.title = document.getElementById('edit-title').value;
    taskData.description = document.getElementById('edit-description').value;
    taskData.dueDate = document.getElementById('edit-due-date').value;
    taskData.priority = document.getElementById('edit-priority').value;
    taskData.status = newStatus;

    updateTaskInStorage(projectName, taskData);
    closeModal();

    if (oldStatus !== newStatus) {
      loadProject(projectName);
    } else {
      updateTaskDisplay(taskItem, taskData);
    }
  });
}

function updateTaskDisplay(taskItem, taskData) {
  taskItem.className = `task-item ${taskData.priority}`;
  taskItem.querySelector('.task-title').textContent = taskData.title;
  taskItem.querySelector('.task-date').textContent = format(new Date(taskData.dueDate), 'MMM d, yyyy');
  taskItem.querySelector('.task-description').textContent = taskData.description;
}

function updateTaskInStorage(projectName, updatedTaskData) {
  const tasks = JSON.parse(localStorage.getItem(`tasks_${projectName}`)) || [];
  const taskIndex = tasks.findIndex(task => task.title === updatedTaskData.title);
  if (taskIndex !== -1) {
      tasks[taskIndex] = updatedTaskData;
      localStorage.setItem(`tasks_${projectName}`, JSON.stringify(tasks));
  }
}

function removeTask(projectName, taskData) {
  const tasks = JSON.parse(localStorage.getItem(`tasks_${projectName}`)) || [];
  const updatedTasks = tasks.filter(task => task.title !== taskData.title);
  localStorage.setItem(`tasks_${projectName}`, JSON.stringify(updatedTasks));
}