import React from 'react';
import { motion } from 'framer-motion';
import './CourseDetail.css';

function Cybersecurity() {
  const modules = [
    { title: "Defining Cyber, Security, and Cybersecurity Policy", duration: "3 hours" },
    { title: "Evolution of the Internet", duration: "1 hour" },
    { title: "Global Telecommunications Architecture", duration: "3 hours" },
    { title: "Threat Actors and Motivations", duration: "4 hours" },
    { title: "The Hacking Process", duration: "3 hours" },
    { title: "End Effects & Consequences", duration: "5 hours" }
  ];

  return (
    <div className="course-detail cybersecurity">
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="content-container"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="course-title"
        >
          Cybersecurity for Everyone
        </motion.h2>

        <motion.div 
          className="modules-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              className="module-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="module-header">
                <span className="module-number">Module {idx + 1}</span>
                <span className="module-duration">{mod.duration}</span>
              </div>
              <p className="module-title">{mod.title}</p>
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

        <motion.div
          className="instructor-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p><strong>Instructor:</strong> Charles Harry, University of Maryland</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cybersecurity;