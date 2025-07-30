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
  description: 'Professional portfolio of Alex Thompson, a passionate Hardware Embedded Systems Engineer specializing in IoT, PCB design, and firmware development.',
  keywords: 'hardware engineer, embedded systems, IoT, PCB design, firmware development, electronics',
  authors: [{ name: 'Alex Thompson' }],
  creator: 'Alex Thompson',
  publisher: 'Alex Thompson',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
  colorScheme: 'dark',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Talmiz ur Rehman - Hardware Embedded Systems Engineer',
    description: 'Professional portfolio showcasing innovative hardware solutions and embedded systems development.',
    siteName: 'Alex Thompson Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talmiz ur Rehman - Hardware Embedded Systems Engineer',
    description: 'Professional portfolio showcasing innovative hardware solutions and embedded systems development.',
    creator: '@HaseeburRehma',
  },
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