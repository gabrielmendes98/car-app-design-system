import mockImage from 'assets/car-21.png';
import { Car } from 'common/types/car';

const carsService = {
  list(): Promise<Car[]> {
    return Promise.resolve([
      {
        id: 1,
        imageUrl: mockImage,
        imageAlt: 'Mustang 2015',
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
        imageAlt: 'Camaro 2015',
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
        imageAlt: 'Fusion 2015',
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
        imageAlt: '320i 2015',
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
        imageAlt: '328i 2015',
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
        imageAlt: 'M3 2015',
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
        imageAlt: 'Q7 2015',
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
        imageAlt: 'Mustang 2015',
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
