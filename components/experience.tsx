'use client';

import React from 'react';
import Image from 'next/image';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.4);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
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
              src="/experience.png"
              alt="Profile picture"
              width="262"
              height="262"
              quality="95"
              priority={true}
              className="h-29 w-29 flex items-center pb-2 mb-2 justify-center rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
