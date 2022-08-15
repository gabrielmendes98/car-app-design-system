import { Link } from 'react-router-dom';
import FooterBannerImage from 'assets/home-banner-2-desktop.png';
import FooterBannerImageMobile from 'assets/home-banner-2-mobile.png';
import Button from 'components/Button';
import Text from 'components/Text';
import {
  FooterBannerContainer,
  FooterDescription,
  FooterDescriptionPosition,
  DesktopContainer,
  MobileContainer,
  MobileFooterDescriptionPosition,
  MobileFooterDescription,
} from './styles';

const FooterBanner = () => (
  <FooterBannerContainer>
    <DesktopContainer>
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
            <Link to="/cars">Ver carros</Link>
          </Button>
        </FooterDescription>
      </FooterDescriptionPosition>
    </DesktopContainer>

    <MobileContainer>
      <img src={FooterBannerImageMobile} alt="Mustang footer banner" />
      <MobileFooterDescriptionPosition>
        <MobileFooterDescription>
          <Text variant="h1" color="white" textAlign="end" marginBottom={1}>
            O que são
          </Text>
          <Text variant="md" color="white" textAlign="end">
            A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo
            utilitário esportivo. As SUVs costumam ter porte avantajado, além de
            interior espaçoso e possibilidade de trafegar dentro e fora da
            cidade.
          </Text>
          <Button
            size="sm"
            shape="squared"
            variant="outlined"
            color="white"
            marginTop={2}
            marginBottom={1}
          >
            <Link to="/cars">Ver carros</Link>
          </Button>
        </MobileFooterDescription>
      </MobileFooterDescriptionPosition>
    </MobileContainer>
  </FooterBannerContainer>
);

export default FooterBanner;
