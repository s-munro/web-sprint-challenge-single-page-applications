import * as yup from 'yup';


export default yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),

  size: yup
  .string()
  .oneOf([ 'small', 'medium', 'large' ], 'size is required'),

  sauce: yup.string().oneOf(['red', 'garlicRanch', 'bbq', 'spinAlfredo' ]),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  peppers: yup.boolean(),
  onions: yup.boolean(),
  pineapple: yup.boolean(),
  chicken: yup.boolean(),
  glutenFree: yup.boolean(),
  instructions: yup.string(),
});