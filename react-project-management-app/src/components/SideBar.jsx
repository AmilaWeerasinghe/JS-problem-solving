const SideBar = ({onAddProject}) => {
    return(
        <section>
            <h2>SideBar</h2>
            <button onClick={onAddProject}>Add Project</button>
        </section>
    )
}

export default SideBar;