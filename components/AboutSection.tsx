'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/Reveal';
import { Code, Smartphone, Server, Cpu, Zap, Shield, Wifi, Settings, Wrench, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Firmware & Linux BSP Bring-Up',
    description: 'Qualcomm QCM6125 and Quectel SOM board bring-up, Linux kernel/BSP, Android AOSP customization, and device drivers for display, touch, camera, and audio.',
    href: '/services/embedded-firmware-bsp',
  },
  {
    icon: Zap,
    title: 'High-Speed Multilayer PCB Design',
    description: 'Altium Designer high-speed flex and multilayer PCB layout with controlled impedance, EMI/EMC compliance, signal integrity (SI), and antenna tuning.',
    href: '/services/hardware-pcb-design',
  },
  {
    icon: Wifi,
    title: 'Mass Production & Shenzhen NPI',
    description: 'SMT oversight, GMS key flashing/provisioning, FCC/CE compliance testing, and hardware production-line validation through to shipment.',
    href: '/case-studies/qualcomm-qcm6125-bringup',
  },
];

const stats = [
  { number: '50', symbol: '+', label: 'Completed Projects', icon: Settings },
  { number: '99', symbol: '%', label: 'Client satisfaction', icon: Shield },
  { number: '3', symbol: '+', label: 'Years of experience', icon: Wrench },
];

const specializations = [
  'ARM Cortex (QCM6125)',
  'AOSP & BSP Customization',
  'NFC PN7220 & LVDS LT9211D',
  'Touch (I2C) & MIPI Camera',
  'High-Speed Flex & Antenna Design',
  'China Mass Prod & GMS Key Flashing',
];

const CountUpAnimation = ({ end, duration = 2000, symbol = '' }: { end: number; duration?: number; symbol?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-foreground font-mono-tech">
      {count}
      <span className="text-emerald-400">{symbol}</span>
    </div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 100}>
                <Link href={service.href} className="block">
                  <Card className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 p-6 group cursor-pointer">
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all duration-300">
                        <service.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-400 transition-colors">
                            {service.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 relative">
                About Me
                <span className="sr-only"> — Hardware Design &amp; Embedded Firmware Engineer in Islamabad</span>
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full" />
              </h2>
              <Card className="glass border-foreground/[0.06] p-8 hover:border-emerald-500/20 transition-all duration-300">
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                  Embedded firmware and hardware engineer with 3 years across the full product lifecycle — firmware and BSP bring-up,
                  PCB design, hardware integration, and mass production. Hands-on with ARM-based Qualcomm QCM6125 / Quectel SOM platforms,
                  Android (AOSP), OTA, and high-speed multilayer PCB design in Altium.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Proven at taking products from prototype to production, working shoulder-to-shoulder with cross-functional hardware teams,
                  mentoring junior engineers, and building structured technical documentation.
                </p>
              </Card>
            </Reveal>

            {/* Stats */}
            <Reveal delay={150}>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 p-5 text-center group relative overflow-hidden"
                  >
                    <div className="mb-3">
                      <stat.icon className="w-6 h-6 mx-auto text-emerald-400 group-hover:animate-pulse" />
                    </div>
                    <CountUpAnimation
                      end={parseInt(stat.number)}
                      symbol={stat.symbol}
                    />
                    <p className="text-muted-foreground text-xs font-medium mt-2 group-hover:text-foreground/80 transition-colors">
                      {stat.label}
                    </p>
                  </Card>
                ))}
              </div>
            </Reveal>

            {/* Specializations */}
            <Reveal delay={250}>
              <h3 className="text-lg font-bold text-foreground mb-4 font-mono-tech">// specializations</h3>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 glass border-foreground/[0.06] rounded-lg hover:border-emerald-500/30 transition-all duration-300 group"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0 group-hover:animate-pulse" />
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{spec}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
