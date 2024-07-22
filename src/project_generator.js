function createProject() {
    const project = document.createElement("div");
    project.classList.add("project");
    project.textContent = "Task List";
  
    return project;
  }

function loadProject(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createProject());
}

export default loadProject;