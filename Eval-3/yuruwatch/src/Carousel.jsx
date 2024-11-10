import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/anime-preview'); 
  };

  return (
    <div id="animeCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src="slider1.jpg" className="d-block w-100" alt="Anime 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Anime Title 1</h5>
            <p>Description of Anime 1.</p>
          </div>
        </div>
        <div className="carousel-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src="slider2.jpg" className="d-block w-100" alt="Anime 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Anime Title 2</h5>
            <p>Description of Anime 2.</p>
          </div>
        </div>
        <div className="carousel-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src="slider3.jpg" className="d-block w-100" alt="Anime 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Anime Title 3</h5>
            <p>Description of Anime 3.</p>
          </div>
        </div>
        
      </div>
      <a className="carousel-control-prev" href="#animeCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#animeCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
