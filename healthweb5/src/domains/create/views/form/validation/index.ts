import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  acctType: yup.string().required('Select your account type.')
});

export type TCreateDIDSchema = yup.InferType<typeof validationSchema>;
