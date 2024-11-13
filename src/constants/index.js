export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: "/icons/frontend.png",
  },
  {
    title: 'Backend Developer',
    icon: "/icons/backend.png",
  },
  {
    title: 'UI/UX Design',
    icon: "/icons/ux.png",
  },
  {
    title: 'Software Engineering Instruction',
    icon: "/icons/prototyping.png",
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: "./tech/html.png",
  },
  {
    name: 'CSS 3',
    icon: "./tech/css.png",
  },
  {
    name: 'JavaScript',
    icon: "./tech/javascript.png",
  },
  {
    name: "Python",
    icon: "./tech/python.png"
  },
  {
    name: 'React JS',
    icon: "./tech/reactjs.png",
  },
  {
    name: 'Node JS',
    icon: "./tech/nodejs.png",
  },
  {
    name: 'Django',
    icon: "./tech/django.png"
  },
  {
    name: 'postgresql',
    icon: "./tech/postgresql.png",
  },
  {
    name: 'git',
    icon: "./tech/git.png",
  }
];

const experiences = [
  {
    title: 'Schedule/Part Manager',
    company_name: 'HOME SERVICE NETWORK',
    // icon: "/company/coverhunt.png",
    iconBg: '#333333',
    date: 'May 2013 - July 2015',
  },
  {
    title: '3D Digital Dental Design',
    company_name: 'PRIME DENTAL STUDIO',
    // icon: "/company/microverse.png",
    iconBg: '#333333',
    date: 'July 2015 - June 2017',
  },
  {
    title: 'Samsung Appliance & Television Technician/STG (Samsung Tech Guide)/SBB (Samsung Beyond Boundaries) Program',
    company_name: 'HOME SERVICE NETWORK ',
    // icon: "/company/kelhel.png",
    iconBg: '#333333',
    date: 'July 2017 - July 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Quiz Game',
    description: 'An interactive and engaging application designed to challenge and test knowledge through a fun quiz game experience!.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: "/projects/Quiz-Game.png",
    repo: 'https://github.com/Taeyong-Sung/quiz-game',
    demo: 'https://taeyong-sung.github.io/quiz-game/',
  },
  {
    id: 'project-2',
    name: 'Shopping List',
    description:
      'An innovative and user-friendly application designed to conveniently list and efficiently monitor all your diverse purchasing requirements.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      }
    ],
    image: "/projects/Shopping-List.png",
    repo: 'https://github.com/Taeyong-Sung/shopping-list',
    demo: 'https://syopinglist-56262e06c255.herokuapp.com/',
  },
  {
    id: 'project-3',
    name: 'Hillbomber',
    description: 'An interactive experience created using HTML Canvas, JavaScript, jQuery, and a combination of functional and object-oriented programming paradigms. In this game, you navigate the streets of San Francisco on a skateboard, skillfully avoiding obstacles like potholes, dogs, and cars.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html canvas',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: "/projects/Care-Connect.png",
    repo: 'https://github.com/Taeyong-Sung/careconnect-front-end',
    demo: 'https://care-connect-health.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Todo-List',
    description: `An efficient and user-friendly application that enables you to effortlessly organize and manage all your daily tasks with convenience.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'purple-text-gradient',
      },
    ],
    image: "/projects/Todo-List.png",
    repo: 'https://github.com/Taeyong-Sung/tododo-list',
    demo: 'https://tododolist-6b5d47d6ac82.herokuapp.com/',
  }
];

export { services, technologies, experiences, projects };
