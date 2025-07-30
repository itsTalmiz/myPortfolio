'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Server, Cpu, Zap, Shield, Wifi, Settings, Wrench } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Hardware Design',
    description: 'Complete PCB design and circuit analysis for embedded systems with advanced signal integrity',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Embedded Development',
    description: 'Firmware development and real-time system programming with optimized performance',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wifi,
    title: 'System Integration',
    description: 'IoT architecture and wireless communication protocols for seamless connectivity',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { number: '20', symbol: '+', label: 'Completed Projects', icon: Settings },
  { number: '9', symbol: '%', label: 'Client satisfaction', icon: Shield },
  { number: '3', symbol: '+', label: 'Years of experience', icon: Wrench },
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
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-white">
      {count}
      <span className="text-orange-500">{symbol}</span>
    </div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1a2332] relative overflow-hidden">
      {/* Hardware Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="pcb-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <circle cx="25" cy="25" r="3" fill="#f97316" opacity="0.3" />
              <path d="M0 25h50M25 0v50" stroke="#f97316" strokeWidth="0.3" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pcb-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Services with Hardware Timeline */}
          <div className="space-y-8">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-6 group animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative">
                    {/* Hardware Connection Node */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                      <service.icon className="w-8 h-8 text-white relative z-10" />
                      {/* Circuit Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-2 left-2 w-2 h-2 border border-white rounded-full" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 border border-white rounded-full" />
                        <div className="absolute top-2 right-2 bottom-2 left-2 border border-white/30 rounded" />
                      </div>
                    </div>

                    {/* Connection Line */}
                    {index < services.length - 1 && (
                      <div className="absolute top-16 left-8 w-0.5 h-16 bg-gradient-to-b from-orange-500 to-orange-300 animate-pulse" style={{ animationDelay: `${index * 0.5}s` }} />
                    )}
                  </div>

                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - About Content with Enhanced Design */}
          <div className="space-y-8">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative">
                About me
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full" />
              </h2>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Embedded firmware engineer with 2 years of hands-on experience in firmware development and hardware integration, specializing in Qualcomm QCM6125
                  platform and advanced PCB design.

                </p>
                <p className="text-gray-400 leading-relaxed">
                  Successfully led firmware development initiatives that enabled seamless integration of display, touch, and camera modules,
                  and significantly improved reverse wireless charging performance through precise impedance tuning.
                </p>
              </div>
            </div>

            {/* Enhanced Stats with Hardware Theme */}
            <div className="grid grid-cols-3 gap-6 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 p-6 text-center group"
                >
                  <div className="mb-4">
                    <stat.icon className="w-8 h-8 mx-auto text-orange-500 group-hover:animate-pulse" />
                  </div>
                  <CountUpAnimation
                    end={parseInt(stat.number)}
                    symbol={stat.symbol}
                  />
                  <p className="text-gray-400 text-sm font-medium mt-2 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>

                  {/* Hardware Detail Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-orange-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              ))}
            </div>

            {/* Hardware Specializations */}
            <div className="animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-bold text-white mb-4">Hardware Specializations</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'ARM Cortex-M/A Series',
                  'Power Management ICs',
                  'RF Circuit Design',
                  'Sensor Integration',
                  'Motor Control Systems',
                  'Communication Protocols'
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:animate-pulse" />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}