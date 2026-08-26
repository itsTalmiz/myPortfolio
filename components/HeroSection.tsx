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
  Download,
  ExternalLink,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PdfViewer } from '@/components/PdfViewer';
import Image from 'next/image';
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
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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

  const [terminalMode, setTerminalMode] = useState<'bsp' | 'aosp' | 'pcb' | 'china'>('bsp');
  const [copiedLog, setCopiedLog] = useState(false);

  const logsByMode = {
    bsp: [
      '[0.012s] QCM6125 Kernel & BSP board bring-up: OK',
      '[0.024s] LVDS LT9211D bridge & MIPI DSI display initialized',
      '[0.038s] Touch controller on I2C & MIPI Camera brought up',
      '[0.052s] NFC PN7220 driver integrated & peripheral test PASSED',
    ],
    aosp: [
      '[0.015s] AOSP Customization & system service integration',
      '[0.030s] OTA update engine registered (Full & Incremental)',
      '[0.048s] GMS key store provisioned & flashed successfully',
      '[0.065s] Rockchip & Qualcomm peripheral bridge operational',
    ],
    pcb: [
      '[0.010s] High-speed flex & multilayer PCB design',
      '[0.025s] 90Ω differential pair signal integrity verified',
      '[0.042s] EMI/EMC ground plane shielding & trace routing verified',
      '[0.060s] Antenna design & RF tuning (2.4GHz / 5GHz) active',
    ],
    china: [
      '[0.018s] China Mass Prod: PCB testing & validation OK',
      '[0.035s] Assembly line movement & SMT reflow profile OK',
      '[0.050s] Secure GMS key flashing, provisioning & firmware deployment',
      '[0.072s] Functional testing, aging & burn-in before packing PASS',
    ],
  };

  const copyLogText = () => {
    const text = logsByMode[terminalMode].join('\n');
    navigator.clipboard.writeText(text);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient dot-grid */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-sky-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full mb-12">
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

              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
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
                  className="bg-emerald-500 hover:bg-emerald-400 text-background px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-glow btn-animate relative overflow-hidden group w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Got a project?
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsResumeOpen(true)}
                className="glass border-foreground/[0.08] text-foreground/90 hover:text-emerald-400 hover:border-emerald-500/40 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 mr-2" />
                My resume
              </Button>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group text-center p-3 rounded-xl glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] hover:bg-emerald-500/[0.06] cursor-pointer"
                >
                  <tech.icon className="w-5 h-5 mx-auto mb-2 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-muted-foreground text-[11px] font-medium group-hover:text-emerald-300 transition-colors leading-tight block">{tech.name}</span>
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
                    <Image
                      src="/talmiz.jpeg"
                      alt="Talmiz ur Rehman"
                      fill
                      priority
                      className="object-cover grayscale-[55%] contrast-[1.05] saturate-75 transition-transform duration-700 hover:scale-105"
                    />
                    {/* Color-match overlay */}
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

        {/* Interactive Hardware Diagnostic Terminal & Oscilloscope Simulation Widget */}
        <div className="w-full glass border-foreground/[0.08] rounded-2xl p-4 sm:p-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-foreground/[0.08]">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono-tech text-xs sm:text-sm text-foreground/90 font-semibold flex items-center gap-2">
                <CircuitBoard className="w-4 h-4 text-emerald-400" />
                hardware_diagnostic.ttyUSB0
              </span>
            </div>

            {/* Mode selection buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setTerminalMode('bsp')}
                className={`px-3 py-1 text-xs font-mono-tech rounded-lg transition-all btn-tactile ${
                  terminalMode === 'bsp'
                    ? 'bg-emerald-500 text-background font-bold shadow-sm'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                [BSP Bringup]
              </button>
              <button
                onClick={() => setTerminalMode('aosp')}
                className={`px-3 py-1 text-xs font-mono-tech rounded-lg transition-all btn-tactile ${
                  terminalMode === 'aosp'
                    ? 'bg-emerald-500 text-background font-bold shadow-sm'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                [AOSP & OTA]
              </button>
              <button
                onClick={() => setTerminalMode('pcb')}
                className={`px-3 py-1 text-xs font-mono-tech rounded-lg transition-all btn-tactile ${
                  terminalMode === 'pcb'
                    ? 'bg-emerald-500 text-background font-bold shadow-sm'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                [PCB Design]
              </button>
              <button
                onClick={() => setTerminalMode('china')}
                className={`px-3 py-1 text-xs font-mono-tech rounded-lg transition-all btn-tactile ${
                  terminalMode === 'china'
                    ? 'bg-emerald-500 text-background font-bold shadow-sm'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                [China Mass-Prod]
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 pt-4 items-center">
            {/* Oscilloscope Waveform Graphic */}
            <div className="p-4 rounded-xl glass border-foreground/[0.06] bg-foreground/[0.02]">
              <div className="flex justify-between items-center mb-2 font-mono-tech text-[11px]">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                  CH1: SPI/PWM WAVEFORM
                </span>
                <span className="text-muted-foreground">500mV/div 10us</span>
              </div>
              <div className="h-20 w-full relative flex items-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 30 L 25 30 L 25 10 L 60 10 L 60 50 L 95 50 L 95 10 L 130 10 L 130 50 L 165 50 L 165 10 L 200 10 L 200 50 L 235 50 L 235 10 L 270 10 L 270 30 L 300 30"
                    fill="none"
                    stroke="url(#waveGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Simulated Live Serial Terminal Stream */}
            <div className="lg:col-span-2 p-4 rounded-xl glass border-foreground/[0.06] bg-black/40 font-mono-tech text-xs space-y-2 relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] text-muted-foreground border-b border-white/10 pb-1.5">
                <span>SERIAL LOG (115200 BAUD)</span>
                <button
                  onClick={copyLogText}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  {copiedLog ? 'Copied!' : 'Copy output'}
                </button>
              </div>
              <div className="space-y-1.5 pt-1 text-emerald-300/90">
                {logsByMode[terminalMode].map((logLine, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold select-none">&gt;</span>
                    <span>{logLine}</span>
                  </div>
                ))}
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

      {/* Resume Modal */}
      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] glass border-foreground/[0.08] text-foreground flex flex-col p-4 sm:p-6 overflow-hidden">
          <DialogHeader className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-foreground/[0.08] gap-3">
            <div>
              <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Resume — M. Talmiz Ur Rehman
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-xs sm:text-sm">
                Senior Hardware Design Engineer (Firmware) · Islamabad, Pakistan
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/Resume_MTalmizUrRehman__General.pdf"
                download="Resume_MTalmizUrRehman.pdf"
              >
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-400 text-background text-xs font-semibold shadow-md transition-all">
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  Download PDF
                </Button>
              </a>
              <a
                href="/Resume_MTalmizUrRehman__General.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="glass text-xs border-foreground/10 hover:border-emerald-500/40">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </DialogHeader>

          {/* Scrollable Rich Resume Document View */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-6 text-sm text-foreground/90 mt-4 leading-relaxed font-sans">
            {/* Header / Contacts Card */}
            <div className="p-4 rounded-xl glass border-foreground/[0.06] bg-foreground/[0.02]">
              <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap gap-x-5 gap-y-1.5 font-mono-tech">
                <span>📧 mtalmiz1234@gmail.com</span>
                <span>📞 +92 336 5267868</span>
                <span>🔗 linkedin.com/in/itstalmiz</span>
                <span>🌐 itstalmiz.com</span>
              </p>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-sm font-bold text-emerald-400 font-mono-tech mb-2">// SUMMARY</h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm bg-foreground/[0.02] p-4 rounded-xl border border-foreground/[0.05]">
                Embedded firmware and hardware engineer with 3 years across the full product lifecycle — firmware and BSP bring-up, PCB design, hardware integration, and mass production. Hands-on with ARM-based Qualcomm QCM6125 / Quectel SOM platforms, Android (AOSP), OTA, and high-speed multilayer PCB design in Altium.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-sm font-bold text-emerald-400 font-mono-tech mb-3">// TECHNICAL SKILLS</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Languages:</span>
                  <span className="text-muted-foreground">C, C++, Python, Embedded C, Bash/Shell, ARM Assembly, Verilog</span>
                </div>
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Firmware & OS:</span>
                  <span className="text-muted-foreground">Embedded Linux, AOSP/Android, BSP & device drivers, Kernel, OTA (Full/Incremental), RTOS, Perfetto</span>
                </div>
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Hardware & PCB:</span>
                  <span className="text-muted-foreground">Altium Designer, EasyEDA, High-speed flex & multilayer PCB design, EMI control, Signal integrity</span>
                </div>
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Platforms & Protocols:</span>
                  <span className="text-muted-foreground">Qualcomm QCM6125, Quectel SC668S SOM, ARM; I2C, SPI, UART</span>
                </div>
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Production & QC:</span>
                  <span className="text-muted-foreground">SMT oversight (reflow, X-ray, AOI, BGA dye test), GMS key flashing/provisioning, FCC compliance (EMI/EMC, ESD, OTA)</span>
                </div>
                <div className="p-3 rounded-lg glass border-foreground/[0.06]">
                  <span className="font-semibold text-foreground block mb-1">Debug & Tools:</span>
                  <span className="text-muted-foreground">Git, GDB, Oscilloscope, Logic Analyzer, QNavigator / QFlash / QPST, Proteus, MATLAB</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm font-bold text-emerald-400 font-mono-tech mb-3">// EXPERIENCE</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl glass border-foreground/[0.06]">
                  <div className="flex justify-between items-start mb-1 flex-wrap">
                    <h4 className="font-bold text-foreground">Senior Hardware Design Engineer (Firmware)</h4>
                    <span className="text-xs text-emerald-400 font-mono-tech">11/2023 – Present</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">AIO APP Inc · Islamabad, Pakistan</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                    <li>Spearheaded firmware development on ARM-based Qualcomm QCM6125 platform; performed Linux kernel/BSP and AOSP customization, device-driver integration, and board bring-up.</li>
                    <li>Customized AOSP & implemented full/incremental OTA update delivery on QCM6125 devices.</li>
                    <li>Integrated battery calibration and charging ICs supporting fast & reverse wireless charging with thermal cutoffs.</li>
                    <li>Designed high-speed flex & multilayer PCBs with EMI control and signal integrity in Altium.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl glass border-foreground/[0.06]">
                  <div className="flex justify-between items-start mb-1 flex-wrap">
                    <h4 className="font-bold text-foreground">International Engineering Visits — China (4 Visits)</h4>
                    <span className="text-xs text-emerald-400 font-mono-tech">2024 – 2025</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">AIO APP Inc · Shenzhen, China</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                    <li>Progressed from device bring-up and peripheral optimization (display, touch, battery, speaker, MIC) to full-scale mass production.</li>
                    <li>Led antenna tuning (2.4/5GHz), FCC compliance (EMI/EMC, ESD, OTA), USB, drop testing, and thermal profiling with 8-probe monitoring.</li>
                    <li>Oversaw SMT (footprints, reflow, X-ray, AOI, BGA dye testing) and drove the production line with GMS key flashing and provisioning.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl glass border-foreground/[0.06]">
                  <div className="flex justify-between items-start mb-1 flex-wrap">
                    <h4 className="font-bold text-foreground">Hardware Design Engineer</h4>
                    <span className="text-xs text-emerald-400 font-mono-tech">08/2023 – 11/2023</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">TeReSol Pvt. Ltd · Islamabad, Pakistan</p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                    <li>Embedded C/C++ development and Bash automation scripts; fixed critical bugs to deliver functional releases.</li>
                    <li>Cloned and flashed customized NVIDIA Tegra GPU boards.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold text-emerald-400 font-mono-tech mb-3">// EDUCATION</h3>
              <div className="p-4 rounded-xl glass border-foreground/[0.06] flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h4 className="font-bold text-foreground">COMSATS University Islamabad</h4>
                  <p className="text-xs text-muted-foreground">BS Electrical (Computer) Engineering — GPA: 3.31</p>
                </div>
                <span className="text-xs text-emerald-400 font-mono-tech">09/2019 – 09/2023</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
