import FooterBannerImage from 'assets/home-banner-2-desktop.png';
import Button from 'components/Button';
import Text from 'components/Text';
import {
  FooterBannerContainer,
  FooterDescription,
  FooterDescriptionPosition,
  DesktopContainer,
  MobileContainer,
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
            Ver carros
          </Button>
        </FooterDescription>
      </FooterDescriptionPosition>
    </DesktopContainer>

    <MobileContainer></MobileContainer>
  </FooterBannerContainer>
);

export default FooterBanner;
