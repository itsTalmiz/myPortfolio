'use client';

import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Header */}
      <header className="bg-[#243447] border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <FileText className="w-6 h-6 text-orange-500" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                This Privacy Policy describes how Alex Thompson ("I", "me", or "my") collects, uses, and protects your personal information when you visit my portfolio website and use the contact form.
              </p>
              <p className="text-sm text-gray-400">
                <Clock className="w-4 h-4 inline mr-2" />
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Eye className="w-6 h-6 text-orange-500" />
                <span>Information I Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Form Information</h3>
                <p className="mb-2">When you submit the contact form, I collect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Your full name</li>
                  <li>Email address</li>
                  <li>Subject of your inquiry</li>
                  <li>Message content</li>
                  <li>Date and time of submission</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Automatic Information</h3>
                <p className="mb-2">I may automatically collect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral source</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How I Use Information */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <UserCheck className="w-6 h-6 text-orange-500" />
                <span>How I Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <p>I use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-white">Communication:</strong> To respond to your inquiries and provide requested information about my services</li>
                <li><strong className="text-white">Project Discussion:</strong> To understand your hardware engineering needs and discuss potential collaboration</li>
                <li><strong className="text-white">Professional Networking:</strong> To maintain professional relationships and follow up on business opportunities</li>
                <li><strong className="text-white">Website Improvement:</strong> To analyze website usage and improve user experience</li>
                <li><strong className="text-white">Security:</strong> To protect against spam, fraud, and other malicious activities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-xl">
                <Lock className="w-6 h-6 text-orange-500" />
                <span>Data Protection & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <p>I take the security of your personal information seriously and implement appropriate measures:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-white">Encryption:</strong> All data transmission is encrypted using SSL/TLS protocols</li>
                <li><strong className="text-white">Secure Storage:</strong> Contact form submissions are stored securely and access is limited</li>
                <li><strong className="text-white">Email Security:</strong> Communications are sent through secure SMTP servers</li>
                <li><strong className="text-white">Regular Updates:</strong> Security measures are regularly reviewed and updated</li>
                <li><strong className="text-white">Access Control:</strong> Only I have access to your personal information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Data Sharing & Third Parties</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <p><strong className="text-white">I do not sell, trade, or share your personal information with third parties</strong> except in the following limited circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-white">Service Providers:</strong> Trusted email service providers (like Gmail/SMTP servers) used to send and receive messages</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect legal rights</li>
                <li><strong className="text-white">Business Transfer:</strong> In the unlikely event of a business sale or merger</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Your Rights & Choices</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information I have about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="text-white">Opt-out:</strong> Unsubscribe from future communications at any time</li>
                <li><strong className="text-white">Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact me at{' '}
                <a href="mailto:alex.thompson@email.com" className="text-orange-400 hover:text-orange-300 underline">
                  alex.thompson@email.com
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Cookies & Tracking */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed space-y-4">
              <p>This website uses minimal tracking:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong className="text-white">Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong className="text-white">No Analytics:</strong> I do not use Google Analytics or similar tracking services</li>
                <li><strong className="text-white">No Social Media Tracking:</strong> No Facebook Pixel or similar tracking pixels</li>
                <li><strong className="text-white">Local Storage:</strong> May store form data temporarily to improve user experience</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-xl text-white">Contact Me About Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or how I handle your personal information, please contact me:
              </p>
              <div className="space-y-2">
                <p><strong className="text-white">Email:</strong> <a href="mailto:alex.thompson@email.com" className="text-orange-400 hover:text-orange-300 underline">alex.thompson@email.com</a></p>
                <p><strong className="text-white">Response Time:</strong> I will respond to privacy-related inquiries within 48 hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-xl text-white">Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 leading-relaxed">
              <p>
                I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last modified" date. 
                I encourage you to review this policy periodically to stay informed about how I protect your information.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-all duration-300 hover:scale-105">
              Return to Portfolio
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}