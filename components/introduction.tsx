import Image from 'next/image';
import myImage from '/images/authors/AyeleG.jpg';


export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='text-4xl font-bold leading-tight text-black-800 md:text-5xl'>
          I&apos;m Ayele,
        </h1>
        <p className='mt-4 text-lm text-black-600 leading-relaxed text-justify'>
          I am deeply passionate about developing high-quality fullstack web applications and committed to sharing knowledge. 
          As a lecturer, I have taught courses in web development and databases, while actively mentoring over six industrial projects for undergraduate students. 
          My approach is driven by empathy and a genuine enthusiasm for web development. 
          I enjoy working on projects that introduce new learning opportunities, which continuously help me grow as a developer. 
          Additionally, I train in Oracle database management. I possess strong communication skills and a collaborative mindset.
        </p>
      </div>
      <div className='relative flex flex-col items-center'>

        
      <div>
      <img src="/images/authors/AyeleG.jpg" alt="Ayele G" />
      <h1>Hello, I'm Ayele Gobezie</h1>
    </div>
        <h2 className='mt-4 text-xl font-semibold text-black-800'>Ayele Gobezie</h2>
        <p className='text-sm font-semibold text-black-600'>Web Developer & Lecturer</p> {/* Optional subtitle */}
      </div>
    </section>
  );
}
