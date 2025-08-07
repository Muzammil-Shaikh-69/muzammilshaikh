import React from "react";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      {/* <div className="about-img-container">
        
      </div> */}
      <div className="about-content">
        <h2>About</h2>
        <p>
          Hi! I'm <strong>Muzammil Shaikh</strong>, a passionate and motivated{" "}
          <strong>Full Stack Developer</strong> based in Mumbai, India. I
          specialize in building clean, responsive, and user-friendly web
          applications using technologies like
          <strong>
            HTML, CSS, JavaScript, React.js, Node.js, Express,
          </strong>{" "}
          and <strong>MongoDB</strong>.
        </p>
        <p>
          I'm currently pursuing my <strong>B.Sc in Computer Science</strong>{" "}
          (graduating in 2025) and love turning ideas into real-world web
          solutions. I've built projects such as a campus portal, e-commerce
          store, and movie info app.
        </p>
        <p>
          I'm always eager to learn, solve problems, and work with teams that
          create meaningful impact. I'm currently{" "}
          <strong>
            available for internships, freelance projects, or junior developer
            roles
          </strong>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
