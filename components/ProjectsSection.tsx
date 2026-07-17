'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Reveal } from '@/components/Reveal';
import {
  Github, ExternalLink, Cpu, Shield, ArrowUpRight, Monitor,
  Bot,
  MessageSquare,
  GitBranch,
  Eye,
  Binary,
  Sprout,
  Network,
  Zap,
  Dices,
  Receipt,
} from 'lucide-react';
import {
  FpgaConvolutionArt,
  DecimalCounterArt,
  PlantMonitorArt,
  NetworkArchitectureArt,
  PowerSupplyArt,
  DiceRollArt,
  MultiRobotArt,
  BillingSystemArt,
} from '@/components/ProjectArt';

const projects = [
  {
    id: 1,
    title: "AI Device",
    description:
      "Design and development of an interactive AI device",
    longDescription:
      "Developed system firmware on Quectel SOM, integrating display, touch, and camera modules for real‑time interaction. Implemented battery management, fast charging, reverse wireless charging logic, and designed high‑speed flex & multilayer PCBs with advanced signal integrity and EMI control.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Monitor,
    technologies: [
      "Quectel SC668S",
      "Display & Touch",
      "Camera Integration",
      "Power Management",
      "Flex PCB Design",
    ],
    category: "Embedded Systems",
    duration: "11/2023 – Present",
    status: "In Progress",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Semi‑Autonomous Tracking Sentry Robot",
    description:
      "FYP: Semi‑autonomous object‑tracking sentry robot",
    longDescription:
      "Designed and built a robot capable of detecting, tracking, and aiming at moving targets. Integrated a Raspberry Pi 4 as the onboard computer with real‑time image processing for target tracking, provided live visual output over WiFi, and let the user select a target for the robot to aim at — demonstrating the potential of semi‑autonomous systems in security applications.",
    image:
      "/project/SAOTR.png",
    icon: Bot,
    technologies: [
      "Raspberry Pi 4",
      "Python",
      "Computer Vision",
      "PCB Fabrication",
      "Embedded C",
    ],
    category: "Robotics",
    duration: "05/2022 – 06/2023",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7089844394522025984/",
  },
  {
    id: 3,
    title: "Image Convolution on FPGA",
    description:
      "Accelerated image convolution pipeline using FPGA",
    longDescription:
      "Stored an image in the FPGA's ROM and designed a controller that convolved it against multiple kernels, writing the results to RAM. Streamed both the original and convolved images out over the FPGA's VGA port for real‑time visual comparison, achieving efficient resource utilization on the Xilinx platform.",
    icon: MessageSquare,
    art: FpgaConvolutionArt,
    technologies: ["Verilog", "FPGA", "Xilinx", "VGA", "Digital Design"],
    category: "Digital Design",
    duration: "09/2022 – 02/2023",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7076157169204666368/",
  },
  {
    id: 4,
    title: "Line‑Following, Sumo & Obstacle‑Avoider Robot",
    description:
      "Multi‑mode Arduino robot: line‑following, sumo, and obstacle avoidance",
    longDescription:
      "Engineered an Arduino‑based robot capable of line following, sumo battling, and obstacle avoidance. Designed interactive Sumo competition app and used a double‑layer PCB as the chassis.",
    image:
      "/project/LFR.jpeg",
    icon: GitBranch,
    technologies: [
      "Arduino",
      "PCB Design",
      "C/C++",
      "Mobile App (MIT App Inventor)",
      "Sensor Integration",
    ],
    category: "Robotics",
    duration: "06/2022 – 09/2022",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:6890727805563604992/",
  },
  {
    id: 5,
    title: "Vessel Detection",
    description:
      "Retinal blood vessel segmentation enhancement using the Frangi filter",
    longDescription:
      "Solved a complex engineering problem in a Digital Image Processing course: enhancing vessel detection in retinal images and improving accuracy over raw segmented images. Implemented the Frangi2D filter to bring segmentation results significantly closer to ground truth, with a side‑by‑side comparison of segmented, enhanced, and ground‑truth images demonstrating the improvement.",
    image:
      "/project/image_conv.jpeg",
    icon: Eye,
    technologies: ["MATLAB", "Digital Image Processing", "Frangi Filter", "Vessel Segmentation"],
    category: "Digital Image Processing",
    duration: "03/2023 – 06/2023",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "4‑Digit Decimal Counter on Nexys2 FPGA",
    description:
      "Parametrized Verilog counter driving a 4‑digit 7‑segment display",
    longDescription:
      "Built a parametrized Verilog counter that increments to a user‑supplied 8‑bit value, displaying up to 9999 across four 7‑segment digits. Implemented BCD‑to‑binary and binary‑to‑7‑segment conversion modules, a multiplexer to drive the shared display bus, and a custom clock divider derived from the FPGA's onboard clock.",
    icon: Binary,
    art: DecimalCounterArt,
    technologies: ["Verilog", "FPGA (Nexys2)", "7‑Segment Display", "Digital Logic"],
    category: "Digital Design",
    duration: "11/2022",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "IoT Based Plant Monitoring System",
    description:
      "NodeMCU system tracking soil moisture, temperature & humidity with remote pump control",
    longDescription:
      "Built an IoT plant monitoring system on a NodeMCU that reports soil moisture, temperature, and humidity, and lets the user turn a water pump on or off remotely — accessible from anywhere via the cloud. Integrated a soil moisture sensor, a temperature/humidity sensor, and a relay to drive the pump.",
    icon: Sprout,
    art: PlantMonitorArt,
    technologies: ["NodeMCU", "Soil Moisture Sensor", "Temp/Humidity Sensor", "Relay", "IoT"],
    category: "IoT",
    duration: "09/2022",
    status: "Completed",
    githubUrl: "https://bit.ly/3rT93pv",
    liveUrl: "https://bit.ly/3FZKwEg",
  },
  {
    id: 8,
    title: "Dynamic Network Architecture for a Company",
    description:
      "VLSM‑based enterprise network design with dynamic routing and secure NAT gateway",
    longDescription:
      "Designed and implemented a dynamic network architecture for a research company. Used VLSM to efficiently assign IP configurations and optimize resource usage across departments, integrated RIPv2 and OSPF for dynamic routing, configured VLANs with inter‑VLAN routing for segmented traffic, and set up a secure NAT‑overload gateway for public‑private IP translation to external networks.",
    icon: Network,
    art: NetworkArchitectureArt,
    technologies: ["VLSM", "RIPv2", "OSPF", "VLANs", "NAT"],
    category: "Networking",
    duration: "02/2022 – 06/2022",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 9,
    title: "Power Supply",
    description:
      "Multi‑rail AC‑DC power supply with variable output regulation",
    longDescription:
      "Designed a power supply that steps 220V AC down to 14V AC, rectifies it to 14V DC, and regulates it to multiple selectable rails — 12V, 9V, 5V, and a variable 0–12V output. Short‑circuit protection was identified as a known limitation for future iteration.",
    icon: Zap,
    art: PowerSupplyArt,
    technologies: ["Power Electronics", "AC‑DC Conversion", "Voltage Regulation"],
    category: "Power Electronics",
    duration: "02/2022 – 03/2022",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 10,
    title: "Dice Roll",
    description:
      "Arduino digital dice with OLED display and shake‑to‑roll detection",
    longDescription:
      "Built a digital dice using an Arduino Uno, an OLED display for the result, push buttons for manual control, and a vibration sensor so the dice can be \"rolled\" by shaking — combining simple sensor input with real‑time display output.",
    icon: Dices,
    art: DiceRollArt,
    technologies: ["Arduino", "OLED Display", "Vibration Sensor", "C"],
    category: "Embedded Systems",
    duration: "02/2022",
    status: "Completed",
    githubUrl: "https://bit.ly/37XaZnj",
    liveUrl: "#",
  },
  {
    id: 11,
    title: "MultiFunctional Robot",
    description:
      "Three‑mode Arduino robot: line following, obstacle avoidance & Bluetooth app control",
    longDescription:
      "Built a versatile robot combining three functions in one platform: line following, obstacle avoidance, and manual Bluetooth control through a self‑built companion app — one of the standout projects among peers in the course.",
    icon: Bot,
    art: MultiRobotArt,
    technologies: ["Arduino", "Bluetooth", "Line Following", "Obstacle Avoidance"],
    category: "Robotics",
    duration: "12/2021 – 01/2022",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 12,
    title: "Digital Receipt / Billing System",
    description:
      "C++ billing system that stores customer data and auto‑generates receipts",
    longDescription:
      "Built a digital billing system in C++ to replace handwritten receipts — storing customer data long‑term and generating accurate, automatic receipts. Aimed at the efficiency and reliability gap of manual, handmade billing in small businesses.",
    icon: Receipt,
    art: BillingSystemArt,
    technologies: ["C++", "OOP", "Data Storage"],
    category: "Software",
    duration: "10/2020 – 02/2021",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/[0.06] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hardware, embedded systems, robotics, and coursework spanning firmware, PCB design, and digital systems.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 6) * 80}>
              <Card
                className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer group overflow-hidden h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                  ) : project.art ? (
                    <div className="w-full h-48 bg-gradient-to-br from-emerald-500/[0.05] to-sky-500/[0.05] transition-transform duration-700 group-hover:scale-105">
                      <project.art />
                    </div>
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-emerald-500/[0.08] to-sky-500/[0.08]">
                      <project.icon className="w-14 h-14 text-emerald-400/50" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                  {/* Project Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-11 h-11 rounded-lg glass border-foreground/[0.1] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                      <project.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`shadow-lg border-0 ${project.status === 'Completed' ? 'bg-emerald-500 text-background' : 'bg-sky-500 text-background'}`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4 text-background" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-emerald-400 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-foreground/[0.1] text-muted-foreground hover:border-emerald-500/40 hover:text-emerald-300 transition-colors bg-foreground/[0.02]"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="border-foreground/[0.1] text-muted-foreground bg-foreground/[0.02]">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 text-sm font-medium font-mono-tech">{project.category}</span>
                    <span className="text-muted-foreground text-xs">{project.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl glass border-foreground/[0.08] text-foreground max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-foreground flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <selectedProject.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span>{selectedProject.title}</span>
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-lg">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ) : selectedProject.art ? (
                      <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-500/[0.05] to-sky-500/[0.05]">
                        <selectedProject.art />
                      </div>
                    ) : (
                      <div className="w-full h-64 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500/[0.08] to-sky-500/[0.08]">
                        <selectedProject.icon className="w-20 h-20 text-emerald-400/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                        <Cpu className="w-5 h-5 mr-2 text-emerald-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center flex-wrap gap-3">
                      <Badge
                        className={`border-0 ${selectedProject.status === 'Completed' ? 'bg-emerald-500 text-background' : 'bg-sky-500 text-background'}`}
                      >
                        {selectedProject.status}
                      </Badge>
                      <span className="text-emerald-400 font-medium font-mono-tech text-sm">{selectedProject.category}</span>
                      <span className="text-muted-foreground text-sm">{selectedProject.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.githubUrl !== '#' && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-emerald-500 hover:bg-emerald-400 text-background transition-all duration-300 hover:scale-105">
                            <Github className="w-4 h-4 mr-2" />
                            View Source
                          </Button>
                        </a>
                      )}
                      {selectedProject.liveUrl !== '#' && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="glass border-foreground/[0.1] text-foreground/90 hover:text-emerald-400 hover:border-emerald-500/40">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {selectedProject.liveUrl.includes('linkedin.com') ? 'View on LinkedIn' : 'Live Link'}
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-emerald-400" />
                    Project Details
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
