import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, ArrowUpRight, Award, ShieldCheck, Terminal, Cpu, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Google GMS Device Certification | Talmiz Ur Rehman',
  description:
    'Engineering lead for Google Mobile Services (GMS) certification on custom Qualcomm Android hardware (AIO TSAI / T7). CTS, VTS, and official Google approval.',
  keywords: [
    'Google Mobile Services GMS Certification Engineer',
    'Android CTS VTS GTS Compliance Specialist',
    'Google Play Supported Devices List AIOAPPInc',
    'Qualcomm QCM6125 GMS Certified Android Device',
    'AOSP Hardware Abstraction Layer HAL GMS',
    'Factory Key Flashing Attestation Shenzhen',
    'Embedded Firmware Engineer Islamabad Pakistan',
  ],
  alternates: {
    canonical: 'https://itstalmiz.com/case-studies/google-gms-certification',
  },
};

const gmsSpecs = [
  { label: 'Retail Branding', value: 'AIOAPPInc' },
  { label: 'Marketing Name', value: 'TSAI (Tableside AI)' },
  { label: 'Device & Model', value: 'T7 / T7' },
  { label: 'Certification Status', value: 'Official Google GMS Approved' },
];

export default function GoogleGmsCaseStudyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Ambient background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="glass border-b border-foreground/[0.08] relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Official Google GMS Certified
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Title Block */}
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono-tech text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>ENTERPRISE ANDROID HARDWARE MILESTONE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Google Mobile Services (GMS) Certification: <span className="gradient-text">Custom Android Hardware</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            How we led hardware engineering, firmware compliance, and factory security provisioning to achieve official 
            <strong> Google Mobile Services (GMS) Certification</strong> for a proprietary commercial Android device (AIO TSAI / Model T7), 
            officially listed in the Google Play Supported Devices directory.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold">
              <a
                href="https://storage.googleapis.com/play_public/supported_devices.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify on Google Official Directory
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
            <Button asChild variant="outline" className="glass border-foreground/10 hover:border-emerald-500/40">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7519334307757494272/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Announcement
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass border-foreground/[0.08] mb-14">
          {gmsSpecs.map((spec) => (
            <div key={spec.label} className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono-tech">{spec.label}</p>
              <p className="text-sm sm:text-base font-bold text-foreground">{spec.value}</p>
            </div>
          ))}
        </div>

        {/* Evidence & Verification Images Section */}
        <section className="mb-14 space-y-8">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold font-mono-tech text-foreground">
              Official Google Listing &amp; Executive Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Image 1: Google Supported Devices Proof */}
            <Card className="glass border-foreground/[0.08] overflow-hidden group">
              <div className="relative h-64 sm:h-72 w-full bg-black/40">
                <Image
                  src="/project/gms_google_partner_listing.jpg"
                  alt="Official Google Play Supported Devices listing showing AIOAPPInc TSAI T7"
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <CardContent className="p-5 space-y-2 border-t border-foreground/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-emerald-400 font-semibold">
                    GOOGLE PARTNERS DIRECTORY
                  </span>
                  <a
                    href="https://storage.googleapis.com/play_public/supported_devices.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-emerald-400 flex items-center gap-1"
                  >
                    <span>Inspect live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Official Google Certified Device Record
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Verified entry in Google&#39;s public hardware database under Retail Branding <strong>AIOAPPInc</strong>, Marketing Name <strong>TSAI</strong>, and Model <strong>T7</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Image 2: Star Performer Trophy & CEO Praise */}
            <Card className="glass border-foreground/[0.08] overflow-hidden group">
              <div className="relative h-64 sm:h-72 w-full bg-black/40">
                <Image
                  src="/project/aio_star_performer_award.jpg"
                  alt="Star Performer Award Q2 2026 for GMS Certification and praise from CEO Alex Hult"
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <CardContent className="p-5 space-y-2 border-t border-foreground/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-sky-400 font-semibold">
                    EXECUTIVE RECOGNITION
                  </span>
                  <span className="text-xs text-muted-foreground">Q2 2026 Award</span>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  Star Performer Award &amp; Leadership Endorsement
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Awarded Star Performer at AIO for spearheading the 3-year journey from hardware concept to certified shipment, publicly endorsed by CEO Alex Hult.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Gauntlet Details */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400" />
              1. The Google Compliance Gauntlet (CTS, VTS &amp; GTS)
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                Achieving Google Mobile Services approval requires passing the entire Google Android Compatibility test suites with <strong>zero unapproved failures</strong>:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-emerald-400 block mb-1 font-mono-tech">CTS (Compatibility Test Suite)</strong>
                  <span>Executed over 300,000 automated unit tests verifying Android framework APIs, multimedia decoders, system services, and touch responsiveness.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-sky-400 block mb-1 font-mono-tech">VTS (Vendor Test Suite)</strong>
                  <span>Verified Project Treble architectural compliance, validating that low-level Qualcomm kernel drivers and HAL interfaces communicate cleanly without API breaks.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06]">
                  <strong className="text-amber-400 block mb-1 font-mono-tech">CTS-Verifier</strong>
                  <span>Rigorous manual verification covering display touch jitter, audio round-trip latency, front/rear camera ISP tuning, and biometric security tests.</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
              2. SELinux Policy Hardening &amp; Zero-Neverallow Enforcement
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                Google enforces strict Mandatory Access Control (MAC) via SELinux. Every proprietary hardware component—including the 
                <strong> NXP PN7220 NFC payment controller</strong>, <strong>Lontium LT9211D display bridge</strong>, and battery fuel gauge—required 
                dedicated SELinux domains and type enforcements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm pl-2">
                <li>Eliminated all Google `neverallow` policy violations across vendor and system partitions.</li>
                <li>Isolated device nodes (`/dev/pn7220`, `/dev/i2c-*`) with custom domain transitions, preventing unauthorized user-space privilege escalation.</li>
                <li>Validated Keystore and Keymaster hardware-backed attestation keys inside the Qualcomm TrustZone secure world.</li>
              </ul>
            </Card>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-6 h-6 text-emerald-400" />
              3. Factory Key Flashing &amp; Shenzhen Production Security
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                GMS approval is not merely software—it extends to the physical assembly line. During our 
                <strong> four on-site engineering missions to Shenzhen, China</strong>, I designed and oversaw the automated production jigs:
              </p>
              <div className="space-y-2.5 text-sm text-muted-foreground pt-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Cryptographic GMS Key Injection:</strong> Programmed secure automated flashing scripts that inject unique Google-certified attestation keys into hardware eFuses.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Widevine DRM L1 Integration:</strong> Configured secure video decryption pipelines for commercial streaming and secure media consumption.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero-Failure Factory Yield:</strong> Automated test verifications on the SMT line to ensure every shipped device passes Google play-protect authentication on initial boot.</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-6 h-6 text-sky-400" />
              4. Industry Impact &amp; National Significance
            </h2>
            <Card className="glass border-foreground/[0.08] p-6 leading-relaxed text-foreground/80 space-y-4">
              <p>
                Achieving Google GMS certification places our engineering team among an exclusive tier: 
                <strong> only a handful of hardware technology companies in Pakistan have ever successfully engineered a custom Android device certified directly by Google</strong>.
              </p>
              <p className="text-sm text-muted-foreground">
                This accomplishment closed a 3-year loop of hardware design, AOSP customization, factory travel, and certification rigor—validating that our team delivers consumer and enterprise hardware meeting Silicon Valley standards.
              </p>
            </Card>
          </section>

          {/* Action CTA */}
          <section className="p-8 sm:p-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] text-center">
            <h2 className="text-2xl font-bold font-mono-tech text-foreground mb-3">
              Need Google-Certified Android Hardware or Qualcomm BSP?
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Available for enterprise Android device engineering, Qualcomm QCM6125 board bring-up, CTS/VTS compliance consulting, and Shenzhen production oversight.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold font-mono-tech">
                <Link href="/#contact">
                  Start Your Project
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-foreground/20 hover:border-emerald-500/50 font-mono-tech">
                <Link href="/case-studies/qualcomm-qcm6125-bringup">
                  View Hardware Bring-Up Case Study
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
