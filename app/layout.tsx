// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css'; 
import Providers from '@/components/providers'; 
import Header from '@/components/header'; 
import Footer from '@/components/footer'; 

//fonts loader
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif' 
});
// Metadata for the page
export const metadata: Metadata = {
  title: "Ayele's Portfolio Next App",
  description: "Generated by Ayele app",
};
// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
            <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
