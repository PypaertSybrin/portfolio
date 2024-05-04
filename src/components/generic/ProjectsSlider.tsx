import ProjectsData from "@/data/ProjectsData"
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = ProjectsData

const ProjectsSlider = () => {
    return(
        <div>
            <h2 className="text-primary-dark dark:text-primary-neutral font-semibold text-xl sm:text-2xl lg:text-4xl mb-12 text-center">Some more things I&apos;ve made</h2>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}
export default ProjectsSlider