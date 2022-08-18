import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import throttle from 'lodash.throttle';
import CarInfoCard, { CarInfoCardProps } from 'components/CarInfoCard';
import {
  CardsCarousel,
  CarouselContainer,
  Button,
  cardWidth,
  cardGap,
} from './styles';

interface Props {
  cars: CarInfoCardProps[];
}

const CarsCarousel = ({ cars }: Props) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const carousel = useRef<HTMLUListElement>(null);

  const handlePrevItem = useMemo(
    () =>
      throttle((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel && carousel.current) {
          const calc = carousel.current.scrollLeft - (cardWidth + cardGap);
          carousel.current.scrollLeft = calc;
          setCarouselPosition(calc);
        }
      }, 350),
    [],
  );

  const handleNextItem = useMemo(
    () =>
      throttle((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (carousel && carousel.current) {
          const calc = carousel.current.scrollLeft + cardWidth + cardGap;
          carousel.current.scrollLeft = calc;
          setCarouselPosition(calc);
        }
      }, 350),
    [],
  );

  useEffect(() => {
    if (carousel && carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.clientWidth,
      );
    }
  }, [cars, carouselPosition]);

  useEffect(
    () => () => {
      handleNextItem.cancel();
      handlePrevItem.cancel();
    },
    [],
  );

  return (
    <CarouselContainer>
      <Button onClick={handlePrevItem} disabled={carouselPosition <= 0}>
        <Icon icon="bi:chevron-left" />
      </Button>

      <CardsCarousel ref={carousel} id="cars-list">
        {cars.map(car => (
          <li key={car.id}>
            <CarInfoCard
              imageUrl={car.imageUrl}
              imageAlt={car.imageAlt}
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
        disabled={carouselPosition >= carouselWidth}
      >
        <Icon icon="bi:chevron-right" />
      </Button>
    </CarouselContainer>
  );
};

export default CarsCarousel;
