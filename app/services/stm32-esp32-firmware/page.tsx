import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cpu, Terminal, Radio, Server, CheckCircle2, ArrowUpRight, FileCode, Layers, ShieldCheck, Zap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'STM32 & ESP32 Microcontroller Firmware Development | Talmiz ur Rehman',
  description:
    'Production-grade microcontroller firmware in bare-metal C and FreeRTOS. Specialized in STM32 Cortex-M, ESP32 IoT, CAN bus, and low-power battery optimization.',
  keywords: [
    'STM32 Firmware Developer Islamabad',
    'ESP32 FreeRTOS Firmware Engineer',
    'Bare-Metal C Embedded Developer',
    'ARM Cortex-M0 M3 M4 M7 Engineer',
    'ESP-IDF Firmware Consultant',
    'CAN Bus RS485 Modbus Firmware',
    'Low Power Battery Microcontroller Design',
    'STM32CubeIDE HAL LL Driver Development',
    'Industrial IoT Firmware Islamabad Pakistan',
    'Embedded C C++ FreeRTOS Multitasking',
    'DMA Interrupt Ring Buffer Driver Engineering',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/services/stm32-esp32-firmware',
  },
};

const capabilities = [
  {
    icon: Cpu,
    title: 'STM32 (ARM Cortex-M0/M3/M4/M7) Architecture',
    description:
      'Register-level and HAL/LL driver development across STM32F1, STM32F4, STM32G0, and STM32H7 families. Direct configuration of Clock Trees (PLL), NVIC nested interrupts, DMA controllers, and hardware timer/PWM channels for precision control.',
  },
  {
    icon: Radio,
    title: 'ESP32 & ESP32-S3 IoT with ESP-IDF & FreeRTOS',
    description:
      'Native ESP-IDF firmware development utilizing dual-core Xtensa architecture. Real-time FreeRTOS multitasking, task prioritization, event groups, message queues, and semaphores for high-throughput wireless edge devices.',
  },
  {
    icon: Terminal,
    title: 'Bare-Metal C/C++ & Zero-Overhead Peripheral Drivers',
    description:
      'Deterministic bare-metal C firmware without dynamic heap allocation. Zero-copy circular DMA buffers for high-speed UART/USART, SPI bus communication (display, flash memory, sensors), and robust I2C state machines with bus-lock recovery.',
  },
  {
    icon: Layers,
    title: 'Industrial Fieldbuses: CAN 2.0B, CAN-FD & RS485 Modbus',
    description:
      'Automotive and industrial protocol implementation. ISO 11898 CAN bus transceiver integration, mailbox filtering, message arbitration, error frame handling, and RS485 Modbus RTU master/slave stacks.',
  },
  {
    icon: Gauge,
    title: 'Ultra-Low Power Firmware & Battery Optimization',
    description:
      'Micro-ampere power rail profiling for battery-operated field sensors. Deep sleep and standby state machines, RTC alarm wakeups, peripheral power gating, GPIO leakage mitigation, and Li-ion/LiFePO4 fuel gauge integration.',
  },
  {
    icon: Server,
    title: 'Connected IoT, BLE 5.0 & Secure Boot / OTA',
    description:
      'Wi-Fi 802.11 b/g/n and Bluetooth Low Energy (BLE GATT server/client) connectivity. Secure TLS-encrypted MQTT telemetry pipelines, cryptographic image verification, dual-partition bootloaders, and fail-safe over-the-air firmware updates.',
  },
  {
    icon: ShieldCheck,
    title: 'Hardware-Software Lab Debugging & Verification',
    description:
      'Bridge debugging between hardware schematics and binary code. JTAG/SWD hardware debugging via ST-LINK v2/v3 and J-Link, SEGGER RTT real-time logging, logic analyzer bus decode (Saleae), and oscilloscope timing jitter verification.',
  },
  {
    icon: Zap,
    title: 'Legacy & Alternative Microcontroller Porting',
    description:
      'Firmware modernization, peripheral driver abstraction, and cross-platform porting across 8-bit Microchip PIC, Atmel AVR / ATmega, 8051 cores, and modern 32-bit RISC-V microcontrollers.',
  },
];

const technologies = [
  'STM32 (Cortex-M0/M3/M4/M7)',
  'ESP32 / ESP32-S3 (ESP-IDF)',
  'FreeRTOS Real-Time Kernel',
  'Bare-Metal C & C++17',
  'STM32CubeIDE & CubeMX',
  'CAN Bus (2.0B / CAN-FD)',
  'RS485 / Modbus RTU',
  'DMA Ring Buffers',
  'Hardware Timers & PWM',
  'ADC / DAC Calibration',
  'SPI, I2C, USART / UART',
  'BLE 5.0 GATT Architecture',
  'Wi-Fi & MQTT Telemetry',
  'Deep Sleep Power Profiling',
  'JTAG / SWD Debugging',
  'Dual-Partition Fail-Safe OTA',
];

export default function MicrocontrollerFirmwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono-tech text-muted-foreground hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>&lt; back to portfolio</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-tech mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SPECIALIZED ENGINEERING SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight font-mono-tech text-foreground mb-6">
            STM32 &amp; ESP32 Microcontroller Firmware Development
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Production-grade embedded firmware engineering for mission-critical hardware. From bare-metal C register configuration and FreeRTOS multitasking on 32-bit ARM Cortex-M and Xtensa architectures to low-power battery optimization and industrial fieldbus protocols.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold font-mono-tech gap-2">
                Discuss Your MCU Project
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services/embedded-firmware-bsp">
              <Button variant="outline" className="border-foreground/20 hover:border-emerald-500/50 font-mono-tech">
                View Qualcomm &amp; Linux BSP Services
              </Button>
            </Link>
          </div>
        </header>

        {/* Core Capabilities Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono-tech text-foreground mb-8 flex items-center gap-3">
            <span className="text-emerald-400">//</span> Technical Scope &amp; Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <Card
                key={idx}
                className="glass border-foreground/[0.08] hover:border-emerald-500/30 transition-all duration-300 bg-background/50"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-bold font-mono-tech text-foreground">
                    {cap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Silicon & Toolchain Cloud */}
        <section className="mb-16 p-8 rounded-2xl glass border-foreground/[0.08] bg-foreground/[0.02]">
          <h2 className="text-xl font-bold font-mono-tech text-foreground mb-6 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-emerald-400" />
            Silicon Stack &amp; Development Tools
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-md text-xs font-mono-tech bg-background/80 border border-foreground/[0.08] text-foreground/90 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Engineering Methodology / Quality Standards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono-tech text-foreground mb-6 flex items-center gap-3">
            <span className="text-emerald-400">//</span> Firmware Engineering Rigor
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-foreground/[0.08] bg-background/40 flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono-tech font-bold text-foreground text-sm mb-1">
                  Deterministic Memory &amp; Zero Dynamic Allocation
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mission-critical MCU code avoids runtime `malloc` to prevent heap fragmentation. All memory pools, FreeRTOS stacks, and communication buffers are statically allocated with strict boundary assertions.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-foreground/[0.08] bg-background/40 flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono-tech font-bold text-foreground text-sm mb-1">
                  Non-Blocking State Machines &amp; Interrupt Decoupling
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interrupt Service Routines (ISRs) are kept ultra-lean, clearing hardware flags and dispatching data into ring buffers or notifying FreeRTOS worker tasks via queues, guaranteeing zero dropped packets on high-baud buses.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-foreground/[0.08] bg-background/40 flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-mono-tech font-bold text-foreground text-sm mb-1">
                  Hardware Watchdogs &amp; Fail-Safe Recovery
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Independent Watchdog (IWDG) and Window Watchdog (WWDG) integration combined with brown-out reset (BOR) threshold configuration, guaranteeing that field devices self-recover gracefully without human intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Card */}
        <section className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] text-center">
          <h2 className="text-2xl font-bold font-mono-tech text-foreground mb-3">
            Building a Microcontroller or Connected IoT Product?
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Available for STM32 and ESP32 firmware architecture, hardware driver bring-up, FreeRTOS optimization, and production troubleshooting from Islamabad, Pakistan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold font-mono-tech">
                Get In Touch
              </Button>
            </Link>
            <Link href="/services/hardware-pcb-design">
              <Button variant="outline" className="border-foreground/20 hover:border-emerald-500/50 font-mono-tech">
                View PCB Layout Services
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
