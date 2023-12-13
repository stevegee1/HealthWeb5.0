import * as yup from 'yup';

export const IndividualProfilevalidationSchema = yup.object().shape({
    fullName: yup.string().required('This  field is required'),
    dob: yup.string().required('This  field is required'),
    phoneNumber: yup.string().required('This  field is required'),
    address: yup.string().required('This  field is required')
});

export type TIndividualProfile = yup.InferType<typeof IndividualProfilevalidationSchema>;
