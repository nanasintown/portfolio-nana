'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const fadedAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.7);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/skill.png"
              alt="Profile picture"
              width="252"
              height="252"
              quality="95"
              priority={true}
              className="h-29 w-29 flex items-center mt-10 pt-12 pb-2 mb-2 justify-center rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <ul className="flex justify-center gap-2 text-lg flex-wrap text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadedAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
