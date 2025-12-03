"use client";

import React, { useRef } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_yqrrv2x",
      "template_qggt1zg",
      form.current,
      "Y_HlEaixg-so_4Km8"
    );

    e.currentTarget.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdMarkEmailUnread className="conatct_option-icon" />
              <h4>Email</h4>
              <h5 className="h55">abhinpradeepan123@gmail.com</h5>
              <a
                href="mailto:abhinpradeepan123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <RiWhatsappFill className="conatct_option-icon" />
              <h4>Whatsapp</h4>
              <h5>7902314666</h5>
              <a
                href="https://api.whatsapp.com/send?phone=917202314666"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </article>

            <article className="contact__option">
              <BsLinkedin className="conatct_option-icon" />
              <h4>LinkedIn</h4>
              <h5>abhin</h5>
              <a
                href="mailto:abhinpradeepan123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a Message
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="your full name"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="your email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              rows={7}
              placeholder="enter the message"
              autoComplete="off"
              required
            ></textarea>

            <div className="btnn">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              <input
                type="reset"
                value="Reset"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
