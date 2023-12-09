'use client';
import { LoginWrapper } from '@/components';
import { Button, InputPassword } from '@/atoms';

function InstituteLoginView() {
  return (
    <LoginWrapper
      title="Sign in as a Hospital"
      href=""
      info="Do not have a DID?"
      hrefText=" Generate one now."
    >
      <div>
        <InputPassword
          css={'mb-4'}
          id={'did'}
          label={'Your DID'}
          name={'did'}
          placeholder={'Enetr your DID'}
          onChange={() => {}}
        />

        <Button type="submit" variant="filled" text="Submit" />
      </div>
    </LoginWrapper>
  );
}

export default InstituteLoginView;
