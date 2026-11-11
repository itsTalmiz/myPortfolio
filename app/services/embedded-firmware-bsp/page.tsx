import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cpu, Terminal, Radio, Server, CheckCircle2, ArrowUpRight, FileCode, Layers, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Qualcomm BSP Board Bring-Up & Embedded Firmware Engineering | Talmiz ur Rehman',
  description:
    'Specialized embedded firmware and Linux BSP board bring-up services on Qualcomm QCM6125, Quectel SOMs, and ARM platforms. AOSP customization, kernel drivers, and OTA architecture.',
  keywords: [
    'Qualcomm BSP Board Bring-Up',
    'Qualcomm QCM6125 Firmware Engineer',
    'Quectel SC668S Developer',
    'Embedded Firmware Engineer Islamabad',
    'AOSP Linux Kernel Driver Development',
    'Linux Device Driver Integration',
    'Embedded C C++ Firmware Consultant',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/services/embedded-firmware-bsp',
  },
};

const capabilities = [
  {
    icon: Cpu,
    title: 'Qualcomm QCM6125 / SOM Board Bring-Up',
    description:
      'Complete board bring-up on ARM Qualcomm QCM6125 and Quectel SC668S SOM platforms. Configuration of bootloaders, device trees, power management ICs (PMIC), and early hardware initialization.',
  },
  {
    icon: Terminal,
    title: 'Linux Kernel & Device Driver Development',
    description:
      'Custom Linux kernel driver implementation and debugging across I2C, SPI, UART, MIPI DSI display bridges, and MIPI CSI camera subsystems. Performance tracing and crash dump analysis.',
  },
  {
    icon: Radio,
    title: 'AOSP & Android OS Customization',
    description:
      'Tailoring Android Open Source Project (AOSP) builds for industrial and edge devices. Custom HAL integration, peripheral HAL bridging, SELinux policies, and Android framework tuning.',
  },
  {
    icon: Server,
    title: 'Over-The-Air (OTA) Update Systems',
    description:
      'Full and incremental OTA update delivery pipelines for fleet devices. Partition layout management, recovery mode verification, and secure cryptographic signing.',
  },
  {
    icon: Layers,
    title: 'RTOS & Low-Power Embedded Firmware',
    description:
      'Bare-metal and FreeRTOS firmware development in C and C++. Power-rail optimization, dynamic frequency scaling, thermal mitigation, and battery fuel gauge calibration.',
  },
  {
    icon: ShieldCheck,
    title: 'Hardware-Software Co-Verification',
    description:
      'Bridge debugging between board schematics and low-level code using logic analyzers, oscilloscopes, GDB, QFIL, and Qualcomm diagnostic toolsets (QPST).',
  },
];

const technologies = [
  'Qualcomm QCM6125',
  'Quectel SC668S SOM',
  'Embedded Linux Kernel',
  'Android (AOSP)',
  'Embedded C / C++',
  'FreeRTOS',
  'Device Tree (.dts)',
  'OTA Updates',
  'MIPI DSI & CSI',
  'I2C / SPI / UART',
  'QPST / QFIL',
  'Perfetto & GDB',
];

export default function EmbeddedFirmwareBspPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="glass border-b border-foreground/[0.08] relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Firmware &amp; BSP Services
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <div className="mb-16 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono-tech text-emerald-400">
            <span>Specialized Engineering Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Qualcomm BSP Board Bring-Up &amp; <span className="gradient-text">Embedded Firmware</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial silicon power-on to production-ready Android/Linux builds. Specialized in 
            ARM-based Qualcomm QCM6125 and Quectel SOM architectures, custom driver integration, AOSP 
            customization, and reliable Over-The-Air (OTA) delivery.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="https://www.linkedin.com/in/itstalmiz/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold">
                Discuss Your Hardware
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/case-studies/qualcomm-qcm6125-bringup">
              <Button variant="outline" className="glass border-foreground/10 hover:border-emerald-500/40">
                View QCM6125 Case Study
              </Button>
            </Link>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mb-16 p-6 rounded-2xl glass border-foreground/[0.08] bg-foreground/[0.01]">
          <h2 className="text-xs font-mono-tech text-emerald-400 uppercase tracking-wider mb-4">
            // Core Platform &amp; Silicon Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-foreground/[0.04] border border-foreground/[0.08] text-foreground/80 hover:border-emerald-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Capabilities &amp; Technical Scope
            </h2>
            <p className="text-sm text-muted-foreground">
              End-to-end firmware development across the entire embedded systems lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card
                key={cap.title}
                className="glass border-foreground/[0.08] hover:border-emerald-500/30 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Callout */}
        <div className="p-8 rounded-2xl glass border-emerald-500/20 bg-emerald-500/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-wider">
              Featured Case Study
            </span>
            <h3 className="text-xl font-bold text-foreground">
              Qualcomm QCM6125 Board Bring-Up &amp; AOSP Customization
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Detailed walkthrough of integrating the LT9211D MIPI-to-LVDS bridge, PN7220 NFC payment controller,
              and high-speed flex PCB for mass production in Shenzhen.
            </p>
          </div>
          <Link href="/case-studies/qualcomm-qcm6125-bringup" className="shrink-0">
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold">
              Read Case Study
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
