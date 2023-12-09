import React from 'react';
import Link from 'next/link';
import HeaderBand from '../HeadBand';
import { HyperLink, Title } from '@/atoms';

interface ILoginWrapperProps {
  title: string;
  href: string;
  info: string;
  hrefText: string;
  children: React.ReactNode;
}

const LoginWrapper = ({ title, href, info, hrefText, children }: ILoginWrapperProps) => {
  return (
    <section>
      <Link href={{ pathname: '/' }}>
        <HeaderBand />
      </Link>

      <div className="mt-8 w-full max-w-[500px] mx-auto">
        <Title css="" text={title} />
        <HyperLink href={href} info={info} hrefText={hrefText} />

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
};

export default LoginWrapper;
