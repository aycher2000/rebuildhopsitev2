'use client';

import { useEffect } from 'react';

export default function MobileNavHelper() {
  useEffect(() => {
    // Make sure this runs only on the client side
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
      console.log('MobileNavHelper initialized');
      
      const handleMenuToggle = () => {
        console.log('Menu button clicked via helper');
        const isMenuVisible = mobileMenu.style.display === 'block';
        
        if (isMenuVisible) {
          mobileMenu.style.display = 'none';
        } else {
          mobileMenu.style.display = 'block';
        }
      };
      
      // Add event listener with capture to ensure it runs
      menuButton.addEventListener('click', handleMenuToggle, true);
      
      // Debug click events
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('#mobile-menu-button')) {
          console.log('Click detected on or inside menu button');
        }
      });
      
      return () => {
        menuButton.removeEventListener('click', handleMenuToggle, true);
      };
    }
  }, []);
  
  return null; // This component doesn't render anything
}