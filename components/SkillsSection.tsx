'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = {
  hardware: [
    { name: 'PCB Design (Altium Designer)', level: 95 },
    { name: 'Circuit Analysis', level: 92 },
    { name: 'Component Selection', level: 90 },
    { name: 'Signal Integrity', level: 88 },
    { name: 'Power Electronics', level: 85 },
    { name: 'EMC/EMI Design', level: 82 },
  ],
  embedded: [
    { name: 'C/C++ Programming', level: 94 },
    { name: 'ARM Cortex Microcontrollers', level: 92 },
    { name: 'RTOS (FreeRTOS)', level: 89 },
    { name: 'Device Drivers', level: 87 },
    { name: 'Bootloader Development', level: 85 },
    { name: 'Debugging & Optimization', level: 91 },
  ],
  protocols: [
    { name: 'I2C/SPI/UART', level: 96 },
    { name: 'CAN/CAN-FD', level: 88 },
    { name: 'Ethernet/TCP-IP', level: 86 },
    { name: 'USB (2.0/3.0)', level: 84 },
    { name: 'WiFi/Bluetooth', level: 89 },
    { name: 'LoRaWAN/Zigbee', level: 82 },
  ],
  tools: [
    { name: 'Altium Designer', level: 95 },
    { name: 'KiCad', level: 88 },
    { name: 'MATLAB/Simulink', level: 85 },
    { name: 'LabVIEW', level: 80 },
    { name: 'Oscilloscopes/Logic Analyzers', level: 93 },
    { name: 'JTAG/SWD Debugging', level: 90 },
  ],
};

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

function SkillBar({ name, level, index }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, index * 100);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-orange-500 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${animatedLevel}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#243447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full" />
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#1a2332] mb-8 p-1 rounded-lg">
            <TabsTrigger 
              value="hardware" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Hardware
            </TabsTrigger>
            <TabsTrigger 
              value="embedded" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Embedded
            </TabsTrigger>
            <TabsTrigger 
              value="protocols" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Protocols
            </TabsTrigger>
            <TabsTrigger 
              value="tools" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <Card className="p-8 bg-[#1a2332] border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}