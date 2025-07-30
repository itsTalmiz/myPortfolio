'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Github, ExternalLink, Cpu, Wifi, Zap, Shield, ArrowUpRight, Play, Pause, RotateCcw, Monitor,     // for Table Side AI Device
  Bot,       // for Sentry Robot
  MessageSquare, // for FPGA Convolution
  GitBranch,  } from 'lucide-react';

const projects = [
 {
    id: 1,
    title: "Table Side AI Device",
    description:
      "Design and development of an interactive table‑side AI device",
    longDescription:
      "Developed system firmware on Quectel SC668S SOM, integrating display, touch, and camera modules for real‑time interaction. Implemented battery management, fast charging, reverse wireless charging logic, and designed high‑speed flex & multilayer PCBs with advanced signal integrity and EMI control.",
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
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    title: "Semi‑Autonomous Tracking Sentry Robot",
    description:
      "FYP: Semi‑autonomous object‑tracking sentry robot",
    longDescription:
      "Designed and built a robot capable of detecting, tracking, and aiming at moving targets. Integrated Raspberry Pi for high‑level control, implemented object‑tracking algorithms in Python, and fabricated a double‑layer PCB chassis.",
    image:
      "https://images.pexels.com/photos/534599/pexels-photo-534599.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Bot,
    technologies: [
      "Raspberry Pi",
      "Python",
      "Computer Vision",
      "PCB Fabrication",
      "Embedded C",
    ],
    category: "Robotics",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Image Convolution on FPGA",
    description:
      "Accelerated image convolution pipeline using FPGA",
    longDescription:
      "Developed optimized convolution algorithms in Verilog on a Xilinx FPGA, streaming VGA output of original and convolved images. Achieved real‑time performance with minimal resource utilization.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: MessageSquare,
    technologies: ["Verilog", "FPGA", "Xilinx", "VGA", "Digital Design"],
    category: "Digital Design",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-red-500 to-pink-600",
  },
  {
    id: 4,
    title: "Line‑Following, Sumo & Obstacle‑Avoider Robot",
    description:
      "Multi‑mode Arduino robot: line‑following, sumo, and obstacle avoidance",
    longDescription:
      "Engineered an Arduino‑based robot capable of line following, sumo battling, and obstacle avoidance. Designed interactive Sumo competition app and used a double‑layer PCB as the chassis.",
    image:
      "https://images.pexels.com/photos/257393/robotic-arm-hour-weather-257393.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: GitBranch,
    technologies: [
      "Arduino",
      "PCB Design",
      "C/C++",
      "Mobile App (MIT App Inventor)",
      "Sensor Integration",
    ],
    category: "Robotics",
    status: "Completed",
    githubUrl: "#",
    liveUrl: "#",
    gradient: "from-blue-400 to-teal-500",
  }
];

// Hardware-themed animated background component
const HardwareAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      if (!isPlaying) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPlaying]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-orange-500 hover:text-orange-400"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#243447] relative overflow-hidden">
      <HardwareAnimation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-up">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my hardware engineering projects featuring embedded systems, IoT solutions, and innovative electronic designs
          </p>
        </div>

        {/* Projects Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Hardware Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id={`circuit-${project.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="20" height="20" fill="none" stroke="#f97316" strokeWidth="0.5"/>
                        <circle cx="10" cy="10" r="1" fill="#f97316"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#circuit-${project.id})`}/>
                  </svg>
                </div>
                
                {/* Project Icon with Hardware Theme */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={`${project.status === 'Completed' ? 'bg-green-600 hover:bg-green-700' : 'bg-orange-600 hover:bg-orange-700'} shadow-lg`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white group-hover:text-orange-400 transition-colors text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors bg-gray-800/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-gray-600 text-gray-300 bg-gray-800/50">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                {/* Hardware Category Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 text-sm font-medium">{project.category}</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-white">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${selectedProject.gradient} rounded-lg flex items-center justify-center`}>
                      <selectedProject.icon className="w-5 h-5 text-white" />
                    </div>
                    <span>{selectedProject.title}</span>
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-lg">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {/* Hardware Overlay for Modal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Cpu className="w-5 h-5 mr-2 text-orange-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-orange-500 text-orange-400 bg-orange-500/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Badge
                        variant={selectedProject.status === 'Completed' ? 'default' : 'secondary'}
                        className={selectedProject.status === 'Completed' ? 'bg-green-600' : 'bg-orange-600'}
                      >
                        {selectedProject.status}
                      </Badge>
                      <span className="text-orange-500 font-medium">{selectedProject.category}</span>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                        <Github className="w-4 h-4 mr-2" />
                        View Source
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-orange-500" />
                    Project Details
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
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