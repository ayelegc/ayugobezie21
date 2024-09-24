'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size='sm'
      variant='outline' // Changed to outline for a more professional look
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }}
      className='flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700' // Added hover effects
      aria-label='Toggle theme'
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='w-5 h-5 text-orange-500' /> 
      ) : (
        <MoonIcon className='w-5 h-5 text-blue-700' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
