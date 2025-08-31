import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Talmiz ur Rehman - Hardware Embedded Systems Engineer',
  description: 'Professional portfolio of Talmiz ur Rehman, a passionate Hardware Embedded Systems Engineer specializing in IoT, PCB design, and firmware development.',
  keywords: 'hardware engineer, embedded systems, IoT, PCB design, firmware development, electronics',
  authors: [{ name: 'Talmiz ur Rehman' }],
  creator: 'Talmiz ur Rehman',
  publisher: 'Talmiz ur Rehman',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
  colorScheme: 'dark',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Talmiz ur Rehman - Hardware Embedded Systems Engineer',
    description: 'Professional portfolio showcasing innovative hardware solutions and embedded systems development.',
    siteName: 'Talmiz ur Rehman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talmiz ur Rehman - Hardware Embedded Systems Engineer',
    description: 'Professional portfolio showcasing innovative hardware solutions and embedded systems development.',
    creator: '@HaseeburRehma',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
