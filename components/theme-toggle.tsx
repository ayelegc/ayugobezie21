'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { FiMoon, FiSun } from 'react-icons/fi';  
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  const ThemeIcon = resolvedTheme === 'light' ? FiSun : FiMoon;
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={toggleTheme}
      className="flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      <ThemeIcon 
        className="w-5 h-5 text-orange-500"  
        aria-hidden="true"
      />
      <span className="sr-only">Theme</span>
    </Button>
  );
}
