import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Text from 'components/Text';
import { Container, Image, InfoCard, ResumeList, ResumeItem } from './styles';

export interface CarInfoCardProps {
  id: number;
  imageUrl?: string;
  imageAlt?: string;
  name: string;
  year: string;
  maxSpeed: number;
  economyRate: number;
  usersRate: number;
}

const CarInfoCard = ({
  id,
  imageUrl,
  imageAlt,
  name,
  year,
  maxSpeed,
  economyRate,
  usersRate,
}: CarInfoCardProps) => (
  <Container>
    {imageUrl && imageAlt && (
      <Image>
        <img src={imageUrl} alt={imageAlt} />
      </Image>
    )}

    <InfoCard>
      <Text variant="h2" textAlign="center">
        {name}
      </Text>

      <ResumeList>
        <ResumeItem>
          <Icon icon="bi:calendar2-date" />
          <Text variant="sm">{year}</Text>
        </ResumeItem>
        <ResumeItem>
          <Icon icon="fluent:top-speed-20-regular" />
          <Text variant="sm">{`${maxSpeed} Km/h`}</Text>
        </ResumeItem>
        <ResumeItem>
          <Icon icon="simple-line-icons:energy" />
          <Text variant="sm">{`${economyRate}/10`}</Text>
        </ResumeItem>
        <ResumeItem>
          <Icon icon="fluent:people-20-regular" />
          <Text variant="sm">{`${usersRate}/10`}</Text>
        </ResumeItem>
      </ResumeList>

      <Link to={`/cars/${id}`}>
        <Button variant="outlined">Ver carro</Button>
      </Link>
    </InfoCard>
  </Container>
);

export default CarInfoCard;
