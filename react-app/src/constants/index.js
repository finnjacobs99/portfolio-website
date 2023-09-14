import wasteWatcherImg from '../assets/project-1.jpg';
import velocikeyImg from '../assets/vkey7.png';

export const projectList = [
  {
    id: 'project-1',
    img: velocikeyImg,
    title: 'Velocikey',
    description:
      'A typing test platform that combines a minimalist design with customizable features. Witness your improvement over time with personal result tracking. Engage in competition as you see how you rank against other users and strive to reach the top of the global leaderboard.',
    demo: '',
    website: 'https://velocikey.vercel.app/',
    code: 'https://github.com/finnjacobs99/velocikey',
    tags: ['React', , 'Firebase', 'Javascript', 'Tailwind CSS'],
  },
  {
    id: 'project-2',
    img: wasteWatcherImg,
    title: 'Waste Watcher UI',
    description: `A cross platform mobile application for tracking household food waste. The Waste Watcher user interface was derived from a multitude of requirements gathered from the University of Maine Mitchell Center for Sustainability Solutions. It presents an array of features ranging from waste tracking and visualization, to account customization and leaderboards ranking user's waste reduction.`,
    demo: 'https://www.youtube.com/watch?v=nh34OQHx2WI',
    website: '',
    code: 'https://github.com/finnjacobs99/Waste-Watcher',
    tags: ['React Native', 'Javascript', 'Expo Go', 'Jest'],
  },
];
