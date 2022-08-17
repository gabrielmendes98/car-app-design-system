import * as yup from 'yup';

export const validations = yup.object().shape({
  name: yup.string().trim().required(),
  year: yup
    .number()
    .test(
      'len',
      'Um ano deve ter 4 digitos',
      val => val!.toString().length === 4,
    ),
  maxSpeed: yup.number().required(),
  economyRate: yup.number().required(),
  usersRate: yup.number().required(),
  link: yup.string().trim().required(),
  imageUrl: yup.string().trim().required(),
});
