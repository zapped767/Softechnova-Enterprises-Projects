import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleVariants = {
    active: {
      backgroundColor: '#6366f1',
      color: 'white',
      scale: 1.05,
      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
    },
    inactive: {
      backgroundColor: '#f1f5f9',
      color: '#64748b'
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, x: 30 }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    // Later: validate credentials or call API here
    navigate('/Ho');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate successful signup
    // Later: send signup data to backend
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <motion.h1 
        className="brand-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="gradient-text">SkillGro</span>
      </motion.h1>

      <motion.div 
        className="auth-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="auth-toggle">
          <motion.button
            animate={isLogin ? "active" : "inactive"}
            variants={toggleVariants}
            onClick={() => setIsLogin(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            animate={!isLogin ? "active" : "inactive"}
            variants={toggleVariants}
            onClick={() => setIsLogin(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              className="auth-form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleLogin}
            >
              <h2>Welcome Back!</h2>
              <motion.div 
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input type="email" placeholder="Email" required />
              </motion.div>
              <motion.div 
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input type="password" placeholder="Password" required />
              </motion.div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-btn"
              >
                Login
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              className="auth-form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onSubmit={handleSignup}
            >
              <h2>Create Account</h2>
              <motion.div 
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input type="text" placeholder="Full Name" required />
              </motion.div>
              <motion.div 
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input type="email" placeholder="Email" required />
              </motion.div>
              <motion.div 
                className="input-group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <input type="password" placeholder="Password" required />
              </motion.div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-btn"
              >
                Sign Up
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default AuthPage;
