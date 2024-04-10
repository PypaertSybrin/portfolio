import Project from '@/models/Project'

export const ProjectsData: Project[] = [
  {
    name: 'Target Goal',
    subname: 'Project one',
    description: 'Description 1',
    inGrid: true,
    pictures: [
      {
        src: 'TargetGoal.png',
        alt: 'TargetGoal',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'TastyTrade',
    subname: 'Smart App Development',
    description: 'Description 2',
    inGrid: true,
    pictures: [
      {
        src: 'TastyTrade.png',
        alt: 'TastyTrade',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Bike Blitz',
    subname: 'Team Project',
    description: 'Description 2',
    inGrid: true,
    pictures: [
      {
        src: 'BikeBlitz.png',
        alt: 'BikeBlitz',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Free Game Galaxy',
    subname: 'Interaction Design',
    description: 'Description 2',
    inGrid: true,
    pictures: [
      {
        src: 'FreeGameGalaxy.png',
        alt: 'Free Game Galaxy',
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    name: 'LightSwitch',
    subname: 'Full Stack Development',
    description: 'Description 2',
    inGrid: false,
    pictures: [
      {
        src: 'LightSwitch.png',
        alt: 'LightSwitch',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Formula1 Api',
    subname: 'Backend Development',
    description: 'Description 2',
    inGrid: false,
    pictures: [
      {
        src: 'Backend.png',
        alt: 'Backend',
        width: 1200,
        height: 900,
      },
    ],
  },
  
]
export default ProjectsData
