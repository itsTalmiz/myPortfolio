import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://itstalmiz.vercel.app'),
  title: 'Talmiz ur Rehman - Senior Hardware Design Engineer (Firmware)',
  description: 'Portfolio of M. Talmiz Ur Rehman — embedded firmware & hardware engineer specializing in Qualcomm QCM6125, AOSP/Android, BSP, and high-speed PCB design.',
  keywords: 'hardware engineer, embedded systems, firmware, AOSP, BSP, Qualcomm QCM6125, PCB design, embedded Linux',
  authors: [{ name: 'M. Talmiz Ur Rehman' }],
  creator: 'M. Talmiz Ur Rehman',
  publisher: 'M. Talmiz Ur Rehman',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Talmiz ur Rehman - Senior Hardware Design Engineer (Firmware)',
    description: 'Embedded firmware & hardware engineer specializing in Qualcomm QCM6125, AOSP/Android, BSP, and high-speed PCB design.',
    siteName: 'Talmiz ur Rehman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talmiz ur Rehman - Senior Hardware Design Engineer (Firmware)',
    description: 'Embedded firmware & hardware engineer specializing in Qualcomm QCM6125, AOSP/Android, BSP, and high-speed PCB design.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
