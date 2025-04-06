'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      const newState = !isMenuOpen;
      mobileMenuRef.current.style.display = newState ? 'block' : 'none';
      setIsMenuOpen(newState);
    }
  };

  // Close menu on route changes
  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.display = 'none';
    }
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuRef.current) {
          mobileMenuRef.current.style.display = 'none';
        }
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Music', path: '/music' },
    { name: 'Discog', path: '/discography' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-[100] border-b border-[#00ffff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-28">
          {/* Logo and Title */}
          <div className="flex-1 flex items-center gap-2 md:gap-4">
            <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#00ffff]/30 animate-flip">
              <Image
                src="/images/logo.webp"
                alt="DJ HOP Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <Link href="/" className="text-xl md:text-4xl font-bold font-heading text-white hover:text-[#00ffff] transition-colors">
              DJ HOP
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-md text-base font-medium border border-[#00ffff]/30 backdrop-blur-sm ${
                    pathname === link.path
                      ? 'text-[#00ffff] bg-[#00ffff]/10'
                      : 'text-white hover:text-[#00ffff] hover:bg-[#00ffff]/10'
                  } transition-all duration-300`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-white rounded-md border border-[#00ffff]/30 hover:bg-[#00ffff]/10 hover:text-[#00ffff] transition-all duration-300 backdrop-blur-sm"
            id="mobile-menu-button"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden bg-black/30 backdrop-blur-md border-b border-[#00ffff]/20"
        style={{ display: 'none' }}
        id="mobile-menu"
      >
        <div className="px-2 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium border border-[#00ffff]/30 backdrop-blur-sm ${
                pathname === link.path
                  ? 'bg-[#00ffff]/10 text-[#00ffff]'
                  : 'text-white hover:text-[#00ffff] hover:bg-[#00ffff]/10'
              } transition-all duration-300`}
              onClick={() => {
                if (mobileMenuRef.current) {
                  mobileMenuRef.current.style.display = 'none';
                }
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;