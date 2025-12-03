"use client"; // ⬅️ Required for client-side functionality

import React from 'react';
import Image from 'next/image'; // ⬅️ Next.js optimized Image component
import styles from './Portfolio.module.css'; // ⬅️ Import CSS Modules
interface PortfolioItem {
  id: number;
  imageSrc: any; // Using 'any' for imported image module stability
  title: string;
  github: string;
  demo: string;
}

import IMG1 from "/public/assets/portfolio1.jpg";
import IMG2 from "/public/assets/portfolio2.png";
import IMG3 from "/public/assets/portfolio3.png";
import IMG4 from "/public/assets/portfolio4.jpg";
import IMG5 from "/public/assets/portfolio5.jpg";
import IMG6 from "/public/assets/movie-logo.jpg";

const portfolioData: PortfolioItem[] = [
  { id: 1, imageSrc: IMG2, title: "Easy Food [Mobile view only] MERN", github: "https://github.com/abhin333/easy-foode-node", demo: "https://easy-fastfood.netlify.app" },
  { id: 2, imageSrc: IMG2, title: "Easy Food [Mobile view only] React js & Firebase", github: "https://github.com/abhin333/Easy_Food.git", demo: "https://easy-food-123.netlify.app/" },
  { id: 3, imageSrc: IMG3, title: "Olx Clone", github: "https://github.com/abhin333/olx.git", demo: "https://olx-clone-e55a9.web.app/" },
  { id: 4, imageSrc: IMG4, title: "Netflix Clone", github: "https://github.com/abhin333/Netflix.git", demo: "https://netflixsnew.netlify.app/" },
  { id: 5, imageSrc: IMG6, title: "Movie App", github: "https://github.com/abhin333/movies", demo: "https://moviesnew.netlify.app/" },
  { id: 6, imageSrc: IMG1, title: "Books and stationary", github: "https://github.com/abhin333", demo: "https://books-stationery-4f20c4.netlify.app/" },
  { id: 7, imageSrc: IMG5, title: "Abhin portfolio", github: "https://github.com/abhin333/fb.git", demo: "https://abhin333.github.io/abhin/" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2> 

      <div className={styles.portfolio__container}>

        {portfolioData.map(({ id, imageSrc, title, github, demo }) => (
          <article key={id} className={styles.portfolio__item}>
            <div className={styles['portfolio__item-image']}>
              <Image 
                src={imageSrc} 
                alt={title}
                width={400} // Set appropriate size
                height={300} // Set appropriate size
                layout="responsive" // Optional: makes image scale with parent
                objectFit="cover" // Optional: ensures image covers the area
              />
            </div>
            <h3>{title}</h3>
            <div className={styles['portfolio__item-cta']}>
              <a
                href={github}
                className={styles.btn} // Use CSS Module class
                target="_blank"
                rel="noopener noreferrer" // Security best practice
              >
                Github
              </a>
              <a
                href={demo}
                className={`${styles.btn} ${styles['btn-primary']}`} // Use multiple CSS Module classes
                target="_blank"
                rel="noopener noreferrer" // Security best practice
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;