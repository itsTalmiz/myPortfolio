import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

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

const siteUrl = 'https://itstalmiz.com';
const siteTitle = 'Talmiz ur Rehman — Senior Hardware Design Engineer (Firmware)';
const siteDescription =
  'Portfolio of M. Talmiz Ur Rehman — Embedded firmware & hardware design engineer specializing in Qualcomm QCM6125 platforms, Linux/BSP & AOSP customization, and high-speed multilayer PCB design.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | M. Talmiz Ur Rehman',
  },
  description: siteDescription,
  keywords: [
    'M. Talmiz Ur Rehman',
    'Talmiz ur Rehman',
    'Hardware Design Engineer',
    'Embedded Firmware Engineer',
    'Qualcomm QCM6125',
    'Quectel SC668S',
    'AOSP Customization',
    'BSP Development',
    'Embedded Linux',
    'PCB Design',
    'Altium Designer',
    'High Speed PCB',
    'FreeRTOS',
    'Shenzhen SMT Mass Production',
  ],
  authors: [{ name: 'M. Talmiz Ur Rehman', url: siteUrl }],
  creator: 'M. Talmiz Ur Rehman',
  publisher: 'M. Talmiz Ur Rehman',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'M. Talmiz Ur Rehman Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'M. Talmiz Ur Rehman — Senior Hardware Design Engineer (Firmware)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/twitter-image'],
    creator: '@itstalmiz',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'M. Talmiz Ur Rehman',
      alternateName: 'Talmiz ur Rehman',
      jobTitle: 'Senior Hardware Design Engineer (Firmware)',
      worksFor: {
        '@type': 'Organization',
        name: 'AIO APP Inc',
      },
      url: siteUrl,
      email: 'mailto:contact@itstalmiz.com',
      telephone: '+923365267868',
      image: `${siteUrl}/talmiz.jpeg`,
      sameAs: [
        'https://www.linkedin.com/in/itstalmiz/',
        'https://github.com/itstalmiz',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'COMSATS University Islamabad',
      },
      knowsAbout: [
        'Qualcomm QCM6125 / Quectel SC668S',
        'Firmware Engineering & Bring-up',
        'AOSP / Android BSP',
        'Embedded Linux Kernel Drivers',
        'High-Speed PCB Design (Altium Designer)',
        'FreeRTOS & Embedded C/C++',
        'Shenzhen SMT Mass Production & GMS Flashing',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'M. Talmiz Ur Rehman — Portfolio',
      description: siteDescription,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Talmiz ur Rehman — Senior Hardware Design Engineer (Firmware)',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      mainEntity: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs Full Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
