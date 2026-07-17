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
  type LucideIcon,
} from 'lucide-react';

const skillCategories = {
  embedded: [
    { name: 'C/C++ Programming', logo: '/logos/cpp.png' },
    { name: 'ARM Cortex MCUs', logo: '/logos/arm.png' },
    { name: 'FreeRTOS', logo: '/logos/freertos.png' },
    { name: 'Device Drivers', logo: '/logos/drivers.png' },
    { name: 'Bootloader Dev', logo: '/logos/bootloader.png' },
    { name: 'Debugging', logo: '/logos/debug.png' },
    { name: 'Embedded Linux', logo: '/logos/linux.png' },
    { name: 'IoT Dev', logo: '/logos/iot.png' },
    { name: 'AOSP / Android', icon: Smartphone },
    { name: 'BSP & Kernel', icon: Layers },
    { name: 'OTA Updates', icon: RefreshCw },
  ],
  hardware: [
    { name: 'PCB Design', logo: '/logos/PCB.png' },
    { name: 'Circuit Analysis', logo: '/logos/circuit.png' },
    { name: 'Component Selection', logo: '/logos/components.png' },
    { name: 'Signal Integrity', logo: '/logos/signal.png' },
    { name: 'Power Electronics', logo: '/logos/power.png' },
    { name: 'EMC/EMI Design', logo: '/logos/emc.png' },
    { name: 'Schematic Capture', logo: '/logos/schematic.png' },
    { name: 'DFM/DFT', logo: '/logos/dfm.png' },
  ],
  tools: [
    { name: 'Altium Designer', logo: '/logos/altium.png' },
    { name: 'EasyEDA', logo: '/logos/EasyEDA.png' },
    { name: 'MATLAB/Simulink', logo: '/logos/matlab.png' },
    { name: 'LabVIEW', logo: '/logos/labview.png' },
    { name: 'Proteus', logo: '/logos/proteus.png' },
    { name: 'Xillinx', logo: '/logos/xilinx.png' },
    { name: 'Git/GitHub', logo: '/logos/git.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
    { name: 'GDB', icon: Bug },
    { name: 'Oscilloscope', icon: Activity },
    { name: 'Logic Analyzer', icon: Waves },
    { name: 'Perfetto', icon: BarChart3 },
  ],
  production: [
    { name: 'SMT Oversight', icon: Factory },
    { name: 'GMS Key Flashing/Provisioning', icon: KeyRound },
    { name: 'FCC Compliance (EMI/EMC, ESD, OTA)', icon: ShieldCheck },
    { name: 'Validation & Burn-in', icon: CheckCircle2 },
    { name: 'Mentoring Engineers', icon: Users },
  ],
  protocols: [
    { name: 'I2C/SPI/UART', icon: Cable },
    { name: 'CAN/CAN-FD', icon: Route },
    { name: 'Ethernet/TCP-IP', icon: Network },
    { name: 'USB 2.0/3.0', icon: Usb },
    { name: 'WiFi/Bluetooth', icon: Wifi },
    { name: 'LoRaWAN/Zigbee', icon: Radio },
    { name: 'MQTT/CoAP', icon: MessageSquare },
    { name: 'Modbus/RS485', icon: CircuitBoard },
  ],
};

interface SkillLogoProps {
  name: string;
  logo?: string;
  icon?: LucideIcon;
}

function SkillLogo({ name, logo, icon: Icon }: SkillLogoProps) {
  return (
    <div className="group flex flex-col items-center space-y-2">
      <div className="w-16 h-16 glass border-foreground/[0.06] rounded-xl flex items-center justify-center shadow-md group-hover:border-emerald-500/30 group-hover:scale-105 transition-all duration-300">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            width={40}
            height={40}
            className="object-contain"
          />
        ) : Icon ? (
          <Icon className="w-6 h-6 text-emerald-400" />
        ) : null}
      </div>
      <span className="text-muted-foreground text-sm font-medium text-center group-hover:text-foreground/80 transition-colors">{name}</span>
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
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-background text-muted-foreground rounded-md transition-all duration-300"
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