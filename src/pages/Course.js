import React, { useState } from 'react';
import './Course.css';

import webDev from '../assets/web-dev.jpg';
import dataScience from '../assets/data-science.jpg';
import graphicDesign from '../assets/graphic-design.jpg';
import marketing from '../assets/marketing.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import aiMl from '../assets/ai-ml.jpg';


const courses = [
  { name: 'Web Development', image: webDev, category: 'Development', price: 'Paid', rating: 4.5 },
  { name: 'Data Science', image: dataScience, category: 'Data', price: 'Paid', rating: 4.7 },
  { name: 'Graphic Design', image: graphicDesign, category: 'Design', price: 'Free', rating: 4.4 },
  { name: 'Marketing', image: marketing, category: 'Business', price: 'Free', rating: 4.3 },
  { name: 'Cybersecurity', image: cybersecurity, category: 'Security', price: 'Paid', rating: 4.8 },
  { name: 'AI & ML', image: aiMl, category: 'AI', price: 'Paid', rating: 4.6 },
];

function Courses() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('');

  const filteredCourses = courses
    .filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || course.price === filter)
    )
    .sort((a, b) => {
      if (sort === 'Newest') return b.rating - a.rating; // Mocked as "newest"
      if (sort === 'PriceLow') return a.price === 'Free' ? -1 : 1;
      if (sort === 'PriceHigh') return a.price === 'Paid' ? -1 : 1;
      return 0;
    });

  return (
    <div className="courses-page">
      <h1>Course Catalog</h1>
      <p>Explore our collection of professional courses.</p>

      <div className="controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Prices</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="Newest">Newest</option>
          <option value="PriceLow">Price: Low to High</option>
          <option value="PriceHigh">Price: High to Low</option>
        </select>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Category: {course.category}</p>
            <p>Price: {course.price}</p>
            <p>Rating: ⭐ {course.rating}</p>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
