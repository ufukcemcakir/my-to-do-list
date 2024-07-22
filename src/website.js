import loadProject from "./project_generator";

function createSidebar() {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
   
    const title = document.createElement("h2");
    title.textContent = "Projects";
    const exampleProject = document.createElement("a");
    exampleProject.classList.add("sidebar-button");
    exampleProject.setAttribute("href", "#");
    exampleProject.textContent = "Example Project";
    exampleProject.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(exampleProject);
        loadProject();
    });
    const newProject = document.createElement("button");
    newProject.classList.add("new-project");
    newProject.textContent = "Create new project";
    newProject.addEventListener("click", handleProject);
   
    sidebar.appendChild(title);
    sidebar.appendChild(exampleProject);
    sidebar.appendChild(newProject);
    return sidebar;
}

    function createFooter() {
        const footer = document.createElement("footer");
        footer.classList.add("footer");
      
        const copyright = document.createElement("p");
        copyright.textContent = `Copyright © ${new Date().getFullYear()} ufukcemcakir`;
      
        const githubLink = document.createElement("a");
        githubLink.href = "https://github.com/ufukcemcakir";
      
        const githubIcon = document.createElement("i");
        githubIcon.classList.add("fab");
        githubIcon.classList.add("fa-github");
      
        githubLink.appendChild(githubIcon);
        footer.appendChild(copyright);
        footer.appendChild(githubLink);
      
        return footer;
      }

    function createMain() {
        const main = document.createElement("main");
        main.classList.add("main");
        main.setAttribute("id", "main");
        return main;
      }

    function setActiveButton(button) {
        const buttons = document.querySelectorAll(".sidebar-button");
      
        buttons.forEach((button) => {
          if (button !== this) {
            button.classList.remove("active");
          }
        });
      
        button.classList.add("active");
      }

      function handleProject() {
        const modalOuter = document.getElementById("modal-outer");
        modalOuter.classList.add("open");
        const modal = document.getElementById("modal-inner");
        modal.innerHTML = ''; // Clear existing content
    
        const modalText = document.createElement("p");
        modalText.textContent = "Please write your project name:";
        const modalName = document.createElement("input");
        modalName.setAttribute("type", "text");
        modalName.setAttribute("id", "p-name");
        modalName.setAttribute("name", "p-name");
        const modalSubmit = document.createElement("button");
        modalSubmit.classList.add("new-project-button");
        modalSubmit.textContent = "Add";
        modalSubmit.addEventListener("click", () => {
            const projectName = document.getElementById("p-name").value.trim();
            if (projectName) {
                addProject(projectName);
                modalOuter.classList.remove("open");
                modal.innerHTML = ''; // Clear modal content
            } else {
                alert("Please enter a project name.");
            }
        });
    
        modal.appendChild(modalText);
        modal.appendChild(modalName);
        modal.appendChild(modalSubmit);
    }

    function addProject(projectName) {
        const sidebar = document.querySelector(".sidebar");
        const newProjectButton = document.querySelector(".new-project");
    
        const projectLink = document.createElement("a");
        projectLink.classList.add("sidebar-button");
        projectLink.setAttribute("href", "#");
        projectLink.textContent = projectName;
        projectLink.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActiveButton(projectLink);
            loadProject(projectName); // Assuming loadProject can take a project name
        });
    
        // Insert the new project link before the "Create new project" button
        sidebar.insertBefore(projectLink, newProjectButton);
    }

      function createWebsite(){
        const content = document.getElementById("content");
        content.appendChild(createSidebar());
        content.appendChild(createMain());
        document.body.appendChild(createFooter());
    }
    
    export default createWebsite;