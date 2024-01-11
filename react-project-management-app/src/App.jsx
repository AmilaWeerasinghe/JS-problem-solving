import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/project-view/AddProject";
import Startup from "./components/Startup";
import SelectedProject from "./components/project-view/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  })

  const onAddProjectClick = () =>{
    setProjectState((prevProjectState) => {
      return({
        ...prevProjectState,
        selectedProjectId : null,
      }
      )
    })
  }

  const handleAddSave = (title,description,dueDate) => {
    setProjectState((prevState) => {
      const newProject = {
        title,
        description,
        dueDate,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return({
        ...prevState,
        selectedProjectId:id
      })
    })
  }

  const handleDeleteProject = (id) => {
    setProjectState((prevState) => {
      return({
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== id),
        selectedProjectId: undefined
      })
    })
  }

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text,
        projectId: prevState.selectedProjectId
      }
      return({
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      })
    })

  }

  const handleDeleteTask = (id) => {
    setProjectState((prevState) =>{
      return({
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      })
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={onAddProjectClick} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {projectState && projectState.selectedProjectId === undefined && <Startup onCreateProject={onAddProjectClick}/>}
      {projectState && projectState.selectedProjectId === null && <AddProject onSave ={handleAddSave} onCancel={handleCancel}/>}
      {projectState && (projectState.selectedProjectId !== null && projectState.selectedProjectId !== undefined) && <SelectedProject project={projectState.projects.find((project) => project.id === projectState.selectedProjectId)} onDelete={handleDeleteProject} onTaskAdd={handleAddTask} onTaskDelete={handleDeleteTask} tasks={projectState.tasks}/>}
    </main>
  );
}

export default App;
