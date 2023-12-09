'use client';
import { LoginWrapper } from '@/components';
import { Button, CopyIcon, PrimaryInput, RadioBtnInput } from '@/atoms';

const CreateDidView = () => {
  return (
    <LoginWrapper
      title="Generate your DiD"
      href="/auth/login/individual"
      info="Already have a DID?"
      hrefText=" Verify now."
    >
      <div>
        <p className="text-sm text-black mb-2">Please select account type</p>
        <div className="flex flex-col mb-6 md:flex-row md:justify-between lg:justify-start lg:space-x-5">
          <div className="w-full md:w-[46%] lg:w-[230px] mb-4 md:mb-0">
            <RadioBtnInput
              id={'individual_input'}
              name={'acct_type'}
              title={'Individual'}
              desc={'Generate a personal DiD.'}
              onChange={() => {}}
            />
          </div>
          <div className="w-full md:w-[46%] lg:w-[230px]">
            <RadioBtnInput
              id={'institute_input'}
              name={'acct_type'}
              title={'Institute'}
              desc={'Generate a DiD for hospitals'}
              onChange={() => {}}
            />
          </div>
        </div>
        <Button type="submit" variant="filled" text="Generate DID" />

        <div className="mt-8 flex justify-between items-center">
          <PrimaryInput
            css={'mb-4 w-[85%]'}
            id={'did'}
            name={'did'}
            placeholder={'your generated DID will appear here'}
            onChange={() => {}}
          />

          <div className='w-[10%] -mt-2'>
            <CopyIcon css="text-4xl" />
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default CreateDidView;
