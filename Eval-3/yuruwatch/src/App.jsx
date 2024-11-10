import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AnimaxMain from './AnimaxMain'; 
import Home from './Home'; 
import AnimePreview from './AnimePreview.jsx'; 
import Animestream from './Animestream.jsx'; 
import { IonIcon } from '@ionic/react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimaxMain />} />
        <Route path="/home" element={<Home />} />
        <Route path="/anime-preview" element={<AnimePreview />} />
        <Route path="/anime-stream" element={<Animestream />} />
      </Routes>
    </Router>
  );
}

export default App;
