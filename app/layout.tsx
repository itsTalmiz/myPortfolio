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
const siteTitle = 'M. Talmiz ur Rehman | Embedded Firmware & Hardware Design Engineer in Islamabad';
const siteDescription =
  'Senior Hardware Design & Embedded Firmware Engineer in Islamabad. Full-spectrum expertise: from bare-metal C & FreeRTOS on STM32 / ESP32 microcontrollers to Qualcomm BSP, AOSP customization, and Altium high-speed PCB design.';

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
    'Hardware Design Engineer in Islamabad',
    'Embedded Firmware Engineer Islamabad',
    'STM32 Firmware Developer',
    'ESP32 IoT Developer',
    'Bare-Metal C Embedded Developer',
    'ARM Cortex-M Microcontroller Engineer',
    'Qualcomm BSP Board Bring-Up',
    'Qualcomm QCM6125 Firmware Engineer',
    'Quectel SC668S Developer',
    'AOSP Linux Kernel Driver Development',
    'High Speed Multilayer PCB Design Consultant',
    'Altium Designer Flex PCB',
    'Shenzhen SMT Mass Production',
    'FCC EMI EMC Compliance Hardware',
    'Embedded Hardware Design Consultant Islamabad',
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
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
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
        'STM32 & ARM Cortex-M Microcontrollers (Bare-Metal C & FreeRTOS)',
        'ESP32 / ESP8266 IoT & Cloud Telemetry',
        'Hardware Peripheral Drivers (DMA, Timers/PWM, ADC, CAN, SPI, I2C, UART)',
        'Qualcomm QCM6125 / Quectel SC668S Platform Bring-Up',
        'Firmware Engineering & Board Bring-up',
        'AOSP / Android BSP Customization',
        'Embedded Linux Kernel Drivers (I2C, SPI, MIPI, UART, LVDS, NFC)',
        'High-Speed Multilayer PCB Design (Altium Designer)',
        'Shenzhen SMT Mass Production & GMS Flashing',
        'FCC EMI EMC Compliance & Antenna Tuning',
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
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/stm32-esp32-firmware/#service`,
      name: 'STM32 & ESP32 Microcontroller Firmware Development',
      provider: {
        '@id': `${siteUrl}/#person`,
      },
      serviceType: 'Embedded Firmware Engineering',
      description: 'Production-grade microcontroller firmware engineering in bare-metal C and FreeRTOS for STM32, ESP32, CAN bus, and low-power IoT devices.',
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide',
      },
      url: `${siteUrl}/services/stm32-esp32-firmware`,
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/embedded-firmware-bsp/#service`,
      name: 'Qualcomm QCM6125 Board Bring-Up & Embedded Linux BSP Services',
      provider: {
        '@id': `${siteUrl}/#person`,
      },
      serviceType: 'Firmware & BSP Engineering',
      description: 'Full hardware bring-up, Linux kernel drivers, AOSP customization, and OTA systems for Qualcomm QCM6125 and Quectel SC668S platforms.',
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide',
      },
      url: `${siteUrl}/services/embedded-firmware-bsp`,
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/services/hardware-pcb-design/#service`,
      name: 'High-Speed Multilayer PCB Layout & Altium Hardware Engineering',
      provider: {
        '@id': `${siteUrl}/#person`,
      },
      serviceType: 'Hardware & PCB Design',
      description: 'High-speed multilayer and flex PCB design with controlled impedance, EMI/EMC compliance, SI/PI, and Shenzhen DFM optimization.',
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide',
      },
      url: `${siteUrl}/services/hardware-pcb-design`,
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
