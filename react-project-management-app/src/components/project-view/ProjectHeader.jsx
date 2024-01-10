const ProjectHeader = ({title ,date , description}) =>{
    return(
        <section>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{description}</p>
            <button>
                Delete
            </button>
        </section>
    )
}

export default ProjectHeader;