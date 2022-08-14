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
  ]);
