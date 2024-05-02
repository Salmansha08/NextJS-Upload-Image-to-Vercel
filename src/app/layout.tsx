import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const SourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Upload Image App Vercel',
  description: 'App Upload Image to Vercel Storage and Vercel Database',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SourceSans.className}>
        <div className="mt-20">
          <Navbar title={'Upload Image App'} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
