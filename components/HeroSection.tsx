'use client';

import { useState, useEffect } from 'react';
import {
  ChevronDown,
  FileText,
  Cpu,
  Code,
  CircuitBoard,
  Timer,
  Radio,
  Server,
  FileCode,
  Binary,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const roles = [
  'Senior Hardware Design Engineer',
  'Embedded Firmware Engineer',
  'AOSP & BSP Developer',
  'PCB Designer',
];

const technologies = [
  { name: 'Embedded C', icon: Code },
  { name: 'C++', icon: FileCode },
  { name: 'PCB Design', icon: CircuitBoard },
  { name: 'RTOS', icon: Timer },
  { name: 'AOSP/Android', icon: Radio },
  { name: 'Embedded Linux', icon: Server },
  { name: 'Firmware Development', icon: Cpu },
  { name: 'Verilog', icon: Binary },
];

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
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient dot-grid */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-sky-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-5">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono-tech text-emerald-400 animate-fade-in"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                available_for_work: true
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground animate-fade-in">
                Hi, I&apos;m <span className="gradient-text">Talmiz</span>
                <span className="text-emerald-400">.</span>
              </h1>

              <div className="h-10 sm:h-12">
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90 font-mono-tech">
                  {displayText}<span className="animate-blink text-emerald-400">_</span>
                </h2>
              </div>

              <p className="text-muted-foreground text-lg max-w-lg">
                I design and ship firmware for ARM-based Qualcomm platforms — from board bring-up
                and BSP customization to AOSP, OTA delivery, and the PCBs underneath it all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <Link
                href="https://www.linkedin.com/in/itstalmiz/"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-400 text-background px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow btn-animate relative overflow-hidden group w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Got a project?
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </Link>

              <Link href="/Resume_MTalmizUrRehman__General.pdf" target="_blank" rel="noopener noreferrer" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-foreground/[0.08] text-foreground/90 hover:text-emerald-400 hover:border-emerald-500/40 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  My resume
                </Button>
              </Link>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group text-center p-3 rounded-xl glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/[0.06]"
                >
                  <tech.icon className="w-5 h-5 mx-auto mb-2 text-emerald-400 group-hover:animate-pulse" />
                  <span className="text-muted-foreground text-[11px] font-medium group-hover:text-emerald-300 transition-colors leading-tight">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Glow ring */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/20 blur-2xl" />

                {/* Glass frame */}
                <div className="relative w-full h-full rounded-[2rem] glass border-foreground/[0.08] p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                    <img
                      src="/talmiz.jpeg"
                      alt="Talmiz"
                      className="w-full h-full object-cover grayscale-[55%] contrast-[1.05] saturate-75 transition-transform duration-700 hover:scale-105"
                    />
                    {/* Color-match overlay: pulls the photo's warm background toward the
                        site's slate/emerald palette instead of clashing with it */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-emerald-500/25 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating status card */}
                <div className="absolute -bottom-5 -left-5 glass border-foreground/[0.08] rounded-xl px-4 py-3 shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <div className="font-mono-tech text-xs">
                      <div className="text-foreground font-semibold">QCM6125</div>
                      <div className="text-muted-foreground">firmware.flash()</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass border-foreground/[0.08] rounded-full px-3 py-1.5 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <span className="font-mono-tech text-xs text-emerald-400">3+ yrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-emerald-400 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 group-hover:animate-pulse" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-transparent" />
          </div>
        </Button>
      </div>
    </section>
  );
}
