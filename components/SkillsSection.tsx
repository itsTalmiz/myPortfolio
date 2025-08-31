'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

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
    { name: 'Oscilloscope', logo: '/logos/proteus.png' },
    { name: 'Xillinx', logo: '/logos/xilinx.png' },
    { name: 'Git/GitHub', logo: '/logos/git.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
  ],
  protocols: [
    { name: 'I2C/SPI/UART', logo: '/logos/serial.png' },
    { name: 'CAN/CAN-FD', logo: '/logos/can.png' },
    { name: 'Ethernet/TCP-IP', logo: '/logos/ethernet.png' },
    { name: 'USB 2.0/3.0', logo: '/logos/usb.png' },
    { name: 'WiFi/Bluetooth', logo: '/logos/wifi.png' },
    { name: 'LoRaWAN/Zigbee', logo: '/logos/lora.png' },
    { name: 'MQTT/CoAP', logo: '/logos/mqtt.png' },
    { name: 'Modbus/RS485', logo: '/logos/modbus.png' },
  ],
};

interface SkillLogoProps {
  name: string;
  logo: string;
}

function SkillLogo({ name, logo }: SkillLogoProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
        <Image
          src={logo}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="text-gray-300 text-sm font-medium text-center">{name}</span>
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

        <Tabs defaultValue="embedded" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#1a2332] mb-8 p-1 rounded-lg">
            <TabsTrigger 
              value="embedded" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Embedded
            </TabsTrigger>
            <TabsTrigger 
              value="hardware" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Hardware
            </TabsTrigger>
            <TabsTrigger 
              value="tools" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger 
              value="protocols" 
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-300 rounded-md transition-all duration-300"
            >
              Protocols
            </TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <Card className="p-8 bg-[#1a2332] border-gray-700">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                  {skills.map((skill) => (
                    <SkillLogo
                      key={skill.name}
                      name={skill.name}
                      logo={skill.logo}
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