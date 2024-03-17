'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import { useSectionInView } from '@/lib/hooks';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
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
              src="/contact.png"
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
      <p className="pb-3 mb-5 ext-gray-700 -mt-6 dark:text-white/80">
        Please contact me through this email address{' '}
        <a className="italic" href="mailto:nhutmcao@gmail.com">
          nhutmcao@gmail.com,
        </a>
        <br />
        or using the form below.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
