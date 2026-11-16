import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cpu, CircuitBoard, Layers, ShieldCheck, CheckCircle2, ArrowUpRight, Zap, Factory, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Case Study: Qualcomm QCM6125 Bring-Up | Talmiz Ur Rehman',
  description:
    'Case study: Qualcomm QCM6125 & Quectel SC668S board bring-up, LT9211D LVDS bridge, PN7220 NFC integration, and Altium high-speed flex PCB for mass production.',
  keywords: [
    'Qualcomm QCM6125 Board Bring-Up Case Study',
    'Quectel SC668S Firmware Engineer',
    'LT9211D QCM6125 Video Bridge',
    'PN7220 NFC AOSP Driver Integration',
    'Altium Flex PCB Case Study',
    'Shenzhen SMT Mass Production Engineering',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/case-studies/qualcomm-qcm6125-bringup',
  },
};

const projectMetrics = [
  { label: 'Platform Silicon', value: 'Qualcomm QCM6125 / SC668S' },
  { label: 'Operating System', value: 'Android (AOSP) Custom Build' },
  { label: 'PCB Architecture', value: 'Multilayer High-Speed Flex-Rigid' },
  { label: 'Factory Validation', value: 'Shenzhen Mass Production (4 Visits)' },
];

export default function CaseStudyQcm6125Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="glass border-b border-foreground/[0.08] relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <span className="font-mono-tech text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Engineering Case Study
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Title Block */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono-tech text-emerald-400">
            <span>Embedded Hardware &amp; Firmware Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Qualcomm QCM6125 Board Bring-Up, <span className="gradient-text">AOSP Customization</span> &amp; High-Speed Flex PCB
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            How we designed, brought up, and mass-produced an interactive AI handheld terminal built on the 
            Qualcomm QCM6125 octa-core platform and Quectel SC668S Smart SOM — navigating MIPI-to-LVDS video bridging, 
            EMVCo-compliant NFC integration, and rigorous China factory trial runs.
          </p>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass border-foreground/[0.08] mb-14">
          {projectMetrics.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono-tech">{item.label}</p>
              <p className="text-sm sm:text-base font-bold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Case Study Sections */}
        <div className="space-y-12">
          {/* Executive Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-6 h-6 text-emerald-400" />
              Executive Overview
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                The project required engineering a high-performance, battery-operated smart hardware terminal capable of 
                real-time AI voice interaction, video playback, and contactless payment validation. 
                The core computing foundation was selected around the <strong>Qualcomm QCM6125</strong> (Kryo 260 CPU, Adreno 610 GPU) 
                via the <strong>Quectel SC668S Smart Module</strong> running an Android (AOSP) environment.
              </p>
              <p>
                My responsibility spanned end-to-end firmware development and hardware execution: from early bootloader 
                initialization and kernel driver development to high-speed multilayer PCB layout in Altium Designer, 
                and four overseas engineering visits to Shenzhen to supervise mass production SMT and GMS key flashing.
              </p>
            </Card>
          </section>

          {/* Technical Challenge 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Zap className="w-6 h-6 text-sky-400" />
              1. Video Bridging: MIPI DSI to Dual-Port LVDS (LT9211D)
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                <strong>The Challenge:</strong> The industrial display chosen for optical clarity required a 
                Dual-Port LVDS video interface, but the Qualcomm QCM6125 natively delivers video over MIPI DSI.
              </p>
              <p>
                <strong>The Engineering Solution:</strong> Integrated the <strong>Lontium LT9211D</strong> high-speed 
                converter IC between the SoC and the display module. 
                Authored device-tree overlay configurations (`.dts`) in the Linux kernel DRM/KMS subsystem, 
                programmed the initialization register sequence over I2C during early boot, and tuned pixel clock 
                polarities to eliminate line jitter and achieve stable 60Hz 1080p frame output.
              </p>
            </Card>
          </section>

          {/* Technical Challenge 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              2. Contactless NFC &amp; Tap-To-Pay Integration (NXP PN7220)
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                <strong>The Challenge:</strong> Providing secure, low-latency contactless card and phone tap reading 
                compliant with EMVCo L1 and NFC Forum specifications in a space-constrained metal-rim chassis.
              </p>
              <p>
                <strong>The Engineering Solution:</strong> Integrated the <strong>NXP PN7220 NFC controller</strong>. 
                Integrated the NCI 2.2 protocol transport driver over high-speed I2C into the Android AOSP HAL layer. 
                Designed custom balanced differential antenna traces with symmetric ground keep-outs, optimizing the 
                matching network to achieve compliant magnetic field strength across all operating distances.
              </p>
            </Card>
          </section>

          {/* Technical Challenge 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <CircuitBoard className="w-6 h-6 text-sky-400" />
              3. High-Speed Multilayer Flex PCB Design in Altium
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                <strong>The Challenge:</strong> Packing the Qualcomm SOM, dual cameras, audio amplifiers, fast-charging 
                ICs, reverse wireless charging coils, and 2.4/5GHz Wi-Fi/BT antennas into an ergonomic handheld profile 
                without thermal throttling or EMI cross-coupling.
              </p>
              <p>
                <strong>The Engineering Solution:</strong> Built a multilayer rigid-flex board in <strong>Altium Designer</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2 text-sm">
                <li>Calculated stackup with 50Ω single-ended RF lines and 90Ω/100Ω differential pairs for MIPI DSI/CSI and USB.</li>
                <li>Isolated high-current battery charging paths from sensitive analog audio inputs and microphone arrays.</li>
                <li>Implemented an array of thermal ground vias connected to the chassis for sustained passive dissipation.</li>
                <li>Tuned Pi-matching circuits for dual-band Wi-Fi/Bluetooth antennas to maintain strong RSSI.</li>
              </ul>
            </Card>
          </section>

          {/* Technical Challenge 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Factory className="w-6 h-6 text-emerald-400" />
              4. Overseas SMT Oversight &amp; Mass Production (Shenzhen)
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                Over four on-site engineering visits to Shenzhen assembly plants, managed the critical bridge between 
                design and mass manufacturing:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] text-xs">
                  <span className="font-semibold text-foreground block mb-1">SMT Line Quality:</span>
                  <span className="text-muted-foreground">Supervised reflow profiles, automated optical inspection (AOI), and X-ray inspection for BGA solder-void containment under 15%.</span>
                </div>
                <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] text-xs">
                  <span className="font-semibold text-foreground block mb-1">Automated Flashing:</span>
                  <span className="text-muted-foreground">Architected production-line test scripts for automated Qualcomm emergency download (EDL) flashing and GMS key provisioning.</span>
                </div>
                <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] text-xs">
                  <span className="font-semibold text-foreground block mb-1">Environmental Testing:</span>
                  <span className="text-muted-foreground">Conducted drop testing, ESD testing (8kV contact / 15kV air), and 8-probe thermal chamber profiling under maximum CPU/GPU load.</span>
                </div>
                <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] text-xs">
                  <span className="font-semibold text-foreground block mb-1">FCC Compliance:</span>
                  <span className="text-muted-foreground">Pre-scanned radiated emissions in anechoic chambers, passing FCC Part 15 and CE certifications on first official submission.</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Results */}
          <section className="p-8 rounded-2xl glass border-emerald-500/20 bg-emerald-500/[0.02] space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-bold text-foreground">Outcome &amp; Project Impact</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The AI terminal achieved 100% board bring-up milestones, cleared FCC/CE emissions certification, 
              and scaled into full mass production with high factory SMT first-pass yields exceeding 98%. 
              The software stack seamlessly supports incremental OTA upgrades to keep devices updated in the field.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold">
                <a href="https://www.linkedin.com/in/itstalmiz/" target="_blank" rel="noopener noreferrer">
                  Hire Me for Your Hardware Project
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="glass border-foreground/10 hover:border-emerald-500/40">
                <Link href="/services/embedded-firmware-bsp">
                  Explore Firmware Services
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
