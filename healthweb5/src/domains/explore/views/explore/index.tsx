'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryInput } from '@/atoms';
import { HeadBand } from '@/components';
import { hospitalData } from '@/app/assets/data/explore';
import { convertString } from '@/utils/convertString';

const ExploreView = () => {
  return (
    <main>
      <HeadBand name="Explore" />

      <div className="w-[90%] max-w-3xl mx-auto my-6">
        <PrimaryInput
          css="mb-8"
          id={'search'}
          name={'search'}
          placeholder={'Search hospitals...'}
          onChange={() => {}}
        />

        {hospitalData.map((hospital, index) => {
          const { name, avatar } = hospital;
          return (
            <div key={index} className="flex justify-start items-center mb-4 last:mb-0">
              <Image src={avatar} alt="" quality={100} className="mr-3 rounded w-[80px]" />

              <Link href={`/explore/${convertString(name, 'snake')}`}>
                <p className="text-deepBlue hover:underline">{name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ExploreView;
