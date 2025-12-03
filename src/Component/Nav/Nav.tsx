"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Nav.css";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <Link
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>

      <Link
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>

      <Link
        href="#experence"
        onClick={() => setActive("#experence")}
        className={active === "#experence" ? "active" : ""}
      >
        <BiBook />
      </Link>

      <Link
        href="#portfolio"
        onClick={() => setActive("#service")}
        className={active === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>

      <Link
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
