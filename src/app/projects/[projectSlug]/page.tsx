import Project from "@/models/Project";
import ProjectsData from "@/data/ProjectsData";
import Navigation from "@/components/generic/Navigation";
import Footer from "@/components/generic/Footer";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarouselProjectDetails from "@/components/carousel/EmblaCarouselProjectDetails";

const ProjectPage = ({params}: {params: {projectSlug: string}}) => {
    const project: Project | undefined = ProjectsData.find((project: Project) => project.slug === params.projectSlug);

    const OPTIONS: EmblaOptionsType = {}
    const SLIDES = project?.pictures || []

    return (
        <div className="min-h-screen dark:bg-secundary-950 dark:text-secundary-50 bg-secundary-50 text-secundary-950">
            <div className="max-w-screen-xl mx-auto">
                <Navigation />
                <div className="pt-16">
                    <div>
                        <h1>{project?.name}</h1>
                        <p>{project?.subname}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <EmblaCarouselProjectDetails slides={SLIDES} options={OPTIONS} />
                        <p>{project?.description}</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};
export default ProjectPage;