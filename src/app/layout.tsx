import { Metadata } from 'next';
//Internal app
import { RootLayoutProps } from '@/interfaces';
import axios from 'axios';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Indigo',
      default: 'Indigo',
    },
    description: '',
    icons: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        url: '/images/favicon.ico',
      },
    ],
  };
}

async function getData() {
  const res = await axios.post('https://conection-modules-next13.vercel.app/api/conectApi');

  return res;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();
  console.log('🚀 ~ file: layout.tsx:33 ~ RootLayout ~ data:', data);
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
