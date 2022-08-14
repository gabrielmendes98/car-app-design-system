import BannerImage from 'assets/home-banner.png';
import { Banner } from './styles';

const Home = () => (
  <section>
    <Banner>
      <img src={BannerImage} alt="Mustang banner" />
    </Banner>
  </section>
);

export default Home;
