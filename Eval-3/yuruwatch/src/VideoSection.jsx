
import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 



const VideoSection = () => (
    <div className="video-section">
        <video controls>
            <source src="./videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

export default VideoSection;