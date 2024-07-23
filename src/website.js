import loadProject from "./project_generator";

function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
 
  const title = document.createElement("h2");
  title.textContent = "Projects";

  const projectList = document.createElement("div");
  projectList.classList.add("project-list");

  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.forEach(projectName => {
    const projectButtonContainer = createProjectButton(projectName);
    const projectButton = projectButtonContainer.querySelector('.project-button');
    projectButton.addEventListener("click", () => {
      if (!projectButton.classList.contains("active")) {
        setActiveButton(projectButton);
        loadProject(projectName);
      }
    });
    projectList.appendChild(projectButtonContainer);
  });

  const newProject = document.createElement("button");
  newProject.classList.add("new-project-button");
  newProject.textContent = "Create new project";
  newProject.addEventListener("click", () => handleProject(projectList));

  sidebar.appendChild(title);
  sidebar.appendChild(projectList);
  sidebar.appendChild(newProject);
  
  return { sidebar, projectList };
}

function createProjectButton(projectName) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("project-button-container");

  const button = document.createElement("button");
  button.classList.add("project-button");
  button.textContent = projectName;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-project-button");
  removeButton.textContent = "X";
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    removeProject(projectName, buttonContainer);
  });

  buttonContainer.appendChild(button);
  buttonContainer.appendChild(removeButton);

  return buttonContainer;
}

function removeProject(projectName, buttonContainer) {
  if (confirm(`Are you sure you want to remove the project "${projectName}"?`)) {
    buttonContainer.remove();

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const updatedProjects = projects.filter(p => p !== projectName);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));

    localStorage.removeItem(`tasks_${projectName}`);

    const lastActiveProject = localStorage.getItem('lastActiveProject');
    if (lastActiveProject === projectName) {
      localStorage.removeItem('lastActiveProject');
      document.getElementById('main').innerHTML = '';
    }
  }
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} ufukcemcakir`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ufukcemcakir";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab", "fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";
  return main;
}

function setActiveButton(button) {
  document.querySelectorAll(".project-button").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}

function handleProject(projectList) {
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modalContent.innerHTML = `
    <button class="close-modal">&times;</button>
    <h3>Create New Project</h3>
    <input type="text" id="p-name" name="p-name" placeholder="Project name">
    <button id="add-project-button">Add Project</button>
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

  const addProjectButton = modalContent.querySelector('#add-project-button');
  const projectNameInput = modalContent.querySelector('#p-name');

  addProjectButton.addEventListener("click", () => {
    const projectName = projectNameInput.value.trim();
    if (projectName) {
      addProject(projectName, projectList);
      closeModal();
    } else {
      alert("Please enter a project name.");
    }
  });
}

function addProject(projectName, projectList) {
  const newProjectButtonContainer = createProjectButton(projectName);
  const newProjectButton = newProjectButtonContainer.querySelector('.project-button');
  newProjectButton.addEventListener("click", () => {
    if (!newProjectButton.classList.contains("active")) {
      setActiveButton(newProjectButton);
      loadProject(projectName);
    }
  });

  projectList.appendChild(newProjectButtonContainer);
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push(projectName);
  localStorage.setItem('projects', JSON.stringify(projects));
}

function createWebsite() {
  const content = document.getElementById("content");
  const { sidebar, projectList } = createSidebar();
  content.appendChild(sidebar);
  content.appendChild(createMain());
  document.body.appendChild(createFooter());

  window.projectList = projectList;
  const lastActiveProject = localStorage.getItem('lastActiveProject');
  if (lastActiveProject) {
    loadProject(lastActiveProject);
    const projectButton = document.querySelector(`.project-button[data-name="${lastActiveProject}"]`);
    if (projectButton) {
      setActiveButton(projectButton);
    }
  }
}

export default createWebsite;