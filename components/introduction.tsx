import Image from 'next/image';
import myImage from '../public/images/authors/AyeleG.jpg'; 
export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='text-4xl font-bold leading-tight text-black-800 md:text-6xl'>
          I&apos;m Ayele,
        </h1>
        <p className='mt-5 text-sm text-black-800 leading-relaxed text-justify'>
  I possess strong programming skills and have extensive experience teaching web programming and database management. 
  For over six years, I have actively mentored undergraduate students on various industrial projects, relishing opportunities that foster my growth as a developer. 
  Additionally, I provide training in Oracle database management. 
  My empathetic approach, combined with a genuine passion for web development, is complemented by strong communication skills and a collaborative mindset. 
  I am deeply committed to developing high-quality full-stack web applications and sharing my knowledge with others.
</p>

      </div>
      <div className='relative flex flex-col items-center'>
        <Image
          className='rounded-full border-4 border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-3'
          src={myImage}
          alt='Ayele Gobezie'
          width={170}
          height={170}
          priority
        />
        <h2 className='mt-4 text-xl font-semibold text-black-600'>Ayele Gobezie</h2>
        <p className='text-sm font-semibold text-black-600'>Web Developer & Lecturer</p> 
  
      </div>
    </section>
  );
}
