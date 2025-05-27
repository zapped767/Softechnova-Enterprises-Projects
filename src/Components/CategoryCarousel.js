import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './CategoryCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing local images from assets
import webDev from '../assets/web-dev.jpg';
import dataScience from '../assets/data-science.jpg';
import graphicDesign from '../assets/graphic-design.jpg';
import marketing from '../assets/marketing.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import aiMl from '../assets/ai-ml.jpg';

const categories = [
  { name: 'Web Development', image: webDev },
  { name: 'Data Science', image: dataScience },
  { name: 'Graphic Design', image: graphicDesign },
  { name: 'Marketing', image: marketing },
  { name: 'Cybersecurity', image: cybersecurity },
  { name: 'AI & ML', image: aiMl },
];

function CategoryCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="category-carousel">
      <h2>Browse Categories</h2>
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
