import Project from '@/models/Project'

export const ProjectsData: Project[] = [
  {
    name: 'Target Goal',
    slug: 'target-goal',
    subname: 'Project one',
    description:
      "This was one of my first projects. It's called Target Goal and the aim of the game was to hit the ball in the goal where the lights were lit up. It was quite a challenging project with some ups and downs, but looking at the final result, I was really happy with the outcome.",
    inGrid: true,
    pictures: [
      {
        src: 'TargetGoal',
        alt: 'TargetGoal',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Kids-BESTest app',
    slug: 'kids-bestest',
    subname: 'Industry Project',
    description:
      'We developed an app in collaboration with Hasselt University. The app was designed for occupational therapists and physiotherapists, with the goal of digitizing a clinical test battery. We built the app using Flutter, making it accessible to both Android and iOS users, and chose Firebase for the database.',
    inGrid: true,
    pictures: [
      {
        src: 'Kids-BESTest',
        alt: 'Kids-BESTest',
        width: 900,
        height: 675,
      },
      {
        src: 'Kids-BESTest-login',
        alt: 'Kids-BESTest-login',
        width: 900,
        height: 675,
      },
      {
        src: 'Kids-BESTest-examination',
        alt: 'Kids-BESTest-examination',
        width: 900,
        height: 675,
      },
    ],
  },
  {
    name: 'TastyTrade',
    slug: 'tasty-trade',
    subname: 'Smart App Development',
    description:
      'TastyTrade was a mobile app I made with Flutter. The app was a recipe app where you could find a lot of recipes others made. You could also add your own recipes and share them with others. It was a fun project and I learned a lot more about Flutter while making it.',
    inGrid: false,
    pictures: [
      {
        src: 'TastyTrade-login',
        alt: 'TastyTrade-login',
        width: 1200,
        height: 900,
      },
      {
        src: 'TastyTrade-1',
        alt: 'TastyTrade-1',
        width: 1200,
        height: 900,
      },
      {
        src: 'TastyTrade-2',
        alt: 'TastyTrade-2',
        width: 1200,
        height: 900,
      },
      {
        src: 'TastyTrade-3',
        alt: 'TastyTrade-3',
        width: 1200,
        height: 900,
      },
      {
        src: 'TastyTrade-4',
        alt: 'TastyTrade-4',
        width: 1200,
        height: 900,
      },
      {
        src: 'TastyTrade-5',
        alt: 'TastyTrade-5',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Bike Blitz',
    slug: 'bike-blitz',
    subname: 'Team Project',
    description:
      'Bike Blitz was my first project within a team. It was a great experience and we had a lot of fun making it. The game was to race against each other and the aim was to be the first to reach the finish line. It was a great experience and I learned a lot from it.',
    inGrid: true,
    pictures: [
      {
        src: 'BikeBlitz',
        alt: 'BikeBlitz',
        width: 1200,
        height: 900,
      },
      {
        src: 'BikeBlitz-4',
        alt: 'BikeBlitz-4',
        width: 1200,
        height: 900,
      },
      {
        src: 'BikeBlitz-5',
        alt: 'BikeBlitz-5',
        width: 1200,
        height: 900,
      },
      {
        src: 'BikeBlitz-6',
        alt: 'BikeBlitz-6',
        width: 1200,
        height: 900,
      },
      {
        src: 'BikeBlitz-7',
        alt: 'BikeBlitz-7',
        width: 1200,
        height: 900,
      },
      // {
      //   src: 'BikeBlitz-1-new',
      //   alt: 'BikeBlit-1',
      //   width: 1080,
      //   height: 810,
      // },
      {
        src: 'BikeBlitz-2-new',
        alt: 'BikeBlitz-2',
        width: 1080,
        height: 810,
      },
      {
        src: 'BikeBlitz-3-new',
        alt: 'BikeBlitz-3',
        width: 2271,
        height: 1703,
      },
    ],
  },
  {
    name: 'Free Game Galaxy',
    slug: 'free-game-galaxy',
    subname: 'Interaction Design',
    description:
      'Free Game Galaxy was a project where I designed and developed a website where you could find a ton of free games to play. I had a lot of fun making this project and was really happy with the outcome.',
    inGrid: false,
    pictures: [
      {
        src: 'FreeGameGalaxy',
        alt: 'Free Game Galaxy',
        width: 1200,
        height: 900,
      },
      {
        src: 'FreeGameGalaxy-1',
        alt: 'Free Game Galaxy-1',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'LightSwitch',
    slug: 'light-switch',
    subname: 'Full Stack Development',
    description:
      'LightSwitch was a lab exercise which I was really happy with. It was a full stack project where you could could click a button to turn the light on the website on or off. You could also see the status change in the backend which was really cool. It was a small project I made when I was learning about full stack development.',
    inGrid: false,
    pictures: [
      {
        src: 'LightSwitch',
        alt: 'LightSwitch',
        width: 1200,
        height: 900,
      },
      {
        src: 'LightSwitch-1',
        alt: 'LightSwitch-1',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Formula1 Api',
    slug: 'formula1-api',
    subname: 'Backend Development',
    description:
      'My Formula1 Api was a project for backend development. We needed to create an API with a lot of features we saw in the lessons like security, validation, logging, testing etc. It was a great project and I learned a lot from it.',
    inGrid: false,
    pictures: [
      {
        src: 'Backend-blazor',
        alt: 'Backend-blazor',
        width: 1200,
        height: 900,
      },
      {
        src: 'Backend-swagger',
        alt: 'Backend-swagger',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Portfolio',
    slug: 'portfolio',
    subname: 'Frontend Development',
    description:
      "This is my portfolio website. It was a project I made to showcase my projects and skills. It's made with Next.js and Tailwind CSS. I am really happy with how it turned out.",
    inGrid: true,
    pictures: [
      {
        src: 'Portofolio-dark',
        alt: 'Portofolio-dark',
        width: 1200,
        height: 900,
      },
      {
        src: 'Portofolio-light',
        alt: 'Portofolio-light',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    name: 'Todo app',
    slug: 'todo-app',
    subname: 'Frontend Development',
    description:
      "This todo app was an excercise we made in Frontend Development. It was one of my first projects made with React. I was really happy with the end result and I've learned a lot from it.",
    inGrid: false,
    pictures: [
      {
        src: 'Todo',
        alt: 'Todo',
        width: 1200,
        height: 900,
      },
    ],
  },
]
export default ProjectsData
