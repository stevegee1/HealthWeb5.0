'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginWrapper } from '@/components';
import { useFormik } from 'formik';
import { Button, CopyIcon, PrimaryInput, RadioBtnInput } from '@/atoms';
import { validationSchema, TCreateDIDSchema } from './validation';
import { signUpWeb5 } from '../../../../../web5/SignUp';
import { setDid } from '@/helpers/didTokens';

const CreateDidView = () => {
  const router = useRouter();
  const [generatedDid, setGeneratedDid] = useState<string>('');
  const [didLoading, setDidLoading] = useState<boolean>(false);
  const initialValues: TCreateDIDSchema = {
    acctType: ''
  };

  const onSubmit = async (data: TCreateDIDSchema) => {
    setDidLoading(true);
    const res = await signUpWeb5(data.acctType);

    if (res?.did) {
      setGeneratedDid(res?.did);
      setDid(res?.did);
      setDidLoading(false);
    }
  };

  const { handleChange, values, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit
  });

  const getError = (key: keyof TCreateDIDSchema) => {
    return touched[key] && errors[key];
  };
  return (
    <LoginWrapper
      title="Generate your DiD"
      href="/auth/login/individual"
      info="Already have a DID?"
      hrefText=" Verify now."
    >
      <div>
        <p className="text-sm text-black mb-2">Please select account type</p>
        <form onSubmit={handleSubmit}>
          {getError('acctType') && (
            <p className="text-sm text-error mb-1">{getError('acctType')}</p>
          )}
          <div className="flex flex-col mb-6 md:flex-row md:justify-between lg:justify-start lg:space-x-5">
            <div className="w-full md:w-[46%] lg:w-[230px] mb-4 md:mb-0">
              <RadioBtnInput
                id={'individual_input'}
                name={'acctType'}
                title={'Individual'}
                desc={'Generate a personal DiD.'}
                value={'individual'}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-[46%] lg:w-[230px]">
              <RadioBtnInput
                id={'institute_input'}
                name={'acctType'}
                title={'Institute'}
                desc={'Generate a DiD for hospitals'}
                onChange={handleChange}
                value={'institution'}
              />
            </div>
          </div>
          <Button isLoading={didLoading} type="submit" variant="filled" text="Generate DID" />
        </form>

        <div className="mt-8 flex justify-between items-center">
          <PrimaryInput
            css={'mb-4 w-[85%]'}
            id={'did'}
            name={'did'}
            value={generatedDid}
            placeholder={'your generated DID will appear here'}
            onChange={() => {}}
          />

          <div className="w-[10%] -mt-2">
            <CopyIcon css="text-4xl" />
          </div>
        </div>

        {generatedDid && (
          <Button
            isLoading={false}
            css="w-[150px] mt-8"
            type="button"
            variant="filled"
            text="Proceed"
            onClick={() => router.push(`/auth/create/profile/${values.acctType}`)}
          />
        )}
      </div>
    </LoginWrapper>
  );
};
export default CreateDidView;
