import { Car } from 'common/types/car';
import { FormFields } from '../Form';

export const prepareCarToInitialValues = (car: Car): FormFields => ({
  imageUrl: car.imageUrl,
  link: car.link || '',
  name: car.name,
  year: car.year,
  economyRate: String(car.economyRate),
  maxSpeed: String(car.maxSpeed),
  usersRate: String(car.usersRate),
});
