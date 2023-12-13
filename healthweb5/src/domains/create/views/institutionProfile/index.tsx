'use client';
import { LoginWrapper } from '@/components';
import { useFormik } from 'formik';
import { Button, PrimaryInput } from '@/atoms';
import { InstitutionProfilevalidationSchema, TInstitutionProfile } from './validation';

const InstitutionProfileView = () => {
  const initialValues: TInstitutionProfile = {
    fullName: '',
    regNumber: '',
    address: '',
    ownershipType: ''
  };

  const onSubmit = async (data: TInstitutionProfile) => {
    console.log(data);
  };

  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema: InstitutionProfilevalidationSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit
  });

  const getError = (key: keyof TInstitutionProfile) => {
    return touched[key] && errors[key];
  };
  return (
    <main>
      <LoginWrapper
        title="welcome (DID) 123456fghj "
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
                  id={'address'}
                  name={'address'}
                  label={'Address'}
                  value={values.address}
                  placeholder={'Enter physical Address'}
                  onChange={handleChange}
                  error={getError('address') || ''}
                />
              </div>
            </div>

            <div className="flex w-full flex-col mb-6 md:flex-row md:justify-between lg:justify-start lg:space-x-5">
              <div className="w-full md:w-[48%] mb-4 md:mb-0">
                <PrimaryInput
                  css={'mb-4'}
                  id={'regNumber'}
                  name={'regNumber'}
                  label={'Registration Number'}
                  value={values.regNumber}
                  placeholder={'Enter your reg. number'}
                  onChange={handleChange}
                  error={getError('regNumber') || ''}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <PrimaryInput
                  css={'mb-4'}
                  id={'ownershipType'}
                  name={'ownershipType'}
                  label={'Ownership Type'}
                  value={values.ownershipType}
                  placeholder={'Gov, Private, Community e.t.c...'}
                  onChange={handleChange}
                  error={getError('ownershipType') || ''}
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

export default InstitutionProfileView;
