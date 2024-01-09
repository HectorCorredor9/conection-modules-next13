import { Metadata } from 'next';
//Internal app
import { RootLayoutProps } from '@/interfaces';

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
  const res = await fetch('/api/conectApi');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
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
