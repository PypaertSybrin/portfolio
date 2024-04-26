import { IconType } from "react-icons";
import Software from "@/models/Software";

interface Skill {
    icon: IconType;
    name: string;
    strength: Software[];
}
export default Skill;
