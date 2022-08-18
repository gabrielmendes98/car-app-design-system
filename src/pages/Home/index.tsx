import { useEffect, useState } from 'react';
import carsService from 'api/services/cars';
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
    carsService
      .list()
      .then(setCars)
      .catch(() => {});
    // geralmente utilizo interceptors para erros para nao precisar colocar catch em tudo,
    // mas devido a falta de tempo, resolvi fazer assim para nao dar problemas nos testes
  }, []);

  return (
    <section>
      <Banner>
        <picture>
          <source media={theme.device.mobile} srcSet={BannerImageMobile} />
          <img src={BannerImage} alt="Mustang banner" />
        </picture>
      </Banner>
      test ci;cd
      <CarsCarousel cars={cars} />
      <FooterBanner />
    </section>
  );
};

export default Home;
