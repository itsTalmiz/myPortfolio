'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/Reveal';
import { Building2, Calendar, MapPin, GraduationCap, Award, BadgeCheck } from 'lucide-react';

export const experiences = [
  {
    id: 1,
    company: "AIO APP Inc",
    position: "Senior Hardware Design Engineer (Firmware)",
    location: "Islamabad, Pakistan",
    duration: "11/2023 – Present",
    type: "Full‑time",
    description:
      "Spearheading firmware, BSP and AOSP development on the ARM‑based Qualcomm QCM6125 / Quectel SC668S platform. Driving complete system bring‑up — display, touch, camera, audio and charging — while mentoring junior engineers and owning technical documentation.",
    achievements: [
      "Performed Linux kernel/BSP and AOSP customization, device‑driver integration, and board bring‑up across display, touch, camera, audio & charging subsystems",
      "Customized AOSP and implemented full & incremental OTA update delivery on QCM6125 devices; also worked on the Android layer of off‑the‑shelf Rockchip‑based devices",
      "Performed microphone data processing, dual‑mic noise cancellation, and speaker tuning for clear audio in compact designs",
      "Integrated battery calibration and charging ICs supporting fast & reverse wireless charging, with thermal cutoffs and safety logic",
      "Designed high‑speed flex & multilayer PCBs with EMI control and signal integrity, with detailed schematic/component‑level reviews in Altium",
      "Resolved board‑level issues using signal probing, oscilloscopes & logic analyzers; mentored junior engineers and maintained technical documentation",
    ],
    technologies: [
      "Qualcomm QCM6125",
      "Quectel SC668S SOM",
      "AOSP / Android",
      "Linux Kernel & BSP",
      "OTA (Full/Incremental)",
      "Audio & Noise Cancellation",
      "Power Management ICs",
      "Flex & Multilayer PCB (Altium)",
    ],
  },
  {
    id: 2,
    company: "AIO APP Inc",
    position: "International Engineering Visits — China (4 Visits)",
    location: "Shenzhen, China",
    duration: "2024 – 2025",
    type: "Contract",
    description:
      "Across four engineering visits to AIO's China manufacturing partner, progressed from device bring‑up and optimization to full‑scale mass production, driving validation, compliance and production‑line readiness.",
    achievements: [
      "Performed device bring‑up and optimized key peripherals (display, touch, battery, speaker, MIC) for power efficiency & performance",
      "Led antenna tuning (2.4/5 GHz), FCC compliance (EMI/EMC, ESD, OTA), USB, vibration/drop testing & thermal profiling with 8‑probe monitoring",
      "Oversaw SMT (footprints, reflow, X‑ray, AOI, BGA dye testing) and drove the production line with GMS key flashing & provisioning",
      "Managed final firmware deployment, functional testing, and coordinated product shipment",
    ],
    technologies: [
      "Peripherals Optimization",
      "Antenna & RF Tuning",
      "EMI/EMC/ESD/OTA Testing",
      "Thermal Profiling",
      "SMT & Mass Production",
      "GMS Key Flashing/Provisioning",
    ],
  },
  {
    id: 3,
    company: "TeReSol Pvt. Ltd",
    position: "Hardware Design Engineer",
    location: "Islamabad, Pakistan",
    duration: "08/2023 – 11/2023",
    type: "Full‑time",
    description:
      "Designed and debugged embedded firmware, automated build processes, and managed custom Nvidia Tegra GPU card cloning & flashing.",
    achievements: [
      "Developed embedded firmware in C/C++ and automated tasks with Bash/Shell scripts",
      "Traced and fixed critical bugs to enable functional firmware releases",
      "Cloned & flashed customized Nvidia Tegra GPU boards for proof‑of‑concept",
      "Collaborated closely with QA on regression testing and release sign‑off",
    ],
    technologies: [
      "Embedded C/C++",
      "Bash/Shell Scripting",
      "Nvidia Tegra",
      "Firmware Debugging",
      "Process Automation",
    ],
  },
];

export const education = [
  {
    institution: "COMSATS University Islamabad",
    degree: "Bachelor of Science in Electrical (Computer) Engineering",
    specialization: "Embedded Systems",
    duration: "09/2019 – 09/2023",
    gpa: "3.31",
  },
];

export const awards = [
  {
    title: "Microwiz Winner",
    issuer: "Visospark '23, COMSATS",
  },
  {
    title: "Leadership Excellence Award",
    issuer: "IEEE SAC Leadership Dialogue 2022",
  },
  {
    title: "Sumo Robot Winner",
    issuer: "HI ROBO TEC, Taxila",
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 relative">
            {/* Timeline spine */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-foreground/[0.08] to-transparent hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Reveal key={exp.id} delay={index * 100}>
                  <div className="relative sm:pl-10">
                    <div className="absolute left-0 top-6 w-[31px] h-[31px] rounded-full glass border-emerald-500/40 hidden sm:flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <Card className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-foreground text-xl mb-2">
                              {exp.position}
                            </CardTitle>
                            <CardDescription className="text-emerald-400 text-lg font-semibold mb-2">
                              {exp.company}
                            </CardDescription>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                              <Badge variant="outline" className="border-emerald-500/40 text-emerald-400">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-foreground/80 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-foreground font-semibold mb-2 font-mono-tech text-sm">// key_achievements</h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-foreground/70 text-sm flex items-start">
                                <span className="text-emerald-400 mr-2 mt-1">▸</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-foreground/[0.04] text-muted-foreground border border-foreground/[0.06] hover:bg-emerald-500 hover:text-background hover:border-emerald-500 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="space-y-8">
            <Reveal delay={100}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card
                      key={index}
                      className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 p-6"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold text-base mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-emerald-400 font-medium text-sm mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground text-sm mb-2">
                            {edu.specialization}
                          </p>
                          <div className="flex items-center gap-3 text-muted-foreground text-xs">
                            <span>{edu.duration}</span>
                            <Badge variant="outline" className="border-emerald-500/40 text-emerald-400">
                              GPA: {edu.gpa}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certifications */}
            <Reveal delay={200}>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
                <Card className="glass border-foreground/[0.06] p-6">
                  <div className="space-y-3 text-sm">
                    <div className="text-foreground/80 flex items-start">
                      <BadgeCheck className="w-4 h-4 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                      Advanced Embedded Linux Development Specialization (Coursera)
                    </div>
                    <div className="text-foreground/80 flex items-start">
                      <BadgeCheck className="w-4 h-4 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                      Internet of Things IOT, Robotics and Hacking with NodeMCU (Udemy)
                    </div>
                    <div className="text-foreground/80 flex items-start">
                      <BadgeCheck className="w-4 h-4 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                      Mastering Linux: The Complete Guide to Becoming a Linux Pro (Udemy)
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>

            {/* Awards */}
            <Reveal delay={300}>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Awards</h3>
                <Card className="glass border-foreground/[0.06] p-6">
                  <div className="space-y-4 text-sm">
                    {awards.map((award, index) => (
                      <div key={index} className="text-foreground/80 flex items-start">
                        <Award className="w-4 h-4 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-foreground font-medium">{award.title}</div>
                          <div className="text-muted-foreground text-xs">{award.issuer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}