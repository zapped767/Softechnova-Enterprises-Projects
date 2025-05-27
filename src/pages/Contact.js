import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

function Contact() {
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

  const listItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="contact-page">
     
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
          Contact <span className="gradient-text">Me</span>
        </motion.h1>

        <div className="grid-container">
          <motion.section 
            variants={itemVariants}
            className="contact-info card"
            whileHover={{ y: -5 }}
          >
            <h2 className="section-title">Personal Details</h2>
            <div className="detail-item">
              <strong>Name:</strong> Pathmanathan Arigaran
            </div>
            <div className="detail-item">
              <strong>Email:</strong> <a href="mailto:pathmanadhanarigaran16@gmail.com">pathmanadhanarigaran16@gmail.com</a>
            </div>
            <div className="detail-item">
              <strong>Phone:</strong> +94 764594961
            </div>
            <div className="detail-item">
              <strong>Location:</strong> Sri Lanka
            </div>
          </motion.section>

          <motion.section 
            variants={itemVariants}
            className="social-media card"
            whileHover={{ y: -5 }}
          >
            <h2 className="section-title">Social Media</h2>
            <motion.ul className="social-list">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/hari-haran-1a2889276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { name: "Instagram", url: "https://www.instagram.com/zapped___x?igsh=MW03YmpmeWd6eDBhbg==" },
                { name: "GitHub", url: "https://github.com/zapped767" }
              ].map((social, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="social-item"
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <span className="social-icon">{i === 0 ? "💼" : i === 1 ? "📷" : "💻"}</span> 
                    {social.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section 
            variants={itemVariants}
            className="passions card"
            whileHover={{ y: -5 }}
          >
            <h2 className="section-title">My Passions</h2>
            <motion.ul className="passions-list">
              {[
                "Building full-stack web applications",
                "Exploring new technologies and frameworks",
                "Designing clean and user-friendly UI/UX",
                "Contributing to open-source projects",
                "Learning AI & Machine Learning"
              ].map((passion, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="passion-item"
                >
                  <span className="passion-icon">✨</span> {passion}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section 
            variants={itemVariants}
            className="message-form card"
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="section-title">Send Me a Message</h2>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.input 
                type="text" 
                placeholder="Your Name" 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #6366f1" }}
              />
              <motion.input 
                type="email" 
                placeholder="Your Email" 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #6366f1" }}
              />
              <motion.textarea 
                rows="5" 
                placeholder="Your Message" 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #6366f1" }}
              ></motion.textarea>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-btn"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;