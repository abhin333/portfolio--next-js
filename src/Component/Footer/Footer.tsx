import Link from "next/link";
import './Footer.css';

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Link href="#" className="footer__logo">
        Abhin
      </Link>

      <ul className="permalinks">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#experice">Experience</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact">Contacts</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>© Abhin. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
