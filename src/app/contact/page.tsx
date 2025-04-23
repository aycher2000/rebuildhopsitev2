'use client';

import { useState } from 'react';
import Image from 'next/image';
import FuturisticButton from '@/components/FuturisticButton';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chrishopbarton/',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/DJHOP619',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 4L12 14M12 14L7 19M12 14L19 19M12 14L5 4" />
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:djhop@hoponthecut.com',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M22 7L12 14L2 7" />
      </svg>
    )
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/backround.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse z-[2]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000 z-[2]" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-6xl font-heading text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-gradient">
          Contact
        </h1>

        {/* Navigation buttons */}
        <div className="flex flex-row gap-6 justify-center px-4 mb-12">
          <FuturisticButton href="/music" variant="secondary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
            Music
          </FuturisticButton>
          <FuturisticButton href="/discography" variant="secondary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
            Discog
          </FuturisticButton>
          <FuturisticButton href="/about" variant="primary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
            About
          </FuturisticButton>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-primary/30 p-8">
            <h2 className="text-2xl font-heading mb-6 text-primary">Send a Message</h2>
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-primary text-2xl mb-4">✓</div>
                <h3 className="text-xl font-heading mb-2">Message Sent!</h3>
                <p className="text-white/80">Thank you for your message. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-primary hover:text-primary/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="general">General Inquiry</option>
                    <option value="press">Press</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-black/40 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    required
                  />
                </div>
                
                {status === 'error' && (
                  <div className="text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full bg-primary/20 border border-primary/30 text-white py-3 rounded-md transition-colors backdrop-blur-sm ${
                    status === 'loading' 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-primary/30'
                  }`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-primary/30 p-8">
              <h2 className="text-2xl font-heading mb-6 text-primary">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white/80">Email</h3>
                  <p className="text-primary">djhop@hoponthecut.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white/80">Booking</h3>
                  <p className="text-primary">djhop@hoponthecut.com</p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-primary/30 p-8 text-center">
              <h2 className="text-2xl font-heading mb-6 text-primary">Social Media</h2>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/70 hover:text-primary transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 