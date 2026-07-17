'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal } from '@/components/Reveal';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mtalmiz1234@gmail.com',
    href: 'mailto:mtalmiz1234@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 336 5267868',
    href: 'tel:+923365267868',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/itstalmiz',
    href: 'https://www.linkedin.com/in/itstalmiz/',
  },

];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // SMTP Configuration - Replace with your actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Message sent successfully! I\'ll get back to you soon.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000_30%,transparent_100%)]" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/[0.06] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your hardware project to life? Let's discuss your embedded systems needs and create something amazing together.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Reveal className="space-y-8">
            <Card className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 p-6">
              <CardHeader>
                <CardTitle className="text-foreground text-xl mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-emerald-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">{contact.label}</p>
                      <a
                        href={contact.href}
                        className="text-foreground hover:text-emerald-400 transition-colors font-medium text-lg"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300 p-6">
              <CardHeader>
                <CardTitle className="text-foreground text-xl mb-4">
                  Available For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Hardware Design Consultation',
                    'Embedded Systems Development',
                    'PCB Design & Layout',
                    'Firmware Development',
                    'Technical Mentorship',
                    'Speaking Engagements'
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 glass border-foreground/[0.06] rounded-lg hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:animate-pulse" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={150}>
          <Card className="glass border-foreground/[0.06] hover:border-emerald-500/30 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-foreground text-xl flex items-center">
                <Send className="w-6 h-6 mr-3 text-emerald-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-foreground/[0.03] border-foreground/[0.1] text-foreground focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-foreground/[0.03] border-foreground/[0.1] text-foreground focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-muted-foreground font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`bg-foreground/[0.03] border-foreground/[0.1] text-foreground focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="Hardware Project Collaboration"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`bg-foreground/[0.03] border-foreground/[0.1] text-foreground focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="Tell me about your hardware project, requirements, timeline, and any specific challenges you're facing..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                  <p className="text-muted-foreground text-xs">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-background py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Message Sent!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                {/* Privacy Notice */}
                <p className="text-muted-foreground text-xs text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                    Privacy Policy
                  </a>
                  . Your information will be kept confidential and used only to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}