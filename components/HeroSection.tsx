'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText, Cpu, Zap, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from "next/image"
import Link from "next/link"

const roles = [
  'Hardware Engineer',
  'Embedded Systems Developer',
  'PCB Designer',
  'IoT Architect',
  'Firmware Developer',
];

const technologies = [
  { name: 'ARM Cortex', icon: Cpu },
  { name: 'C/C++', icon: Zap },
  { name: 'PCB Design', icon: Cpu },
  { name: 'RTOS', icon: Zap },
  { name: 'IoT Protocols', icon: Wifi },
  { name: 'Embedded Linux', icon: Cpu },
  { name: 'Power Systems', icon: Zap },
  { name: 'Signal Processing', icon: Wifi }
];

// Hardware-themed floating particles
const FloatingParticle = ({ delay, duration, size }: { delay: number; duration: number; size: number }) => (
  <div
    className={`absolute w-${size} h-${size} bg-orange-500/20 rounded-full animate-float`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRole];

      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        setTypeSpeed(75);
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typeSpeed]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-[#1a2332] relative overflow-hidden">
      {/* Hardware Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" stroke="#f97316" strokeWidth="0.5" fill="none" />
              <circle cx="20" cy="20" r="2" fill="#f97316" />
              <circle cx="80" cy="80" r="2" fill="#f97316" />
              <path d="M20 20L80 80M80 20L20 80" stroke="#f97316" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Hardware Elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          duration={3 + (i % 3)}
          size={1 + (i % 3)}
        />
      ))}

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-0.5 bg-gradient-to-r from-orange-500 to-transparent animate-pulse-slow" />
        <div className="absolute top-40 right-40 w-0.5 h-24 bg-gradient-to-b from-orange-500 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-40 w-24 h-0.5 bg-gradient-to-r from-transparent to-orange-500 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-0.5 h-32 bg-gradient-to-t from-transparent to-orange-500 animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white animate-fade-in">
                Hello<span className="text-orange-500 animate-pulse">.</span>
              </h1>
              <div className="space-y-2">
                <p className="text-2xl text-gray-300 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>I'm Talmiz Ur Rehman</p>
                <div className="h-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">
                    {displayText}<span className="animate-blink text-orange-500">|</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <Link
                href="https://www.linkedin.com/in/itstalmiz/"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 btn-animate relative overflow-hidden group"
                >
                  <span className="relative z-10">Got a project?</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Button>
              </Link>

              {/* Resume */}
              <Link href="/Resume_MTalmizUrRehman.pdf" target="_blank" rel="noopener noreferrer" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-600 text-gray-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  My resume
                </Button>
              </Link>
            </div>

            {/* Technologies Grid with Hardware Icons */}
            <div className="grid grid-cols-4 gap-4 pt-8 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group text-center p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-orange-500/10"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <tech.icon className="w-6 h-6 mx-auto mb-2 text-orange-500 group-hover:animate-pulse" />
                  <span className="text-gray-400 text-xs font-medium group-hover:text-orange-400 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image with Hardware Container */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Hardware-themed Container Border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer Circuit Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-orange-500/30 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
                </div>

                {/* Inner Gradient Border */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-1 animate-pulse-orange">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 border-4 border-gray-900">
                    <img
                      src="/talmiz.jpeg"
                      alt="talmiz"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Hardware Corner Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-orange-500 rotate-45 bg-[#1a2332] animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-orange-500 rotate-45 bg-[#1a2332] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/4 -right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Hardware Theme */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          onClick={scrollToNext}
          className="text-gray-400 hover:text-orange-500 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 group-hover:animate-pulse" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
          </div>
        </Button>
      </div>
    </section>
  );
}