
import React, { useState, useEffect } from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import TitleSection from './TitleSection';
import EpisodeList from './EpisodeList';
import CommentSection from './CommentSection';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 



const AnimeStream = () => {
    
    return (
        <div style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>
            <Header />
            <div className="container">
                <VideoSection />
                <TitleSection />
                <EpisodeList />
                <CommentSection />
            </div>
        </div>
    );
};

export default AnimeStream;
