'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button, Title } from '@/atoms';
import { Navbar } from '@/components';
import Banner from '@/app/assets/images/home_banner.svg';

const HomeView = () => {
  const router = useRouter();
  return (
    <main className="">
      <Navbar />

      <section className="py-8 md:py-0 w-[90%] h-[50vh] md:h-[85vh] max-width-9xl mx-auto flex flex-col md:flex-row-reverse md:justify-between items-center">
        <figure className="mb-16 md:w-[45%]">
          <Image className="w-full" alt="Records" src={Banner} quality={100} />
        </figure>

        <div className="md:w-[45%]">
          <Title
            css="lg:text-5xl"
            text="Building a personal web for you and your health records."
          />

          <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:w-fit md:space-y-0 md:space-x-4 mt-6">
            <Button
              css="w-full md:w-fit px-4"
              type="submit"
              variant="filled"
              text="Individual Login"
              onClick={() => router.push('/auth/login/individual')}
            />

            <Button
              css="w-full md:w-fit px-4"
              type="submit"
              variant="transparent"
              text="Hospital Login"
              onClick={() => router.push('/auth/login/institute')}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeView;
