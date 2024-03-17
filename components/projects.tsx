'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[45rem] text-center"
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
              src="/my-project.png"
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
        Some of my personal projects. Besides these, I also practice using{' '}
        <span className="font-medium">Goole Cloud Platform</span> (working with{' '}
        <span className="font-medium">Terraform, RabbitMQ</span>), working with
        SQL queries <span className="font-medium">(PostgreSQL, Python)</span>,
        and <span className="italic">networking principle</span> with Lab
        Networking course's assignments. I had a fundamental foundation in{' '}
        <span className="font-medium">R programming</span> and working with
        statistic.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
