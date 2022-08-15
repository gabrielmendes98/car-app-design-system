import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import throttle from 'lodash.throttle';
import { listCarsService } from 'api/services/listCars';
import BannerImage from 'assets/home-banner.png';
import CarInfoCard, { CarInfoCardProps } from 'components/CarInfoCard';
import {
  Banner,
  CardsCarousel,
  CarouselContainer,
  Button,
  cardWidth,
  cardGap,
} from './styles';

const Home = () => {
  const [cars, setCars] = useState<CarInfoCardProps[]>([]);
  const carousel = useRef<HTMLUListElement>(null);

  const handlePrevItem = useMemo(
    () =>
      throttle((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel && carousel.current) {
          carousel.current.scrollLeft -= cardWidth + cardGap;
        }
      }, 400),
    [],
  );

  const handleNextItem = useMemo(
    () =>
      throttle((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel && carousel.current) {
          carousel.current.scrollLeft += cardWidth + cardGap;
        }
      }, 400),
    [],
  );

  useEffect(() => {
    listCarsService().then(setCars);
  }, []);

  useEffect(
    () => () => {
      handleNextItem.cancel();
      handlePrevItem.cancel();
    },
    [],
  );

  return (
    <section>
      <Banner>
        <img src={BannerImage} alt="Mustang banner" />
      </Banner>

      <CarouselContainer>
        <Button
          onClick={handlePrevItem}
          disabled={carousel?.current?.scrollLeft === 0}
        >
          <Icon icon="bi:chevron-left" />
        </Button>

        <CardsCarousel ref={carousel}>
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

        <Button
          onClick={handleNextItem}
          disabled={
            Number(carousel?.current?.scrollLeft) >=
            Number(carousel?.current?.offsetWidth)
          }
        >
          <Icon icon="bi:chevron-right" />
        </Button>
      </CarouselContainer>
    </section>
  );
};

export default Home;
