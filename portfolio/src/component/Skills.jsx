import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div>
      <section id="skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    <div>
      <h3>Frontend</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
      </ul>
    </div>
    <br />
    <div>
      <h3>Backend</h3>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>REST APIs</li>
      </ul>
    </div>
    <br />
    <div>
      <h3>Database</h3>
      <ul>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    </div>
    <br />
    <div>
      <h3>Tools</h3>
      <ul>
        <li>Git & GitHub</li>
        <li>VS Code</li>
        <li>Postman</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
