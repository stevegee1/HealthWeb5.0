import Image from 'next/image';
import { BarLoader } from 'react-spinners';
import Logo from '@/app/assets/images/logos/logo.svg';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 border z-50 h-screen w-[100vw] flex flex-col justify-center items-center bg-white">
      <BarLoader width={50} speedMultiplier={0.5} color="#0D1A92" />
      <div className="mt-6">
        <Image className="w-[150px]" alt="Healthweb5.0 logo" src={Logo} quality={100} />
      </div>
    </div>
  );
};

export default Loader;
