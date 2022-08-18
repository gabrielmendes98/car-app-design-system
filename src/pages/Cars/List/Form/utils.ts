import * as yup from 'yup';

// poderia abstrair as validações com o addMethod do yup, mas não fiz por falta de tempo.

export const validations = yup.object().shape({
  name: yup.string().trim().required(),
  year: yup
    .string()
    .test('len', 'Um ano deve ter 4 digitos', val => val!.length === 4),
  maxSpeed: yup.number().required(),
  economyRate: yup
    .number()
    .test('len', 'Deve ser entre 0 e 10', val => val! >= 0 && val! <= 10),
  usersRate: yup
    .number()
    .test('len', 'Deve ser entre 0 e 10', val => val! >= 0 && val! <= 10),
  link: yup.string().trim().required(),
  imageUrl: yup.string().trim().required(),
});
