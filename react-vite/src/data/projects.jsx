const projects = [
  {
    name: 'Tatterpig',
    type: 'Full-Stack Web App',
    tech: ['Express.js', 'Sequelize', 'React', 'Redux'],
    links: [
      { name: 'GitHub', to: 'https://github.com/ohalloranjm/tatterpig' },
      { name: 'Live', to: 'https://tatterpig.onrender.com/' },
    ],

    description:
      'A character sheet manager for tabletop roleplaying games. Create and customize sheets to represent characters, monsters, and other game pieces; edit them quickly with an intuitive UI.',
  },
  {
    name: 'Momo',
    type: 'Discord Bot',
    tech: ['Sequelize', 'Discord.js'],
    links: [
      {
        name: 'GitHub',
        to: 'https://github.com/ohalloranjm/momo',
      },
      {
        name: 'Install',
        to: 'https://discord.com/oauth2/authorize?client_id=1279471541003878440&permissions=274877908992&integration_type=0&scope=applications.commands+bot',
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
    tech: ['Flask', 'SQLAlchemy', 'Alembic', 'React', 'Redux'],
    links: [
      {
        name: 'GitHub',
        to: 'https://github.com/ohalloranjm/budget-app',
      },
      {
        name: 'Live',
        to: 'https://budget-me.onrender.com',
      },
    ],
    description:
      'A personal finance app. Create monthly budgets; input transactions to track your by-budget and overall spending.',
  },
];

export default projects;
