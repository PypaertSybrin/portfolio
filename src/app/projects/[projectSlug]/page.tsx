import Project from "@/models/Project";
import ProjectsData from "@/data/ProjectsData";

const ProjectPage = ({params}: {params: {projectSlug: string}}) => {
    const project: Project | undefined = ProjectsData.find((project: Project) => project.slug === params.projectSlug);

    return (
        <div>
            <h1>{project?.name}</h1>
            <p>{project?.description}</p>
            <p>{project?.subname}</p>
            <p>{project?.slug}</p>
        </div>
    )
};
export default ProjectPage;