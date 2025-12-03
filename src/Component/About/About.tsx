import Image from "next/image";
import Link from "next/link";
import "./About.css";

import Me from "../../assets/me-about.jpeg";
import { FaAward, FaUsers } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <Image
                src={Me}
                alt="about-image"
                width={300}
                height={350}
                priority
              />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ year experience</small>
              </article>

              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>Clients</h5>
                <small>5+</small>
              </article>

              <article className="about__card">
                <MdComputer className="about__icon" />
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>

            <p>
              A Web Developer is a professional who is responsible for the
              design and construction of websites. They ensure that sites meet
              user expectations by ensuring they look good, run smoothly and
              offer easy access points with no loading issues between pages or
              error messages.
            </p>

            <Link href="#contact" className="btn btn-primary">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
