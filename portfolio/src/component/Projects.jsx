import React from "react";
import "./Projects.css"

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>E-Commerce Web App</h3>
          <p>
            A modern, fully responsive e-commerce platform built using the MERN
            stack (MongoDB, Express.js, React.js, Node.js). Features include
            user authentication with Firebase, product listing, cart system,
            checkout flow, and real-time updates.
          </p>
          <br />
          <a
            href="https://github.com/Muzammil-Shaikh-69/e-com-project"
            target="_blank"
          >
            View Code
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
