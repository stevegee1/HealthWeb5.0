import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import './globals.css';

const uberMoveMedium = localFont({
  src: './assets/fonts/UberMove-Medium.woff2',
  variable: '--uberMoveMedium'
});

const groteskBook20 = localFont({
  src: './assets/fonts/Sharp-Grotesk-Book-20-Regular.woff2',
  variable: '--groteskBook20'
});

const groteskMedium20 = localFont({
  src: './assets/fonts/Sharp_Grotesk_Medium_20.woff2',
  variable: '--groteskMedium20'
});

const groteskSemiBold20 = localFont({
  src: './assets/fonts/Sharp_Grotesk_SmBold_20.woff2',
  variable: '--groteskSemiBold20'
});

export const metadata: Metadata = {
  title: 'Healthweb5.0',
  description: '...building a personal web for your health records'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${uberMoveMedium.variable} ${groteskMedium20.variable} ${groteskSemiBold20.variable} ${groteskBook20.variable}`}
    >
      <body className="font-book w-full">
        <Toaster position="top-center" reverseOrder={false} />
        <div>{children}</div>
      </body>
    </html>
  );
}
