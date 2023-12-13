'use client';
import { PrimaryInput, CopyIcon, Title, Button } from '@/atoms';
import { HeadBand } from '@/components';
import { StaticImageData } from 'next/image';

interface IDetailsViewProps {
  data?: {
    id: number;
    name: string;
    avatar: StaticImageData;
  };
}

const DetailsView = ({ data }: IDetailsViewProps) => {
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
                placeholder={'did:example:123456789abcdefghi'}
                onChange={() => {}}
              />

              <div className="w-[10%] -mt-2">
                <CopyIcon css="text-4xl" />
              </div>
            </div>
            <Button css='bg-black w-[100px]' variant="filled" type="submit" text="Verify" />
          </div>
        </div>

        <div className="w-full max-w-xl mx-auto flex mt-16 justify-between items-center">
          <Button
            css="w-[47%] bg-progressGreen"
            type="button"
            variant="filled"
            text="Grant Access"
          />
          <Button css="w-[47%] bg-[#cc0b0b]" type="button" variant="filled" text="Revoke Access" />
        </div>
      </div>
    </main>
  );
};

export default DetailsView;
