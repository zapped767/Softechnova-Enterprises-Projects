import React from 'react';
import Slider from 'react-slick';
import './CategoryCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Web Development', image: 'https://th.bing.com/th/id/OIP.KT1BqvV51IZ1tu-sbBsFBgHaEo?rs=1&pid=ImgDetMain' },
  { name: 'Data Science', image: 'https://source.unsplash.com/300x200/?data' },
  { name: 'Graphic Design', image: 'https://source.unsplash.com/300x200/?design' },
  { name: 'Marketing', image: 'https://source.unsplash.com/300x200/?marketing' },
  { name: 'Cybersecurity', image: 'https://source.unsplash.com/300x200/?cybersecurity' },
  { name: 'AI & ML', image: 'https://source.unsplash.com/300x200/?ai' },
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
