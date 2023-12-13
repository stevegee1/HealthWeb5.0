'use client';
import { PrimaryInput, CopyIcon, Title, Button } from '@/atoms';
import { HeadBand } from '@/components';
import { getDid } from '@/helpers/didTokens';
import { StaticImageData } from 'next/image';
import { verifyCredential } from '../../../../../web5/verifyCredential';
import { Toast } from '@/config';
import { grantAccess } from '../../../../../web5/grantAccess';

interface IDetailsViewProps {
  data?: {
    id: number;
    name: string;
    avatar: StaticImageData;
  };
}

const DetailsView = ({ data }: IDetailsViewProps) => {
  const ultron =
    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDprZXk6ejZNa3Buam9FZU5xR1pCbnJIM2NHTHk3NEdtcndDa2drTVc3UjJEd2pKdjRiREE3I3o2TWtwbmpvRWVOcUdaQm5ySDNjR0x5NzRHbXJ3Q2tna01XN1IyRHdqSnY0YkRBNyJ9.eyJpc3MiOiJkaWQ6a2V5Ono2TWtwbmpvRWVOcUdaQm5ySDNjR0x5NzRHbXJ3Q2tna01XN1IyRHdqSnY0YkRBNyIsInN1YiI6ImRpZDprZXk6ejZNa2ptUXg0ZlZWcVdjVlRKcDd4YkxTWHp5YmlCY0NrTWNiUnZMSjdtUWVlY1ZjIiwidmMiOnsidHlwZSI6Ikhvc3BpdGFsIEFjY3JlZGl0YXRpb24iLCJpc3N1ZXIiOiJkaWQ6a2V5Ono2TWtwbmpvRWVOcUdaQm5ySDNjR0x5NzRHbXJ3Q2tna01XN1IyRHdqSnY0YkRBNyIsInN1YmplY3QiOiJkaWQ6a2V5Ono2TWtqbVF4NGZWVnFXY1ZUSnA3eGJMU1h6eWJpQmNDa01jYlJ2TEo3bVFlZWNWYyIsImRhdGEiOnsibmFtZSI6InBsYWNlSG9sZGVyIGZvciB0aGUgbmFtZSBvZiB0aGUgaG9zcGl0YWwiLCJzdGF0ZUNvZGUiOiIjIn19fQ.6HrPBxDnbWEn2azTHvJdvzFMiXdpRgcqqu6POfdBeAYUMMTDazNMcJB7mx7tGl275C5QKktAITsWVOgEFW9lDA';

  const handleVerifyCred = async () => {
    const res = await verifyCredential(ultron);

    if (res) {
      Toast.success('Credential verified!');
    } else {
      Toast.error('Credential not verified!');
    }
  };

  const handleGrantAccess = async () => {
    const res = await grantAccess(ultron);

    if (res?.status.code === 200) {
      Toast.success('Access granted!');
    } else {
      Toast.error('Unable to grant access!');
    }
  };
  return (
    <main>
      <HeadBand name={data?.name} />

      <div className="w-[90%] mt-6 max-w-3xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start">
          <div className="w-full lg:w-[45%]">
            <Title css="lg:text-lg" text="Institution DID" />
            <div className="mt-8 flex justify-between items-center">
              <PrimaryInput
                css={'mb-4 w-[85%]'}
                id={'did'}
                name={'did'}
                value={getDid()}
                placeholder={'did:example:123456789abcdefghi'}
                onChange={() => {}}
              />

              <div className="w-[10%] -mt-2">
                <CopyIcon css="text-4xl" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <Title css="lg:text-lg" text="COHASASA Accredited Credential" />

            <div className="mt-8 flex justify-between items-center">
              <PrimaryInput
                css={'mb-4 w-[85%]'}
                id={'did'}
                name={'did'}
                value={ultron}
                placeholder={'did:example:123456789abcdefghi'}
                onChange={() => {}}
              />

              <div className="w-[10%] -mt-2">
                <CopyIcon css="text-4xl" />
              </div>
            </div>
            <Button
              css="bg-black w-[100px]"
              variant="filled"
              type="submit"
              text="Verify"
              onClick={handleVerifyCred}
            />
          </div>
        </div>

        <div className="w-full max-w-xl mx-auto flex mt-16 justify-between items-center">
          <Button
            css="w-[45%] bg-progressGreen"
            type="button"
            variant="filled"
            text="Grant Access"
            onClick={handleGrantAccess}
          />
          <Button
            css="w-[45%] bg-[#cc0b0b] text-white"
            type="button"
            variant="outlined"
            text="Revoke Access"
          />
        </div>
      </div>
    </main>
  );
};

export default DetailsView;
