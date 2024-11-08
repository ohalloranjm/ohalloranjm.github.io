const projects = [
  {
    id: 1,
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
    id: 2,
    name: 'Momo',
    type: 'Discord Bot',
    tech: ['Sequelize', 'Discord.js'],
    links: [
      {
        name: 'GitHub',
        to: 'https://gituh.com/ohalloranjm/momo',
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
];

export default projects;
