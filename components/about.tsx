'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
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
              src="/about-me.png"
              alt="Profile picture"
              width="252"
              height="252"
              quality="95"
              priority={true}
              className="h-29 w-29 flex items-center mb-8 justify-center rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <p className="mb-3">
        After graduating with a Bachelor's degree in{' '}
        <span className="font-medium">Digital and System Design</span>, I
        decided to continue pursue my passion for programming. I continue as a
        Master student at Aalto where I study{' '}
        <span className="font-medium">Security and Cloud Computing</span>.{' '}
        <span className="italic">My favorite part of the study</span> is that
        I'm exposed to several technologies. I{' '}
        <span className="italic">love</span> the feeling of finally figuring out
        a solution to a problem. My most used language is{' '}
        <span className="font-bold">Python</span>. I am also familiar with
        TypeScript, DevOps process (GitLab), and currently I'm learning Swift. I
        am always looking to learn new technologies. I am actively looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading, or
        going for a swim. I'm eager to{' '}
        <span className="font-medium">learning new things</span>. I'm currently
        learning about{' '}
        <span className="font-medium">
          root of languages, and wanting to learn an instrument.
        </span>
      </p>
    </motion.section>
  );
}
