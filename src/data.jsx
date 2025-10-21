import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact  } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import oasisImg from "./assets/wildoasis.png";
import cabinsImg from "./assets/cabins.png";
import contentfulImg from "./assets/contentful.png";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='w-16 h-16 text-purple-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='w-16 h-16 text-purple-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='w-16 h-16 text-purple-500' />,
    text: "Strong understanding of TypeScript, ensuring type safety and improved code reliability in large-scale JavaScript applications.",
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='w-16 h-16 text-purple-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
   {
    id: nanoid(),
    title: 'Next.Js',
    icon: <RiNextjsFill className='w-16 h-16 text-purple-500' />,
    text: 'Experienced in building modern web applications with Next.js, leveraging server-side rendering and static site generation for optimized performance and SEO.',
  },
   {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNode className='w-16 h-16 text-purple-500' />,
    text: 'Proficient in building scalable backend applications with Node.js, focusing on creating RESTful APIs and integrating with databases for full-stack development.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: contentfulImg,
    url: 'https://content-ful-project.netlify.app/',
    github: 'https://github.com/AlinaAMG/Contentful-projects',
    title: 'Contentful CMS',
    text: 'Dit project is een React-applicatie die dynamisch projectgegevens ophaalt en weergeeft vanuit Contentful, een headless CMS. Elk project wordt weergegeven als een overzichtelijke, responsieve kaart met een titel en afbeelding. Wanneer je op een projectafbeelding klikt, word je doorgestuurd naar de live versie die gehost wordt op Netlify.',
  },
  {
    id: nanoid(),
    img: oasisImg,
    url: 'https://thewild-oasis-app.netlify.app/dashboard',
    github: 'https://github.com/AlinaAMG/The-Wild-Oasis',
    title: 'The Wild Oasis',
    text: 'The Wild Oasis is een moderne booking app gebouwd met React, React Query en Supabase. Deze app gebruikt Supabase als volledige backend voor authenticatie én het beheren van alle data zoals cabins, bookings, gasten, gebruikers en hotel instellingen.',
  },
  {
    id: nanoid(),
    img: cabinsImg,
    url: 'https://the-wild-oasis-website-woad-kappa.vercel.app/',
    github: 'https://github.com/AlinaAMG/TheWildOasis-Website',
    title: 'The Wild Oasis website',
    text: 'The Wild Oasis is een full-stack Next.js project gebouwd met de App Router, waarin gebruikers cabines kunnen bekijken, reserveren en beheren. Het project combineert server- en clientcomponenten, data fetching met Supabase, en gebruikersauthenticatie met NextAuth.',
  },
];
