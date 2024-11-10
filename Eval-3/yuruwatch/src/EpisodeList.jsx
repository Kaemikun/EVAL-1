
import React, { useState, useEffect } from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import TitleSection from './TitleSection';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 







const EpisodeList = () => (
    <div className="episode-list">
        <h2>More Episodes</h2>
        <ul>
            <li>Episode 2: Extra Story: Diablo's Journal</li>
            <li>Episode 3: Demons and Strategies</li>
            <li>Episode 4: The Saint's Intentions</li>
        </ul>
    </div>
);

export default EpisodeList;