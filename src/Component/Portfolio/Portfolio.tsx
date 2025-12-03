import Image from "next/image";
import './Portfolio.css';

import IMG1 from "../../../public/assets/portfolio1.jpg";
import IMG2 from "../../../public/assets/portfolio2.png";
import IMG3 from "../../../public/assets/portfolio3.png";
import IMG4 from "../../../public/assets/portfolio4.jpg";
import IMG5 from "../../../public/assets/portfolio5.jpg";
import IMG6 from "../../../public/assets/movie-logo.jpg";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {/* Easy Food MERN */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG2} alt="Easy Food MERN" width={400} height={300} />
            </div>
            <h3>Easy Food [Mobile view only] MERN</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/easy-foode-node"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://easy-fastfood.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* Easy Food React & Firebase */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG2} alt="Easy Food React" width={400} height={300} />
            </div>
            <h3>Easy Food [Mobile view only] React js & Firebase</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/Easy_Food.git"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://easy-food-123.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* OLX Clone */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG3} alt="OLX Clone" width={400} height={300} />
            </div>
            <h3>OLX Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/olx.git"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://olx-clone-e55a9.web.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* Netflix Clone */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG4} alt="Netflix Clone" width={400} height={300} />
            </div>
            <h3>Netflix Clone</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/Netflix.git"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://netflixsnew.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* Movie App */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG6} alt="Movie App" width={400} height={300} />
            </div>
            <h3>Movie App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/movies"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://moviesnew.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* Books & Stationery */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG1} alt="Books and Stationery" width={400} height={300} />
            </div>
            <h3>Books and Stationery</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://books-stationery-4f20c4.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>

          {/* Personal Portfolio */}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <Image src={IMG5} alt="Abhin Portfolio" width={400} height={300} />
            </div>
            <h3>Abhin Portfolio</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/abhin333/fb.git"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://abhin333.github.io/abhin/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
