import { useEffect, useState } from 'react';
import { listCarsService } from 'api/services/listCars';
import BannerImage from 'assets/home-banner-1-desktop.png';
import BannerImageMobile from 'assets/home-banner-1-mobile.png';
import theme from 'common/styles/theme';
import { CarInfoCardProps } from 'components/CarInfoCard';
import { Banner } from './styles';
import CarsCarousel from './CarsCarousel';
import FooterBanner from './FooterBanner';

const Home = () => {
  const [cars, setCars] = useState<CarInfoCardProps[]>([]);

  useEffect(() => {
    listCarsService().then(setCars);
  }, []);

  return (
    <section>
      <Banner>
        <picture>
          <source media={theme.device.mobile} srcSet={BannerImageMobile} />
          <img src={BannerImage} alt="Mustang banner" />
        </picture>
      </Banner>

      <CarsCarousel cars={cars} />

      <FooterBanner />
    </section>
  );
};

export default Home;
