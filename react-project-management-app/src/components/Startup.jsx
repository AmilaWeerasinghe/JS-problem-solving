const Startup = ({onCreateProject}) => {
    return(
        <section>
            <img className=" " src='src/assets/no-projects.png' alt="project title image"/>
            <h2>No project selected</h2>
            <p>Select a project or get started with a new one</p>
            <button onClick={onCreateProject}>Create a Project</button>
        </section>
    )
}

export default Startup;