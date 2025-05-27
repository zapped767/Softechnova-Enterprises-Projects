import React from 'react';
import './About.css'; // You can style it separately

function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        Hello! I'm a passionate and dedicated developer focused on building intuitive and impactful web applications. 
        As part of this platform, I’ve crafted this course-selling site to support learners and educators in their digital journey.
      </p>
      
      <h2>Professional Background</h2>
      <p>
        I specialize in front-end development with React.js and also have hands-on experience in backend development using Spring Boot and MySQL.
        My goal is to deliver high-quality, scalable solutions with a focus on performance and user experience.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>React.js, JavaScript, HTML, CSS</li>
        <li>Spring Boot, Java, MySQL</li>
        <li>REST APIs, Git, Responsive Web Design</li>
        <li>Team collaboration, Agile methodology</li>
      </ul>

      <h2>Contact Information</h2>
      <p>Email: <a href="pathmanadhanarigaran16@gmail.com">pathmanadhanarigaran16gmail.com</a></p>
      <p>Phone: +94 764594961</p>
      <p>LinkedIn: <a href="www.linkedin.com/in/hari-haran-1a2889276" target="_blank" rel="noopener noreferrer">linkedin profile</a></p>
    </div>
  );
}

export default About;
