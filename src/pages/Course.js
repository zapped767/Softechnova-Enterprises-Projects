import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Course.css';

import webDev from '../assets/web-dev.jpg';
import dataScience from '../assets/data-science.jpg';
import graphicDesign from '../assets/graphic-design.jpg';
import marketing from '../assets/marketing.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import aiMl from '../assets/ai-ml.jpg';

const courses = [
  { name: 'Web Development', image: webDev, category: 'Development', price: 'Paid', rating: 4.5, color: '#6366f1' },
  { name: 'Data Science', image: dataScience, category: 'Data', price: 'Paid', rating: 4.7, color: '#10b981' },
  { name: 'Graphic Design', image: graphicDesign, category: 'Design', price: 'Free', rating: 4.4, color: '#f59e0b' },
  { name: 'Marketing', image: marketing, category: 'Business', price: 'Free', rating: 4.3, color: '#ec4899' },
  { name: 'Cybersecurity', image: cybersecurity, category: 'Security', price: 'Paid', rating: 4.8, color: '#3b82f6' },
  { name: 'AI & ML', image: aiMl, category: 'AI', price: 'Paid', rating: 4.6, color: '#8b5cf6' },
];

function Courses() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  const filteredCourses = courses
    .filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || course.price === filter)
    )
    .sort((a, b) => {
      if (sort === 'Newest') return b.rating - a.rating;
      if (sort === 'PriceLow') return a.price === 'Free' ? -1 : 1;
      if (sort === 'PriceHigh') return a.price === 'Paid' ? -1 : 1;
      return 0;
    });

  const handleViewDetails = (courseName) => {
    navigate(`/Course/${courseName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="courses-page">
      
      <div className="bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <motion.div 
        className="content-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="page-title"
        >
          Course <span className="gradient-text">Catalog</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="page-subtitle"
        >
          Explore our collection of professional courses.
        </motion.p>

        <motion.div 
          className="controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="search-container"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </motion.div>

          <motion.div 
            className="select-container"
            whileHover={{ scale: 1.02 }}
          >
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Prices</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </motion.div>

          <motion.div 
            className="select-container"
            whileHover={{ scale: 1.02 }}
          >
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort By</option>
              <option value="Newest">Highest Rated</option>
              <option value="PriceLow">Price: Low to High</option>
              <option value="PriceHigh">Price: High to Low</option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div 
          className="courses-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.name}
                className="course-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 15px 30px rgba(0, 0, 0, 0.15)`
                }}
                style={{ '--course-color': course.color }}
              >
                <div className="image-container">
                  <img src={course.image} alt={course.name} />
                  <div className="price-tag" style={{ 
                    backgroundColor: course.price === 'Free' ? '#10b981' : '#6366f1'
                  }}>
                    {course.price}
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <div className="course-meta">
                    <span className="category">{course.category}</span>
                    <span className="rating">⭐ {course.rating}</span>
                  </div>
                  <motion.button 
                    className="view-btn"
                    onClick={() => handleViewDetails(course.name)}
                    whileHover={{ 
                      backgroundColor: course.color,
                      boxShadow: `0 5px 15px ${course.color}80`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Courses;