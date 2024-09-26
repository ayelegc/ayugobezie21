"use client"; // Mark this component as client-side

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // usePathname for route identification
import { ThemeToggle } from './theme-toggle'; // Import your theme toggle component

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname(); // Get current path to determine active link

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  // Helper function to check if the route is active
  const isActive = (path: string) => (pathname === path ? 'text-gold font-bold' : '');

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'TechPosts' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://drive.google.com/file/d/1hGMZzv8OMmYPRjJ01mcLi25c9pRi_OxX/view?usp=sharing', label: 'Download CV', external: true },
  ];

  // Function to render menu items
  const renderMenuItems = (onClickHandler?: () => void) => (
    menuItems.map(({ href, label, external }) => (
      <li key={href} className={`transition-colors hover:text-foreground/80 ${isActive(href)}`}>
        <Link href={href} target={external ? '_blank' : undefined} onClick={external ? onClickHandler : undefined}>
          {label}
        </Link>
      </li>
    ))
  );

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-md shadow-lg'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        {/* Drawer toggle button for mobile */}
        <button 
          className='md:hidden p-2 focus:outline-none' 
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
        >
          {isDrawerOpen ? '✖' : '☰'}
        </button>

        {/* Main navigation for larger screens */}
        <ul className='hidden md:flex items-center gap-4 md:gap-8 text-lg font-medium'>
          {renderMenuItems()}
        </ul>

        {/* Theme toggle button */}
        <div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Drawer navigation for mobile screens */}
      {isDrawerOpen && (
        <div className='fixed inset-0 z-40 bg-black/50 md:hidden' onClick={toggleDrawer}>
          <div className='absolute top-0 right-0 w-64 h-full bg-background p-4' onClick={(e) => e.stopPropagation()}>
            <ul className='flex flex-col items-start gap-4'>
              {renderMenuItems(toggleDrawer)}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
