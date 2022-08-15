import { Car } from 'common/types/car';

export const listCarsService = (): Promise<Car[]> =>
  Promise.resolve([
    {
      id: 1,
      imageUrl: '',
      imageAlt: '',
      name: 'Mustang',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    {
      id: 2,
      imageUrl: '',
      imageAlt: '',
      name: 'Camaro',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    {
      id: 3,
      imageUrl: '',
      imageAlt: '',
      name: 'Fusion',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    {
      id: 4,
      imageUrl: '',
      imageAlt: '',
      name: '320i',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    {
      id: 5,
      imageUrl: '',
      imageAlt: '',
      name: '328i',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    {
      id: 6,
      imageUrl: '',
      imageAlt: '',
      name: 'M3',
      year: '2015',
      maxSpeed: 180,
      economyRate: 9,
      usersRate: 8,
    },
    // {
    //   id: 7,
    //   imageUrl: '',
    //   imageAlt: '',
    //   name: 'Q7',
    //   year: '2015',
    //   maxSpeed: 180,
    //   economyRate: 9,
    //   usersRate: 8,
    // },
  ]);