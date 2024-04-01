import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import todolist from '@/public/todolist.png';
import pieChart from '@/public/piechart.jpeg';
import java from '@/public/java.png';
import chart from '@/public/chart.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: "Master's degree in Security and Cloud Computing",
    location: 'Aalto University, Finland',
    description:
      "Continue pursueing Master's degree at Aalto, I chose to focus on Software Development and Cloud Computing with my major.",
    icon: React.createElement(LuGraduationCap),
    date: '2023 - present',
  },
  {
    title: 'Software Trainee',
    location: 'Nokia, Finland',
    description:
      'I worked as a Software Trainee in CI team to maintain software components (Python), CI pipelines (DevOps processes involved), and develop tools interacting with API and retrieve data.',
    icon: React.createElement(CgWorkAlt),
    date: '2023-2024',
  },
  {
    title: 'Teaching assistant',
    location: 'Aalto University, Finland',
    description:
      'I worked as a Teaching Assistant for several programming courses, such as Scala, C and C++. I held live exercise sessions where I can help students with questions regarding programming.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: "Bachelor's degree in Digital System and Design",
    location: 'Aalto University, Finland',
    description:
      "Enrolled in Bachelor's program, I started to learn and explore programming as well as build a solid academic foudation. Graduated in June, 2023.",
    icon: React.createElement(LuGraduationCap),
    date: '2020-2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Contact management',
    description:
      'A web contact book written in Java + Spring (backend) and React (frontend), MySQL as database.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    imageUrl: java,
  },
  {
    title: 'Expense management',
    description:
      'A Python application for analyzing expense from reading CSV files, therefore users can have insight and visualization (pie chart) of their monthly expenses.',
    tags: ['Python', 'PyQt6', 'unittest', 'CSV'],
    imageUrl: pieChart,
  },
  {
    title: 'ToDo List app',
    description:
      'Practice my Swift programming skill by creating a To do List app.',
    tags: ['Swift', 'iOS'],
    imageUrl: todolist,
  },
  {
    title: 'FitBit Smartwatch data analyze',
    description:
      'Collected movement data from FitBit smartwatches through devices API, I built ML models to predict the active data like number of steps, calories.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'API', 'Fitbit'],
    imageUrl: chart,
  },
] as const;

export const skillsData = [
  'Python',
  'R Programming',
  'Java',
  'HTML & CSS',
  'JavaScript',
  'TypeScript',
  'Shell/Bash scripting',
  'CI/CD',
  'Docker',
  'Linux/Ubuntu',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'SQL',
  'Jira',
  'Framer Motion',
] as const;
