import React from 'react';

const AnimeGrid = () => {
  return (
    <section className="main-grid">
      <br /><br /><br />
      <div className="anime">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="indi" key={index}>
            <img src="./slider1.jpg" alt="" />
            <div className="img-over">
              <h4>Spy X Family</h4>
              <p>Genres: Action, Spy comedy</p>
              <p>First episode date: 9 April 2022</p>
              <div className="qqc"><a href="rimuru.html">Watch Now</a></div>
            </div>
            <div className="content"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;