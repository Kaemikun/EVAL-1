// App.jsx
import React from 'react';

import Header from './Header';
import Carousel from './Carousel';
import TopChoices from './TopChoices';
import AnimeGrid from './AnimeGrid';
import './Animac.css';
import Footer from './Footer';
import { IonIcon } from '@ionic/react';
import EditorsTopChoices from './EditorsTopChoices';
import CarouselComponent from './CarouselComponent';
import Leaderboard from './Leaderboard';
import Community from './Community';

function App() {
  return (
    <div>
      <Header />
      <section style={{ height: '95px' }}></section>
      <CarouselComponent />
      
      <EditorsTopChoices />
      <AnimeGrid />
      <Leaderboard />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
