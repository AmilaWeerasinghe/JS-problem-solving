import { useState } from "react";
import SideBar from "./components/SideBar";
import AddProject from "./components/AddProject";
import ProjectHeader from "./components/project-view/ProjectHeader";
import TaskList from "./components/project-view/TaskList";
import Startup from "./components/Startup";

function App() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showProctDetails , setShowProjectDetails] = useState(false);

  const onAddProjectClick = () =>{
    setShowAddProject(true);
  }

  const onProjecSelect = () => {
    setShowAddProject(false);

  }
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <Startup onCreateProject={onAddProjectClick}/>
      <SideBar onAddProject={onAddProjectClick}/>
      {showAddProject && <AddProject/>}
      <section>
        <ProjectHeader/>
        <TaskList/>
      </section>
    </>
  );
}

export default App;
