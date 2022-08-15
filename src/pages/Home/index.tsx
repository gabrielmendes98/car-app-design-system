import { useEffect, useState } from 'react';
import { listCarsService } from 'api/services/listCars';
import BannerImage from 'assets/home-banner-1-desktop.png';
import FooterBannerImage from 'assets/home-banner-2-desktop.png';
import { CarInfoCardProps } from 'components/CarInfoCard';
import Text from 'components/Text';
import Button from 'components/Button';
import {
  Banner,
  FooterBanner,
  FooterDescription,
  FooterDescriptionPosition,
} from './styles';
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

      <FooterBanner>
        <img src={FooterBannerImage} alt="Mustang footer banner" />
        <FooterDescriptionPosition>
          <FooterDescription>
            <Text variant="h1" color="white" textAlign="end" marginBottom={2}>
              Mustang
            </Text>
            <Text variant="md" color="white" textAlign="end">
              O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
              Company. O carro foi apresentado ao público em 17 de abril de 1964
              durante a New York World's Fair. O Mustang, apesar de ter sofrido
              grandes alterações ao longo dos anos é a mais antiga linha de
              automóveis da Ford.
            </Text>
            <Button
              size="sm"
              shape="squared"
              variant="outlined"
              color="white"
              marginTop={4}
            >
              Ver carros
            </Button>
          </FooterDescription>
        </FooterDescriptionPosition>
      </FooterBanner>
    </section>
  );
};

export default Home;
