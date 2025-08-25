'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

export const experiences = [
  {
    id: 1,
    company: "AIO APP Inc",
    position: "Hardware Design Engineer",
    location: "Islamabad, Pakistan",
    duration: "11/2023 – Present",
    type: "Full‑time",
    description:
      "Spearheading firmware development and hardware integration on the Qualcomm QCM6125 / Quectel SC668S platform. Driving complete system bring‑up from display and touch to power management and safety.",
    achievements: [
      "Led firmware development on QCM6125, integrating multiple modules via QNavigator, QFlash & QPST",
      "Calibrated display brightness, touch sensitivity & camera interfaces for optimal UX",
      "Implemented fast‑charging, reverse wireless charging & thermal safety cut‑offs",
      "Designed high‑speed flex & multilayer PCBs with EMI control and flex interposers for early testing",
    ],
    technologies: [
      "Qualcomm QCM6125",
      "Quectel SC668S",
      "QNavigator / QFlash / QPST",
      "Display & Touch Calibration",
      "Power Management ICs",
      "Flex PCB Design",
      "Firmware (C/C++)",
    ],
  },
  {
    id: 2,
    company: "AIO APP Inc",
    position: "International Engineering Visit",
    location: "Shenzhen, China",
    duration: "03/2025 – 04/2025",
    type: "Contract",
    description:
      "On‑site hardware validation and optimization during an international engineering exchange. Drove end‑to‑end testing, SMT oversight and product qualification.",
    achievements: [
      "Optimized display, touch, battery, speaker & mic for power vs. performance",
      "Performed antenna tuning (2.4/5 GHz), FCC (EMI/EMC/ESD/OTA) & multi‑probe thermal profiling",
      "Oversaw SMT: footprints, reflow, X‑ray, AOI & dye testing on BGA assemblies",
      "Managed firmware flashing, system validation & coordinated final product shipment",
    ],
    technologies: [
      "Peripherals Optimization",
      "Antenna & RF Tuning",
      "EMI/EMC/ESD/OTA Testing",
      "Thermal Profiling",
      "SMT Process",
      "Firmware Validation",
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
    gpa: "3.2", // add if you have one
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-12 h-1 bg-orange-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                className="bg-[#243447] border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-orange-500 text-lg font-semibold mb-2">
                        {exp.company}
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-[#243447] border-gray-700 p-6"
                  >
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-orange-500 font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">
                        {edu.specialization}
                      </p>
                      <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm">
                        <span>{edu.duration}</span>
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
              <Card className="bg-[#243447] border-gray-700 p-6">
                <div className="space-y-3 text-sm">
                  <div className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Certified Professional Engineer (PE)
                  </div>
                  <div className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    ARM Accredited Engineer
                  </div>
                  <div className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    IPC-A-610 Certified
                  </div>
                  <div className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    Six Sigma Green Belt
                  </div>
                  <div className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    ISO 26262 Functional Safety
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}