const users = [
  {
    id: '1',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'm@moss.com',
    password: 'abc',
  },
  {
    id: '2',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy',
  },
  {
    id: '3',
    firstName: 'Sugma',
    lastName: 'Trenneman',
    email: 'sugma@gmail.com',
    password: 'ligma',
  },
  {
    id: '4',
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    email: 'seventhHokage@gmail.com',
    password: 'hey',
  },
];

module.exports = {
  getUsers: () => users,
  addUser: (user) => users.push(user),
};
