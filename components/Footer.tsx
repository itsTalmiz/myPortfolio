'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-foreground/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-1 font-mono-tech">Talmiz Ur Rehman</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Senior Hardware Design &amp; Embedded Firmware Engineer
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground/80 font-mono-tech">
              <Link href="/services/embedded-firmware-bsp" className="hover:text-emerald-400 transition-colors">
                Firmware &amp; BSP
              </Link>
              <span>/</span>
              <Link href="/services/stm32-esp32-firmware" className="hover:text-emerald-400 transition-colors">
                STM32 &amp; ESP32
              </Link>
              <span>/</span>
              <Link href="/services/hardware-pcb-design" className="hover:text-sky-400 transition-colors">
                PCB Design
              </Link>
              <span>/</span>
              <Link href="/case-studies/qualcomm-qcm6125-bringup" className="hover:text-emerald-400 transition-colors">
                Case Study
              </Link>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <a
                href="https://github.com/itstalmiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <a
                href="https://www.linkedin.com/in/itstalmiz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <a
                href="mailto:contact@itstalmiz.com"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Made with</span>
              <span>by itsTalmiz</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}