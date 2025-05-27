import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="about-page">
      
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="content-container"
      >
        <motion.h1 
          variants={itemVariants}
          className="main-title"
        >
          About <span className="gradient-text">SkillGro</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="section">
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="intro-text"
          >
            SkillGro is an innovative online course-selling platform designed to bridge the gap between learners and expert instructors.
            Our mission is to empower individuals with access to high-quality, affordable education in tech, design, business, and more.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="section">
          <h2 className="section-title">Who Built This Platform?</h2>
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="section-text"
          >
            SkillGro was crafted by a passionate developer as part of a learning project, combining front-end technologies like React.js with a powerful Spring Boot backend.
            This platform is a prototype to demonstrate real-world web application development and deployment skills.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="section">
          <h2 className="section-title">Features</h2>
          <motion.ul className="features-list">
            {[
              "Browse and purchase high-quality online courses",
              "User account system with login and signup",
              "Responsive design for mobile and desktop",
              "Secure backend integration with Spring Boot + MySQL"
            ].map((feature, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
                className="feature-item"
              >
                <span className="feature-icon">✓</span> {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={itemVariants} className="section">
          <h2 className="section-title">Contact Information</h2>
          <motion.div 
            className="contact-grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.p 
              whileHover={{ x: 5 }}
              variants={itemVariants}
              className="contact-item"
            >
              Email: <a href="mailto:skillgro.official@gmail.com">skillgro.official@gmail.com</a>
            </motion.p>
            <motion.p 
              whileHover={{ x: 5 }}
              variants={itemVariants}
              className="contact-item"
            >
              Phone: +94 712345678
            </motion.p>
            <motion.p 
              whileHover={{ x: 5 }}
              variants={itemVariants}
              className="contact-item"
            >
              LinkedIn: <a href="https://www.linkedin.com/company/skillgro" target="_blank" rel="noopener noreferrer">SkillGro LinkedIn</a>
            </motion.p>
            <motion.p 
              whileHover={{ x: 5 }}
              variants={itemVariants}
              className="contact-item"
            >
              Instagram: <a href="https://www.instagram.com/skillgro" target="_blank" rel="noopener noreferrer">@skillgro</a>
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="section">
          <h2 className="section-title">We Value Your Feedback</h2>
          <p className="feedback-text">If you're logged in, feel free to share your feedback below!</p>
          
          <motion.form 
            className="feedback-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.textarea 
              placeholder="Your feedback..." 
              rows="5" 
              required
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #6366f1" }}
            ></motion.textarea>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Submit Feedback
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;