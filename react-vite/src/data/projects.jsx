import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Tatterpig',
    type: 'Full-Stack Web App',
    tech: ['Express', 'Sequelize', 'React', 'Redux'],
    image: '/tatterpig.jpg',
    links: [
      {
        name: 'Live',
        fa: faUpRightFromSquare,
        to: 'https://tatterpig.onrender.com/',
      },
      {
        name: 'Repo',
        fa: faGithub,
        to: 'https://github.com/ohalloranjm/tatterpig',
      },
    ],

    description:
      'A character sheet manager for tabletop roleplaying games. Create and customize sheets to represent characters, monsters, and other game pieces; edit them quickly with an intuitive UI.',
  },
  {
    name: 'Momo',
    type: 'Discord Bot',
    image: '/knockoff_momo.jpg',
    tech: ['Sequelize', 'Discord.js'],
    links: [
      {
        name: 'Install',
        fa: faPlus,
        to: 'https://discord.com/oauth2/authorize?client_id=1279471541003878440&permissions=274877908992&integration_type=0&scope=applications.commands+bot',
      },
      {
        name: 'Repo',
        fa: faGithub,
        to: 'https://github.com/ohalloranjm/momo',
      },
    ],
    description: (
      <>
        A fan-made dice roller and character sheet manager for{' '}
        <em>Avatar Legends: The Roleplaying Game.</em>
      </>
    ),
  },
  {
    name: 'BudgetMe',
    type: 'Full-Stack Web App',
    tech: ['Flask', 'SQLAlchemy', 'Alembic', 'React', 'Redux', 'Recharts'],
    image: '/budget-me.jpg',
    links: [
      {
        name: 'Live',
        fa: faUpRightFromSquare,
        to: 'https://budget-me.onrender.com',
      },
      {
        name: 'Repo',
        fa: faGithub,
        to: 'https://github.com/ohalloranjm/budget-app',
      },
    ],
    description:
      'A personal finance app. Create monthly budgets; input transactions to track your by-budget and overall spending.',
  },
  {
    name: 'Waterbnb',
    type: 'Full-Stack Web App',
    image: '/river.jpg',
    tech: ['Express', 'Sequelize', 'React', 'Redux'],
    links: [
      {
        name: 'Live',
        fa: faUpRightFromSquare,
        to: 'https://waterhome.onrender.com',
      },
      {
        name: 'Repo',
        fa: faGithub,
        to: 'https://github.com/ohalloranjm/airbnb-clone',
      },
    ],
    description:
      'Airbnb, but water-themed. Create, view, rate, and manage "spots" in a responsive React-based web app. ',
  },
];

export default projects;
