import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowUpRight, Award, ShieldCheck, Terminal, Cpu, ExternalLink, Sparkles, Factory, Layers, Flame, Gauge, Plane, Radio, Wrench, PackageCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChinaAlbumGallery } from '@/components/ChinaAlbumGallery';

export const metadata: Metadata = {
  title: 'Shenzhen Hardware NPI & Mass Production | Talmiz',
  description:
    'Engineering lead for 4 on-site hardware NPI missions to Shenzhen, China. SMT line bring-up, BGA X-ray inspection, automated EDL flashing, and mass production.',
  keywords: [
    'Shenzhen Hardware NPI Engineer',
    'China Mass Production On-Site Engineering',
    'SMT Fuji NXT Line Pick and Place Bring-Up',
    'BGA Dye and Pry Failure Analysis Shenzhen',
    'Automated EDL Flashing Jigs Android Hardware',
    'RF Anechoic Chamber Antenna Tuning Shenzhen',
    'Huaqiangbei Electronics Component Sourcing',
    'Hardware Design Engineer Islamabad Pakistan',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/case-studies/shenzhen-hardware-npi',
  },
};

const npiMetrics = [
  { label: 'On-Site China Missions', value: '4 Deployments', sub: 'Shenzhen & Guangdong' },
  { label: 'Product Lifecycle', value: 'EVT → DVT → PVT → MP', sub: 'Concept to Volume Ramp' },
  { label: 'EDL Flashing Speed', value: '10 Devices in Parallel', sub: 'Custom Automated Rig' },
  { label: 'Environmental Stress', value: '-20°C to +70°C', sub: 'Thermal Chamber Cycling' },
];

export default function ShenzhenNpiCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="glass border-b border-foreground/[0.08] relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-mono-tech">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5" />
              4 On-Site China Deployments
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-16">
        {/* Title Block */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono-tech text-emerald-400">
            <Plane className="w-4 h-4" />
            <span>INTERNATIONAL HARDWARE MANUFACTURING CASE STUDY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Shenzhen Hardware NPI &amp; Mass Production: <span className="gradient-text">4 Factory Missions</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            How I led on-site engineering missions across factory floors and testing laboratories in Shenzhen and Guangdong, China—spearheading 
            <strong> SMT pick-and-place setup, BGA dye-and-pry failure analysis, RF anechoic chamber tuning, and automated 10-device EDL flashing rigs</strong> for volume commercial delivery.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold font-mono-tech">
              <a href="#album">
                Jump to Photo Album (30 Captures)
                <Sparkles className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="glass border-foreground/10 hover:border-emerald-500/40 font-mono-tech">
              <Link href="/case-studies/google-gms-certification">
                View GMS Certification Case Study
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="glass border-foreground/10 hover:border-emerald-500/40 font-mono-tech">
              <a
                href="https://www.linkedin.com/in/itstalmiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* High-Level Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass border-foreground/[0.08]">
          {npiMetrics.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono-tech">{item.label}</p>
              <p className="text-lg sm:text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-emerald-400/80 font-mono-tech">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* On-The-Ground LinkedIn Story Logs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold font-mono-tech text-foreground">
              Engineering Field Logs: From DVT to Volume Production
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Post Log 1: DVT / Prototyping */}
            <Card className="glass border-foreground/[0.08] p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    MISSION LOG: DVT &amp; VALIDATION
                  </span>
                  <span className="text-xs text-muted-foreground font-mono-tech">Shenzhen Labs</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  “From Factory Floors to Testing Labs: Tuning Every Subsystem”
                </h3>
                <div className="text-sm text-foreground/85 leading-relaxed space-y-2 border-l-2 border-emerald-500/40 pl-3.5 py-1">
                  <p className="italic">
                    &ldquo;This trip was all about getting our device one step closer to perfection. We worked closely with our partners across multiple cities—finalizing production, fine-tuning hardware, and pushing everything through rigorous testing:&rdquo;
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground font-mono-tech pt-1">
                    <li>🖥️ Display &amp; touch panel glow-up (LT9211D MIPI-LVDS)</li>
                    <li>🔊 Mic &amp; speaker acoustic chamber calibration</li>
                    <li>🔋 Custom battery pack &amp; fuel gauge integration</li>
                    <li>📶 Wireless reverse-charging circuit optimization</li>
                    <li>📡 3D RF anechoic chamber antenna frequency tuning</li>
                    <li>🔥 SMT line turning raw boards into real magic</li>
                    <li>💥 Severe environmental survival testing passed</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Included rapid Huaqiangbei SEG market sourcing runs where component procurement lead times dropped from weeks to minutes.
              </p>
            </Card>

            {/* Post Log 2: Mass Production */}
            <Card className="glass border-foreground/[0.08] p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-sky-400 font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20">
                    MISSION LOG: 4TH CHINA TRIP (MASS PRODUCTION)
                  </span>
                  <span className="text-xs text-muted-foreground font-mono-tech">Volume Ramp</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  “Pushing Devices Through at Scale: Precision Demands Zero Room for Error”
                </h3>
                <div className="text-sm text-foreground/85 leading-relaxed space-y-2 border-l-2 border-sky-500/40 pl-3.5 py-1">
                  <p className="italic">
                    &ldquo;4th China trip… and it still feels like the first. Every visit brings new pressure, new challenges, and new lessons. This time it was all about mass production — pushing devices through at scale:&rdquo;
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground font-mono-tech pt-1">
                    <li>🔍 In-line PCB electrical testing &amp; validation</li>
                    <li>🛠️ SMT assembly line movement &amp; DFM fixes</li>
                    <li>🔑 Secure Google Keystore flashing &amp; provisioning</li>
                    <li>📲 Automated final firmware deployment (EDL)</li>
                    <li>🧪 Multi-station functional testing (FCT)</li>
                    <li>⏳ Aging &amp; burn-in chambers before packing</li>
                  </ul>
                  <p className="italic pt-1 text-xs text-sky-300">
                    &ldquo;One wrong flash, one missed key — and the entire flow can break. Seeing rows of finished devices lined up after months of debugging… that feeling never gets old ⚡&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Supervised under CTO Zia Hasnain, CEO Alex Hult, and Manager Syed Shabbar Mehdi Rizvi at AIO App Inc.
              </p>
            </Card>
          </div>
        </section>

        {/* The 4-Stage NPI Engineering Deep Dive */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-bold font-mono-tech text-foreground">
              The 4-Stage Hardware Manufacturing Architecture
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="glass border-foreground/[0.08] p-5 space-y-3">
              <span className="text-xs font-mono-tech text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                STAGE 1: EVT
              </span>
              <h3 className="font-bold text-foreground text-sm">Engineering Validation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Silicon bring-up of Qualcomm QCM6125 &amp; Quectel SC668S. Micro-probing test points, validating power rails, and initial kernel driver bringing-up for LT9211D and touch controllers.
              </p>
            </Card>

            <Card className="glass border-foreground/[0.08] p-5 space-y-3">
              <span className="text-xs font-mono-tech text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                STAGE 2: DVT
              </span>
              <h3 className="font-bold text-foreground text-sm">Design Validation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Over-The-Air (OTA) RF anechoic chamber antenna measurements. Thermal dissipation profiling using FLIR imaging under continuous full-load CPU/GPU compute, acoustic mic tuning.
              </p>
            </Card>

            <Card className="glass border-foreground/[0.08] p-5 space-y-3">
              <span className="text-xs font-mono-tech text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                STAGE 3: PVT
              </span>
              <h3 className="font-bold text-foreground text-sm">Production Validation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                SMT line speed optimization on Fuji NXT pick-and-place equipment. Solder stencil aperture calibration, 0.35mm pitch BGA dye-and-pry destruct testing, and AOI inspection limits.
              </p>
            </Card>

            <Card className="glass border-foreground/[0.08] p-5 space-y-3">
              <span className="text-xs font-mono-tech text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                STAGE 4: MP
              </span>
              <h3 className="font-bold text-foreground text-sm">Mass Production</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automated parallel 10-device EDL firmware flashing rigs. Google GMS hardware key injection, burn-in aging racks, barcode serialization, and pallet packaging for global freight.
              </p>
            </Card>
          </div>
        </section>

        {/* Technical Highlights Breakdown */}
        <div className="space-y-8">
          {/* Highlight 1: SMT & Inspection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Factory className="w-6 h-6 text-emerald-400" />
              1. SMT Assembly Line &amp; BGA Failure Analysis
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                Operating directly on factory floors in Shenzhen required mastering high-speed SMT assembly. With high-density 8-layer flex and rigid-flex boards, minor thermal profile errors can cause cold solder joints or BGA bridging:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-emerald-400 block mb-1 font-mono-tech">Reflow Thermal Profiling</strong>
                  <span>Programmed 8-zone reflow oven ramp rates with thermal thermocouples attached directly to critical BGA dies to prevent thermal delamination.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-sky-400 block mb-1 font-mono-tech">BGA Dye &amp; Pry Testing</strong>
                  <span>Executed destructive red dye penetrant analysis on sample boards to verify that solder balls did not suffer pad cratering after mechanical drop shocks.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-amber-400 block mb-1 font-mono-tech">Optical (AOI) &amp; X-Ray</strong>
                  <span>Tuned automated 3D optical inspection algorithms and X-ray voiding thresholds down to &lt;15% void ratio on ground thermal pads.</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Highlight 2: Automated Flashing Jigs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-6 h-6 text-sky-400" />
              2. Custom Flashing Jigs &amp; Cryptographic Provisioning
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                On the production line, flashing devices one-by-one creates a fatal throughput bottleneck. I engineered an automated multi-device flashing station:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm pl-2">
                <li>Automated 10-device concurrent Qualcomm EDL flashing (reducing cycle time to ~26 minutes for a complete batch of 10 boards).</li>
                <li>Injected unique device serials, MAC addresses, Keystore attestation keys, and Google Mobile Services (GMS) certificates into secure hardware partitions.</li>
                <li>Designed custom bed-of-nails pneumatic test fixtures with pogo pins connecting directly to test points on bare boards before final housing assembly.</li>
              </ul>
            </Card>
          </section>

          {/* Highlight 3: Reliability & Environmental Chambers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Flame className="w-6 h-6 text-emerald-400" />
              3. Thermal Chambers &amp; RF Anechoic Characterization
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                To guarantee reliable operation in hot commercial kitchen and restaurant environments, devices underwent extreme survival qualification:
              </p>
              <div className="space-y-2.5 text-sm text-muted-foreground pt-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Environmental Chamber Cycling:</strong> Programmed TEMI 300 chambers for -20°C to +70°C cycling with 95% relative humidity to detect condensation and thermal drift.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>3D RF Anechoic Chamber:</strong> Calibrated internal 2.4GHz &amp; 5GHz antennas, resolving body detuning and matching network impedance on vector network analyzers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full-Load Thermal Hotspot Mapping:</strong> Monitored PMIC and battery thermal dissipation using FLIR cameras to verify thermal dissipation safety limits.</span>
                </div>
              </div>
            </Card>
          </section>
        </div>

        {/* Interactive Photo Album Anchor */}
        <div id="album" className="pt-8">
          <ChinaAlbumGallery />
        </div>

        {/* Call to Action */}
        <section className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] text-center">
          <h2 className="text-2xl font-bold font-mono-tech text-foreground mb-3">
            Looking for an Engineer Who Can Bridge Silicon to Shenzhen?
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Available for hardware NPI consulting, SMT production oversight, test jig design, Altium PCB optimization, and Qualcomm BSP board bring-up worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold font-mono-tech">
              <Link href="/#contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-foreground/20 hover:border-emerald-500/50 font-mono-tech">
              <Link href="/case-studies/qualcomm-qcm6125-bringup">
                View Qualcomm Bring-Up Case Study
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
