'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '@/app/assets/images/logos/logo.svg';
import { MdOutlineArrowBackIos } from 'react-icons/md';

interface IHeadBandProps {
  name?: string;
}

const HeadBand = ({ name }: IHeadBandProps) => {
  const router = useRouter();
  return (
    <header className="bg-white shadow">
      <div className="w-[90%] max-w-9xl mx-auto py-2 flex justify-between items-center">
        <MdOutlineArrowBackIos
          onClick={() => router.back()}
          className="text-xl cursor-pointer hover:text-base transition-all duration-150"
        />
        {name ? (
          <p className='font-uber text-xl'>{name}</p>
        ) : (
          <Image className="w-[150px]" alt="Healthweb5.0 logo" src={Logo} quality={100} />
        )}
        <p></p>
      </div>
    </header>
  );
};

export default HeadBand;
