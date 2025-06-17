'use client';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { CldImage } from 'next-cloudinary';
import { LuDownload, LuMail } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Header = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentText, setCurrentText] = useState('');

  const name = 'Sybrin Pypaert';
  const typeSpeed = 100;
  const repeatInterval = 4000; // 4 seconds

  useEffect(() => {
    let i = 0;
    let txt = name;
    let speed = typeSpeed;

    const typeWriter = () => {
      if (i < txt.length) {
        setCurrentText(txt.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText(''); // reset the text after it's fully written
          i = 0;
          intervalId = setInterval(typeWriter, speed); // restart typing
        }, repeatInterval);
      }
    };

    let intervalId = setInterval(typeWriter, speed); // start typing

    return () => clearInterval(intervalId); // clean up interval on unmount
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/docs/SybrinPypaert-CV.pdf';
    link.setAttribute('download', 'SybrinPypaert-CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16 gap-8">
      {/* Text Section with Fade-in from Top Animation */}
      <motion.div
        className="lg:p-8 p-2 text-center lg:text-left max-w-2xl"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: shouldReduceMotion ? 0 : 0 }} // No movement animation if reduced motion
        transition={{ duration: 0.8 }}
      >
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold md:pb-4">
          Hello, I'm{' '}
          <span className="text-primary-dark dark:text-primary-neutral">
            {currentText}
          </span>
        </h1>
        <p className="lg:text-3xl text-lg font-semibold">Junior Full Stack Developer</p>
        <p className="py-12 md:text-2xl">
          I&apos;m currently studying{' '}
          <Link
            className="text-primary-dark dark:text-primary-neutral underline"
            href={'https://mct.be/'}
            target="_blank"
          >
            MCT
          </Link>{' '}
          or Multimedia &amp; Creative Technology at{' '}
          <Link
            className="text-primary-dark dark:text-primary-neutral underline"
            href={'https://www.howest.be/nl'}
            target="_blank"
          >
            Howest
          </Link>{' '}
          in Belgium.
        </p>
        <div className="flex items-center gap-4 lg:gap-8 justify-center lg:justify-start">
          <Link
            className="bg-primary-dark dark:bg-primary-neutral flex items-center gap-2 px-4 py-2 md:py-4 md:px-8 rounded-lg text-white dark:text-secundary-950 font-semibold"
            href="#"
            onClick={handleDownload}
          >
            <LuDownload className="md:w-6 md:h-6 w-4 h-4" />
            <p className="md:text-xl">Resume</p>
          </Link>
          <Link href="mailto:sybrin.pypaert@student.howest.be">
            <LuMail className="w-8 h-8" />
          </Link>
          <Link href="https://www.linkedin.com/in/sybrin-pypaert/" target="_blank">
            <SiLinkedin className="w-8 h-8" />
          </Link>
          <Link href="https://github.com/PypaertSybrin" target="_blank">
            <SiGithub className="w-8 h-8" />
          </Link>
        </div>
      </motion.div>

      {/* Image Section with Fade-in from Bottom Animation */}
      <motion.div
        className="lg:p-8 p-2"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: shouldReduceMotion ? 0 : 0 }} // No movement animation if reduced motion
        transition={{ duration: 0.8 }}
      >
        <div className="lg:w-96 lg:h-96 sm:w-60 sm:h-60 w-60 h-60 bg-secundary-200 dark:bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px] flex">
          <CldImage
            src="/docs/Home"
            alt="Profile picture"
            width={1513}
            height={1708}
            priority={true}
            className="object-contain rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
