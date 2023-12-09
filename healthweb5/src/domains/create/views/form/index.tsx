'use client';
import { LoginWrapper } from '@/components';
import { Button, InputPassword, RadioBtnInput } from '@/atoms';

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

        
      </div>
    </LoginWrapper>
  );
};

export default CreateDidView;
