import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import ProjectHeader from "./components/project-view/ProjectHeader";
import TaskList from "./components/project-view/TaskList";
import Startup from "./components/Startup";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showProctDetails , setShowProjectDetails] = useState(false);
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
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

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={onAddProjectClick} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {projectState && projectState.selectedProjectId === undefined && <Startup onCreateProject={onAddProjectClick}/>}
      {projectState && projectState.selectedProjectId === null && <AddProject onSave ={handleAddSave} onCancel={handleCancel}/>}
      {projectState && (projectState.selectedProjectId !== null && projectState.selectedProjectId !== undefined) && <SelectedProject project={projectState.projects.find((project) => project.id === projectState.selectedProjectId)} onDelete={handleDeleteProject}/>}
      <section>
        <ProjectHeader/>
        <TaskList/>
      </section>
    </main>
  );
}

export default App;
