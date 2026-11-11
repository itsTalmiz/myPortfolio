import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CircuitBoard, Cpu, Layers, Shield, Wifi, CheckCircle2, ArrowUpRight, Zap, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'High-Speed Multilayer PCB Design & Altium Engineering Services | Talmiz ur Rehman',
  description:
    'High-speed flex and multilayer PCB design in Altium Designer. Controlled impedance, differential routing, EMI/EMC mitigation, and antenna tuning for Shenzhen mass production.',
  keywords: [
    'High Speed Multilayer PCB Design Consultant',
    'Altium Designer Flex PCB',
    'Embedded Hardware Design Consultant Islamabad',
    'Signal Integrity Power Integrity SI PI',
    'FCC EMI EMC Hardware Compliance',
    'Antenna Tuning 2.4GHz 5GHz',
    'Shenzhen SMT Mass Production DFM',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/services/hardware-pcb-design',
  },
};

const capabilities = [
  {
    icon: CircuitBoard,
    title: 'High-Speed Multilayer PCB Layout',
    description:
      '4-layer, 6-layer, 8-layer, and high-density interconnect (HDI) PCB layout in Altium Designer. Precision routing for high-speed buses including MIPI DSI/CSI, USB 2.0/3.0, and DDR/LPDDR memory routing with length matching.',
  },
  {
    icon: Layers,
    title: 'Flex & Rigid-Flex Board Design',
    description:
      'Designing space-constrained dynamic flex and rigid-flex assemblies for handheld electronics, wearable AI devices, and compact IoT terminals with mechanical bend-radius and tear-drop reinforcements.',
  },
  {
    icon: Shield,
    title: 'Signal & Power Integrity (SI / PI)',
    description:
      'Impedance-controlled trace planning (50Ω single-ended, 90Ω/100Ω differential pairs), solid ground reference return paths, low-impedance power planes, and decoupling capacitor network optimization.',
  },
  {
    icon: Zap,
    title: 'EMI / EMC & FCC/CE Compliance',
    description:
      'Component-level EMI containment, ground stitching vias, guard traces, edge-plating, and suppression filtering designed from day one to clear radiated and conducted emissions testing on first pass.',
  },
  {
    icon: Wifi,
    title: 'RF & Antenna Tuning (2.4 / 5 GHz)',
    description:
      'Matching network design and tuning for Wi-Fi, Bluetooth LE, and cellular antennas. Pi-network matching, ground plane clearance, and OTA (Over-The-Air) chamber testing coordination.',
  },
  {
    icon: RefreshCw,
    title: 'DFM / DFA for Mass Production',
    description:
      'Design for Manufacturing (DFM) and Design for Assembly (DFA) tailored for Shenzhen SMT production lines. Stencil aperture optimization, BGA fanout, pick-and-place files, and panelization.',
  },
];

const designTools = [
  'Altium Designer',
  'Multilayer Rigid (4–10 Layer)',
  'Flex & Rigid-Flex PCBs',
  'Controlled Impedance (50Ω / 90Ω / 100Ω)',
  'MIPI & High-Speed Differential Pairs',
  'Antenna Matching Networks',
  'SMT / BGA Fanout & Escape Routing',
  'DFM / DFA for Shenzhen Assembly',
  'Proteus & EasyEDA',
  'Thermal Vias & Heat Dissipation',
  'FCC / CE EMI Suppression',
  'Gerber X2 & ODB++ Output',
];

export default function HardwarePcbDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="glass border-b border-foreground/[0.08] relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
              Hardware &amp; PCB Services
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <div className="mb-16 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono-tech text-sky-400">
            <span>Production-Grade Hardware Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            High-Speed Multilayer &amp; <span className="gradient-text">Flex PCB Design</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Turn complex schematics into production-yield hardware. Designing high-speed multilayer 
            and flex circuit boards in Altium Designer with rigorous attention to signal integrity, 
            EMI containment, antenna matching, and Shenzhen SMT manufacturing tolerances.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="https://www.linkedin.com/in/itstalmiz/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold">
                Start a PCB Project
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/case-studies/qualcomm-qcm6125-bringup">
              <Button variant="outline" className="glass border-foreground/10 hover:border-sky-500/40">
                View Multilayer PCB Case Study
              </Button>
            </Link>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mb-16 p-6 rounded-2xl glass border-foreground/[0.08] bg-foreground/[0.01]">
          <h2 className="text-xs font-mono-tech text-sky-400 uppercase tracking-wider mb-4">
            // EDA Toolchain &amp; Hardware Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {designTools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-foreground/[0.04] border border-foreground/[0.08] text-foreground/80 hover:border-sky-500/30 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Capabilities &amp; Layout Standards
            </h2>
            <p className="text-sm text-muted-foreground">
              Hardware designed for signal integrity in the lab and flawless yield on the factory floor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <Card
                key={cap.title}
                className="glass border-foreground/[0.08] hover:border-sky-500/30 transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-sky-400 transition-colors">
                    {cap.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Callout */}
        <div className="p-8 rounded-2xl glass border-sky-500/20 bg-sky-500/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-tech text-sky-400 uppercase tracking-wider">
              Hardware Case Study
            </span>
            <h3 className="text-xl font-bold text-foreground">
              Multilayer Flex PCB for Qualcomm QCM6125 AI Device
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore how controlled impedance differential routing, dual-band 2.4/5GHz antenna matching,
              and fast/reverse wireless charging were routed in a compact handheld form-factor.
            </p>
          </div>
          <Link href="/case-studies/qualcomm-qcm6125-bringup" className="shrink-0">
            <Button className="bg-sky-500 hover:bg-sky-400 text-background font-semibold">
              Read PCB Case Study
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
