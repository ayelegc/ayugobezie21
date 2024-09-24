import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-4 backdrop-blur-md shadow-lg'>
      <nav className='container flex max-w-3xl items-center justify-between'>
      

        {/* Navigation links */}
        <ul className='flex items-center gap-8 text-lm font-large'>
          <li className='transition-colors hover:text-foreground/80'>
            <Link href='/'>Home</Link>
          </li>
          <li className='transition-colors hover:text-foreground/80'>
            <Link href='/posts'>TechPosts</Link>
          </li>
          <li className='transition-colors hover:text-foreground/80'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground/80'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='transition-colors hover:text-foreground/80'>
            <Link 
              href='https://drive.google.com/file/d/1hGMZzv8OMmYPRjJ01mcLi25c9pRi_OxX/view?usp=sharing' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              View My CV
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
