import ProjectPicture from "@/models/ProjectPicture";

interface Project {
    name: string;
    subname: string;
    description: string;
    pictures: ProjectPicture[];
}
export default Project;