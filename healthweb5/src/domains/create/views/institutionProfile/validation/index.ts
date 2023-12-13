import * as yup from 'yup';

export const InstitutionProfilevalidationSchema = yup.object().shape({
  fullName: yup.string().required('This  field is required'),
  regNumber: yup.string().required('This  field is required'),
  address: yup.string().required('This  field is required'),
  ownershipType: yup.string().required('This  field is required')
});

export type TInstitutionProfile = yup.InferType<typeof InstitutionProfilevalidationSchema>;
