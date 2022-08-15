import { useEffect, useState } from 'react';
import { listCarsService } from 'api/services/listCars';
import BannerImage from 'assets/home-banner.png';
import { CarInfoCardProps } from 'components/CarInfoCard';
import { Banner } from './styles';
import CarsCarousel from './CarsCarousel';

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

      <CarsCarousel cars={cars} />
    </section>
  );
};

export default Home;
