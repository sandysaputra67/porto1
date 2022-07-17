import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      state: 'semarang',
      city: 'semarang',
    },
    avatarUrl: '',
    createdAt: 1555016400000,
    email: 'tejo@gmail.com',
    name: 'tejo',
  },
  {
    id: uuid(),
    address: {
      state: 'indonesia',
      city: 'semarang',
    },
    avatarUrl: '',
    createdAt: 1554325200000,
    email: 'butejo@gmail.com',
    name: 'bu tejo'
  },
];
