'use client';
import styles from './page.module.css';  // Import styles for the current page
import Card from './components/Card';     // Importing the Card component
import RadialGradient from 'components/RadialGradient'; // Importing RadialGradient component
import { projects } from '../data'; 
export default function Home() {
  
  return (
    <>

      <RadialGradient />

      <main className={styles.main}>
        {
        projects.map( (project, i) => {
            return <Card key={`p_${i}`} {...project} url={project.src} i={i}/>

          })

          }

          </main>
    </>
  );
}
