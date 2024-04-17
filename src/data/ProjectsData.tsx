import Project from '@/models/Project'

export const ProjectsData: Project[] = [
  {
    name: 'Target Goal',
    slug: 'target-goal',
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
    slug: 'tasty-trade',
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
    slug: 'bike-blitz',
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
    slug: 'free-game-galaxy',
    subname: 'Interaction Design',
    description: 'Description 2',
    inGrid: true,
    pictures: [
      {
        src: 'FreeGameGalaxy.png',
        alt: 'Free Game Galaxy',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'LightSwitch',
    slug: 'light-switch',
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
    slug: 'formula1-api',
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
