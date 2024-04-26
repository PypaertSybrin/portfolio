import Project from '@/models/Project'

export const ProjectsData: Project[] = [
  {
    name: 'Target Goal',
    slug: 'target-goal',
    subname: 'Project one',
    description: 'This was one of my first projects. It\'s called Target Goal and the aim of the game was to hit the ball in the goal where the lights were lit up. It was quite a challenging project with some ups and downs, but looking at the final result, I was really happy with the outcome.',
    inGrid: true,
    pictures: [
      {
        src: 'TargetGoal.png',
        alt: 'TargetGoal',
        width: 1200,
        height: 900,
      },
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
    description: 'TastyTrade was a mobile app I made with Flutter. The app was a recipe app where you could find a lot of recipes others made. You could also add your own recipes and share them with others. It was a fun project and I learned a lot more about Flutter while making it.',
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
    description: 'Bike Blitz was my first project within a team. It was a great experience and we had a lot of fun making it. The game was to race against each other and the aim was to be the first to reach the finish line. It was a great experience and I learned a lot from it.',
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
    description: 'Free Game Galaxy was a project where I designed and developed a website where you could find a ton of free games to play. I had a lot of fun making this project and was really happy with the outcome.',
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
    description: 'LightSwitch was a lab exercise which I was really happy with. It was a full stack project where you could could click a button to turn the light on the website on or off. You could also see the status change in the backend which was really cool. It was a small project I made when I was learning about full stack development.',
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
    description: 'My Formula1 Api was a project for backend development. We needed to create an API with a lot of features we saw in the lessons like security, validation, logging, testing etc. It was a great project and I learned a lot from it.',
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
