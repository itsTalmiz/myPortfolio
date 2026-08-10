'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Reveal } from '@/components/Reveal';
import Image from 'next/image';
import {
  Smartphone,
  Layers,
  RefreshCw,
  Bug,
  Activity,
  Waves,
  BarChart3,
  Factory,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  Users,
  Cable,
  Route,
  Network,
  Usb,
  Wifi,
  Radio,
  MessageSquare,
  CircuitBoard,
  Code,
  Cpu,
  Timer,
  Terminal,
  Wrench,
  Zap,
  GitBranch,
  Box,
  Binary,
  Flame,
  FileCode,
  Gauge,
  Sliders,
  RadioTower,
  type LucideIcon,
} from 'lucide-react';

const skillCategories = {
  embedded: [
    { name: 'C/C++ Programming', icon: Code },
    { name: 'ARM Cortex MCUs', icon: Cpu },
    { name: 'FreeRTOS', icon: Timer },
    { name: 'Device Drivers', icon: Terminal },
    { name: 'Bootloader Dev', icon: Binary },
    { name: 'Debugging & Probing', icon: Bug },
    { name: 'Embedded Linux', icon: Layers },
    { name: 'IoT Development', icon: RadioTower },
    { name: 'AOSP / Android', icon: Smartphone },
    { name: 'BSP & Kernel', icon: Layers },
    { name: 'OTA Updates', icon: RefreshCw },
  ],
  hardware: [
    { name: 'PCB Design', icon: CircuitBoard },
    { name: 'Circuit Analysis', icon: Activity },
    { name: 'Component Selection', icon: Box },
    { name: 'Signal Integrity', icon: Waves },
    { name: 'Power Electronics', icon: Zap },
    { name: 'EMC/EMI Design', icon: ShieldCheck },
    { name: 'Schematic Capture', icon: FileCode },
    { name: 'DFM / DFT', icon: Factory },
  ],
  tools: [
    { name: 'Altium Designer', icon: CircuitBoard },
    { name: 'EasyEDA', icon: FileCode },
    { name: 'MATLAB / Simulink', icon: Gauge },
    { name: 'LabVIEW', icon: Sliders },
    { name: 'Proteus', icon: Cpu },
    { name: 'Xilinx FPGA', icon: Binary },
    { name: 'Git / GitHub', icon: GitBranch },
    { name: 'Docker', icon: Box },
    { name: 'GDB', icon: Bug },
    { name: 'Oscilloscope', icon: Activity },
    { name: 'Logic Analyzer', icon: Waves },
    { name: 'Perfetto', icon: BarChart3 },
  ],
  production: [
    { name: 'SMT Oversight', icon: Factory },
    { name: 'GMS Key Provisioning', icon: KeyRound },
    { name: 'FCC Compliance (EMI/EMC)', icon: ShieldCheck },
    { name: 'Validation & Burn-in', icon: CheckCircle2 },
    { name: 'Engineering Mentorship', icon: Users },
  ],
  protocols: [
    { name: 'I2C / SPI / UART', icon: Cable },
    { name: 'CAN / CAN-FD', icon: Route },
    { name: 'Ethernet / TCP-IP', icon: Network },
    { name: 'USB 2.0 / 3.0', icon: Usb },
    { name: 'WiFi / Bluetooth', icon: Wifi },
    { name: 'LoRaWAN / Zigbee', icon: Radio },
    { name: 'MQTT / CoAP', icon: MessageSquare },
    { name: 'Modbus / RS485', icon: CircuitBoard },
  ],
};

interface SkillLogoProps {
  name: string;
  logo?: string;
  icon?: LucideIcon;
}

function SkillLogo({ name, logo, icon: Icon }: SkillLogoProps) {
  return (
    <div className="group flex flex-col items-center space-y-2 cursor-pointer btn-tactile">
      <div className="w-16 h-16 glass border-foreground/[0.06] rounded-xl flex items-center justify-center shadow-md group-hover:border-emerald-500/30 group-hover:scale-105 active:scale-95 transition-all duration-200">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            width={40}
            height={40}
            className="object-contain"
          />
        ) : Icon ? (
          <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
        ) : null}
      </div>
      <span className="text-muted-foreground text-sm font-medium text-center group-hover:text-foreground transition-colors">{name}</span>
    </div>
  );
}

const tabValues = ['embedded', 'hardware', 'tools', 'production', 'protocols'] as const;
const tabLabels: Record<(typeof tabValues)[number], string> = {
  embedded: 'Embedded',
  hardware: 'Hardware',
  tools: 'Tools',
  production: 'Production',
  protocols: 'Protocols',
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Tabs defaultValue="embedded" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 gap-1 glass border-foreground/[0.06] mb-8 p-1 rounded-lg h-auto">
              {tabValues.map((value) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-background text-muted-foreground rounded-md transition-all duration-200 btn-tactile active:scale-95 font-medium"
                >
                  {tabLabels[value]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([category, skills]) => (
              <TabsContent key={category} value={category}>
                <Card className="p-8 glass border-foreground/[0.06]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                      <SkillLogo key={skill.name} {...skill} />
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}