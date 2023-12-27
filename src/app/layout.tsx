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

async function getProjects() {
  const res = await axios.post('/api/conectApi');
  const projects = res;

  return projects;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const projects = await getProjects();
  console.log('🚀 ~ file: layout.tsx:33 ~ RootLayout ~ data:', projects);
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
