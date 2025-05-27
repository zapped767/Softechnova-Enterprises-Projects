import React from 'react';
import { motion } from 'framer-motion';
import './CourseDetailPage.css';

const modules = [
  { title: "Defining Cyber, Security, and Cybersecurity Policy (Week 1)", duration: "3 hours" },
  { title: "Evolution of the Internet (Week 2)", duration: "1 hour" },
  { title: "Global Telecommunications Architecture and Governance (Week 3)", duration: "3 hours" },
  { title: "Threat Actors and Their Motivations (Week 4)", duration: "4 hours" },
  { title: "The Hacking Process (Week 5)", duration: "3 hours" },
  { title: "End Effects - Direct and Indirect Consequences (Week 6)", duration: "5 hours" }
];

function CourseDetailPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="course-detail">
      {/* Animated background elements */}
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <motion.div 
        className="content-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="course-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          There are 6 modules in this course
        </motion.h2>

        <motion.p 
          className="course-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cybersecurity affects everyone, including in the delivery of basic products and services...
        </motion.p>

        <motion.div 
          className="modules-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {modules.map((mod, idx) => (
            <motion.div 
              className="module"
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="module-header">
                <span className="module-number">Module {idx + 1}</span>
                <span className="module-duration">• {mod.duration} to complete</span>
              </div>
              <p className="module-title">Cybersecurity for Everyone: {mod.title}</p>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 30 + 70}%` }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="info-cards">
          <motion.div 
            className="instructor-box card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: -5 }}
          >
            <h4>Instructor</h4>
            <p className="instructor-name"><strong>Charles Harry</strong></p>
            <p>University of Maryland, College Park</p>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span>4.8 (1,286 ratings)</span>
            </div>
            <p className="learners">486,079 learners</p>
            <h4>Offered by</h4>
            <p>University of Maryland, College Park</p>
          </motion.div>

          <motion.div 
            className="certificate-box card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -5 }}
          >
            <div className="certificate-icon">🎓</div>
            <h4>Earn a Career Certificate</h4>
            <p>Add this credential to your LinkedIn, resume, or CV.</p>
            <motion.button 
              className="share-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share on LinkedIn
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CourseDetailPage;