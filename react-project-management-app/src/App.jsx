import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import ProjectHeader from "./components/project-view/ProjectHeader";
import TaskList from "./components/project-view/TaskList";
import Startup from "./components/Startup";

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
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectState)
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onAddProject={onAddProjectClick}/>
      {projectState && projectState.selectedProjectId === undefined && <Startup onCreateProject={onAddProjectClick}/>}
      {projectState && projectState.selectedProjectId === null && <AddProject onSave ={handleAddSave}/>}
      <section>
        <ProjectHeader/>
        <TaskList/>
      </section>
    </main>
  );
}

export default App;
