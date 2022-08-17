import mockImage from 'assets/car-11.png';
import { Car } from 'common/types/car';

const carsService = {
  list(): Promise<Car[]> {
    return Promise.resolve([
      {
        id: 1,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'Mustang',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 2,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'Camaro',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 3,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'Fusion',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 4,
        imageUrl: mockImage,
        imageAlt: '',
        name: '320i',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 5,
        imageUrl: mockImage,
        imageAlt: '',
        name: '328i',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 6,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'M3',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
      {
        id: 7,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'Q7',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      },
    ]);
  },

  infiniteScroll(lastId: number): Promise<Car[]> {
    const mockedCars = [];
    const amountGenerated = 5;

    for (let i = 1; i <= amountGenerated; i++) {
      const car = {
        id: lastId + i,
        imageUrl: mockImage,
        imageAlt: '',
        name: 'Mustang',
        year: '2015',
        maxSpeed: 180,
        economyRate: 9,
        usersRate: 8,
        link: 'fake.link.com',
      };
      mockedCars.push(car);
    }

    return Promise.resolve([...mockedCars]);
  },
};

export default carsService;
