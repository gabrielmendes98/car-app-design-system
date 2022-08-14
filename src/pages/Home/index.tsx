import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { listCarsService } from 'api/services/listCars';
import BannerImage from 'assets/home-banner.png';
import CarInfoCard, { CarInfoCardProps } from 'components/CarInfoCard';
import { Banner, CardsCarousel, CarouselContainer, Button } from './styles';

const Home = () => {
  const [cars, setCars] = useState<CarInfoCardProps[]>([]);

  useEffect(() => {
    listCarsService().then(setCars);
  }, []);

  return (
    <section>
      <Banner>
        <img src={BannerImage} alt="Mustang banner" />
      </Banner>

      <CarouselContainer>
        <Button>
          <Icon icon="bi:chevron-left" />
        </Button>

        <CardsCarousel>
          {cars.map(car => (
            <li key={car.id}>
              <CarInfoCard
                id={car.id}
                name={car.name}
                year={car.year}
                maxSpeed={car.maxSpeed}
                economyRate={car.economyRate}
                usersRate={car.usersRate}
              />
            </li>
          ))}
        </CardsCarousel>

        <Button>
          <Icon icon="bi:chevron-right" />
        </Button>
      </CarouselContainer>
    </section>
  );
};

export default Home;
