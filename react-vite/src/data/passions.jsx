import {
  faHandPointer,
  faICursor,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons';

const passions = [
  {
    name: 'UI/UX Design',
    fa: faHandPointer,
    details: (
      <p>
        Misclick once, shame on you; misclick twice, shame on me. I build all my
        apps with the goal of perfectly matching user intuition—when I fail, I
        iterate.
      </p>
    ),
  },
  {
    name: 'Technical Writing',
    fa: faICursor,
    details: (
      <p>
        Documentation is a must. No matter what position I hold, I want to
        ensure that institutional knowledge outlasts any one employee.
      </p>
    ),
  },
  {
    name: 'Workflow Optimization',
    fa: faUsersCog,
    details: (
      <p>
        I’m always looking to streamline my work. In my last non-engineering
        role, I automated away enough of my job to cut my hours by 35% without
        any loss of productivity—frankly, it’s no wonder I became a programmer.
      </p>
    ),
  },
];

export default passions;
