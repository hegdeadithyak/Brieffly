'use client';
import styles from './page.module.css';  // Import styles for the current page
import Card from './components/Card';     // Importing the Card component
import { useScroll } from 'framer-motion';// Importing useScroll hook from Framer Motion
import { useRef } from 'react';
import RadialGradient from 'components/RadialGradient'; // Importing RadialGradient component
import { projects } from '../data'; 
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <>
      {/* Render RadialGradient */}
      <RadialGradient />

      {/* Main content section */}
      <main className={styles.main}>
        {
        projects.map( (project, i) => {
            return <Card key={`p_${i}`} {...project} i={i}/>

          })

          }

          </main>
    </>
  );
}
