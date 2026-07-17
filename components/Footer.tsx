'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-foreground/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-foreground font-bold text-lg mb-2 font-mono-tech">Talmiz Ur Rehman</h3>
            <p className="text-muted-foreground text-sm">
              Hardware Embedded Systems Engineer
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
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