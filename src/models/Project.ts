import ProjectPicture from "@/models/ProjectPicture";

interface Project {
    name: string;
    slug: string;
    subname: string;
    description: string;
    inGrid: boolean;
    pictures: ProjectPicture[];
}
export default Project;