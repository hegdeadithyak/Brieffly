'use client';
import styles from './components/Card/style.module.scss'; // Importing the Home.module.css file
import Card from '../components/Card/index';     // Importing the Card component
import RadialGradient from '../components/RadialGradient'; // Importing RadialGradient component
import { projects } from '../../data'; 
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
