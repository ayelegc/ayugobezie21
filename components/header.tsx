'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path ? 'text-gold font-bold' : '';

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'TechPosts' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    {
      href: 'https://drive.google.com/file/d/1hGMZzv8OMmYPRjJ01mcLi25c9pRi_OxX/view?usp=sharing',
      label: 'Download CV',
      external: true,
    },
  ];

  const renderMenuItems = (onClickHandler?: () => void) =>
    menuItems.map(({ href, label, external }) => (
      <li
        key={href}
        className={`transition-colors duration-300 ease-in-out transform hover:text-foreground/80 hover:scale-105 ${isActive(
          href
        )}`}
      >
        <Link
          href={href}
          target={external ? '_blank' : undefined}
          onClick={() => {
            if (onClickHandler) onClickHandler();
          }}
          className="relative group"
        >
          {label}
          <span
            className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"
          ></span>
        </Link>
      </li>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-md shadow-lg">
      <nav className="container flex max-w-3xl items-center justify-between">
        <button
          className="md:hidden text-3xl p-3 focus:outline-none"
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-4 md:gap-8 text-lg font-medium">
          {renderMenuItems()}
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleDrawer}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-background p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-start gap-4">
              {renderMenuItems(toggleDrawer)}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
