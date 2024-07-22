/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project_generator.js":
/*!**********************************!*\
  !*** ./src/project_generator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProject);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_generator */ "./src/project_generator.js");


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
        (0,_project_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
            (0,_project_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName); // Assuming loadProject can take a project name
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
    
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWebsite);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");

(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUNkb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFXLGVBQWU7QUFDdEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWUsYUFBYTs7Ozs7O1VDNUhoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05zQztBQUN0QyxvREFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0X2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9teS10by1kby1saXN0Ly4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vbXktdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBcIlRhc2sgTGlzdFwiO1xyXG4gIFxyXG4gICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3QoKXtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFByb2plY3Q7IiwiaW1wb3J0IGxvYWRQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RfZ2VuZXJhdG9yXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xyXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xyXG4gICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XHJcbiAgICBjb25zdCBleGFtcGxlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZXhhbXBsZVByb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xyXG4gICAgZXhhbXBsZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgICBleGFtcGxlUHJvamVjdC50ZXh0Q29udGVudCA9IFwiRXhhbXBsZSBQcm9qZWN0XCI7XHJcbiAgICBleGFtcGxlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGV4YW1wbGVQcm9qZWN0KTtcclxuICAgICAgICBsb2FkUHJvamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0XCIpO1xyXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIG5ldyBwcm9qZWN0XCI7XHJcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0KTtcclxuICAgXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZXhhbXBsZVByb2plY3QpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIHJldHVybiBzaWRlYmFyO1xyXG59XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHVmdWtjZW1jYWtpcmA7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS91ZnVrY2VtY2FraXJcIjtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiKTtcclxuICAgICAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XHJcbiAgICAgIFxyXG4gICAgICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICAgICAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcclxuICAgICAgICByZXR1cm4gbWFpbjtcclxuICAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ1dHRvblwiKTtcclxuICAgICAgXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsT3V0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLW91dGVyXCIpO1xyXG4gICAgICAgIG1vZGFsT3V0ZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWlubmVyXCIpO1xyXG4gICAgICAgIG1vZGFsLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XHJcbiAgICBcclxuICAgICAgICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBcIlBsZWFzZSB3cml0ZSB5b3VyIHByb2plY3QgbmFtZTpcIjtcclxuICAgICAgICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbW9kYWxOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIG1vZGFsTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInAtbmFtZVwiKTtcclxuICAgICAgICBtb2RhbE5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInAtbmFtZVwiKTtcclxuICAgICAgICBjb25zdCBtb2RhbFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgbW9kYWxTdWJtaXQuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcclxuICAgICAgICBtb2RhbFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgICAgICAgbW9kYWxTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAtbmFtZVwiKS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbE91dGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIG1vZGFsIGNvbnRlbnRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgcHJvamVjdCBuYW1lLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbE5hbWUpO1xyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICAgIHByb2plY3RMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XHJcbiAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKHByb2plY3RMaW5rKTtcclxuICAgICAgICAgICAgbG9hZFByb2plY3QocHJvamVjdE5hbWUpOyAvLyBBc3N1bWluZyBsb2FkUHJvamVjdCBjYW4gdGFrZSBhIHByb2plY3QgbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gSW5zZXJ0IHRoZSBuZXcgcHJvamVjdCBsaW5rIGJlZm9yZSB0aGUgXCJDcmVhdGUgbmV3IHByb2plY3RcIiBidXR0b25cclxuICAgICAgICBzaWRlYmFyLmluc2VydEJlZm9yZShwcm9qZWN0TGluaywgbmV3UHJvamVjdEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBjcmVhdGVXZWJzaXRlKCl7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXIoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjcmVhdGVXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xyXG5jcmVhdGVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9