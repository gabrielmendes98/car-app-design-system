import Button from 'components/Button';
import CarInfoCard from 'components/CarInfoCard';
import Input from 'components/Input';

const Home = () => (
  <section>
    <h1>Home page</h1>
    <Input label="test" name="name" />
    <Button>dewde</Button>
    <CarInfoCard
      id={1}
      name="Mustang"
      year="2015"
      maxSpeed={180}
      economyRate={9}
      usersRate={8}
    />
    <CarInfoCard
      id={2}
      name="Mustang"
      year="2015"
      maxSpeed={180}
      economyRate={9}
      usersRate={8}
    />
  </section>
);

export default Home;
