import {
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [cars, setCars] = useState<CarInfoCardProps[]>([]);
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
    listCarsService().then(setCars);
  }, []);

  useEffect(() => {
    if (carousel && carousel.current) {
      setCarouselWidth(carousel.current.clientWidth);
    }
  }, [cars]);

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
        <Button onClick={handlePrevItem} disabled={carouselPosition === 0}>
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
          disabled={carouselPosition >= carouselWidth}
        >
          <Icon icon="bi:chevron-right" />
        </Button>
      </CarouselContainer>
    </section>
  );
};

export default Home;
