import React, { useState, useEffect } from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 





const TitleSection = () => (
    <div className="title-section">
        <h1>Rimuru vs Hinata</h1>
        <h2>That Time I Got Reincarnated as a Slime</h2>
        <p>Season 3, Episode 1</p>
        <p>Season 3 of That Time I Got Reincarnated as a Slime aired on April 5, 2024 on Nippon TV and its affiliates, as well as BS11. The staff from the second season and the Visions of Coleus ONA series returned to reprise their roles.</p>
    </div>
);

export default TitleSection;