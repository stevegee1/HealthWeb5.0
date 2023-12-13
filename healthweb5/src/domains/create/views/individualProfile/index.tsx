'use client';
import { useRouter } from 'next/navigation';
import { LoginWrapper } from '@/components';
import { useFormik } from 'formik';
import { Button, PrimaryInput } from '@/atoms';
import { IndividualProfilevalidationSchema, TIndividualProfile } from './validation';
import { getDid } from '@/helpers/didTokens';
import { createIndividualWeb5Profile } from '../../../../../web5/createProfileIndividual';

const IndividualProfileView = () => {
  const router = useRouter();
  const initialValues: TIndividualProfile = {
    fullName: '',
    dob: '',
    phoneNumber: '',
    address: ''
  };

  const onSubmit = async (data: TIndividualProfile) => {
    const { record, result } = await createIndividualWeb5Profile(data, getDid());

    console.log(record?.id);

    if (result?.status.code === 202) {
      router.push('/');
    }
  };

  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: IndividualProfilevalidationSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit
  });

  const getError = (key: keyof TIndividualProfile) => {
    return touched[key] && errors[key];
  };
  return (
    <main>
      <LoginWrapper
        title={`welcome ${getDid()?.slice(0, 16)}...`}
        href=""
        info="Enter your personal details below."
        hrefText=""
      >
        <div className="w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col mb-6 md:flex-row md:justify-between lg:justify-start lg:space-x-5">
              <div className="w-full md:w-[48%] mb-4 md:mb-0">
                <PrimaryInput
                  css={'mb-4'}
                  id={'fullName'}
                  name={'fullName'}
                  label={'Full Name'}
                  value={values.fullName}
                  placeholder={'Enter your full name'}
                  onChange={handleChange}
                  error={getError('fullName') || ''}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <PrimaryInput
                  css={'mb-4'}
                  id={'dob'}
                  name={'dob'}
                  label={'Date of Birth'}
                  value={values.dob}
                  placeholder={'Enter your DoB'}
                  onChange={handleChange}
                  error={getError('dob') || ''}
                />
              </div>
            </div>

            <div className="flex w-full flex-col mb-6 md:flex-row md:justify-between lg:justify-start lg:space-x-5">
              <div className="w-full md:w-[48%] mb-4 md:mb-0">
                <PrimaryInput
                  css={'mb-4'}
                  id={'phoneNumber'}
                  name={'phoneNumber'}
                  label={'Phone Number'}
                  value={values.phoneNumber}
                  placeholder={'Enter your phone number'}
                  onChange={handleChange}
                  error={getError('phoneNumber') || ''}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <PrimaryInput
                  css={'mb-4'}
                  id={'address'}
                  name={'address'}
                  label={'Address'}
                  value={values.address}
                  placeholder={'Enter your address'}
                  onChange={handleChange}
                  error={getError('address') || ''}
                />
              </div>
            </div>
            <Button type="submit" variant="filled" text="Save" />
          </form>
        </div>
      </LoginWrapper>
    </main>
  );
};

export default IndividualProfileView;
