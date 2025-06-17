'use client';

import { CldImage } from 'next-cloudinary';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  // Create a ref for the about section
  const ref = useRef(null);
  // Detect if the section is in view
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion(); // Check if the user prefers reduced motion

  const container = {
    hidden: { opacity: 0, y: -50 }, // Initial hidden state
    visible: {
      opacity: 1,
      y: 0, // Drop into position
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 }, // Each div starts hidden and above
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    }, // Animate into position
  };

  return (
    <div
      className="grid lg:grid-cols-2 gap-8 place-items-center lg:place-items-start"
      ref={ref}
    >
      <div className="self-center">
        <div className="lg:w-96 lg:h-96 sm:w-60 sm:h-60 w-48 h-48 bg-neutral-300 dark:bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px] flex">
          <CldImage
            src="/docs/About"
            alt="Profile picture"
            width={2224}
            height={2830}
            className="object-contain rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"
          />
        </div>
      </div>

      <motion.div
        className="flex flex-col gap-4 lg:w-full"
        variants={container} // Apply container animation
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        transition={{ duration: 0.5 }} // Adjust transition duration
      >
        {['Eager to learn', 'Collaborative', 'Sports'].map((title, index) => (
          <motion.div
            key={index}
            className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl"
            variants={item}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : item.hidden} // Initial state
            animate={isInView ? item.visible : item.hidden} // Animate when in view
          >
            <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">
              {title}
            </h2>
            <p className="text-sm sm:text-base">
              {title === 'Eager to learn'
                ? 'I love learning new things especially when it comes to technology and programming. I am always looking for new challenges and ways to improve my skills.'
                : title === 'Collaborative'
                ? 'I am a team player and I love working with others because I can learn a lot from them and they from me.'
                : 'I love doing sports and keeping myself fit and healthy. I\'ve played football for most of my life, but now I often go for a run to stay fit.'}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;