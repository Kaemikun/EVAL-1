import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animac.css';
import './prev.css';
import Header from './Header';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, bookmark, menu, search } from 'ionicons/icons';

function App() {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(prev => !prev);
    };

    const toggleMenu = () => {
        setMenuActive(prev => !prev);
    };

    const handleClickOutside = (event) => {
        
        if (!event.target.closest('.bookmark-container')) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
       
        window.addEventListener('click', handleClickOutside);
        return () => {
        
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            
            <Header />

            <div className="body">
                <section className="anime-preview-section" style={{ margin: '80px' }}>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-5">
                                <img src="slider11 (2).jpg" alt="Anime Poster" className="img-fluid shadow" />
                            </div>
                            <div className="col-md-7" style={{ marginTop: '20px' }}>
                                <h1 style={{ fontWeight: 700 }}>Reincarnated as a Slime</h1>
                                <p><strong>Genres:</strong> Action, Adventure, Comedy, Demons, Fantasy, Magic, Shounen, Isekai</p>
                                <p><strong>Release Date:</strong> Oct 2, 2018</p>
                                <p><strong>Description:</strong> Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of. When Satoru regains consciousness, he discovers that he has reincarnated as a goop of slime in an unfamiliar realm. In doing so, he acquires newfound skills—notably, the power to devour anything and mimic its appearance and abilities.</p>

                                <div className="mt-4">
                                    <a href="/anime-stream" className="btn btn-primary" style={{ width: '200px', marginRight: '10px' }}>Watch Now</a>
                                    <div className="bookmark-container">
                                        <button className="btn btn-secondary" onClick={toggleDropdown}>
                                            <IonIcon icon={bookmark}></IonIcon>
                                        </button>
                                        {dropdownActive && (
                                            <div className="bookmark-dropdown">
                                                <a href="#">Want to Watch</a>
                                                <a href="#">Currently Watching</a>
                                                <a href="#">On Hold</a>
                                                <a href="#">Completed</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="recently-released">
                    <h2>Recently Released</h2>
                    <div className="anime-list">
                        <div className="anime-item">
                            <a href="code_preview.html">
                                <img src="slider9.jpg" alt="Ore Dake Level Up na Ken (Dub)" />
                                <div className="anime-info">
                                    <h3>Code Geass</h3>
                                    <p>Episode 12</p>
                                </div>
                            </a>
                        </div>

                        <div className="anime-item">
                            <a href="anime_prev.html">
                                <img src="slider5.jpg" alt="Another Anime" />
                                <div className="anime-info">
                                    <h3>Attack on Titans</h3>
                                    <p>Episode 10</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="episode-list">
                <h2>Episodes</h2>
                <ul>
                    <li>Episode 1</li>
                    <li>Episode 2</li>
                    <li>Episode 3</li>
                    <li>Episode 4</li>
                    <li>Episode 5</li>
                    <li>Episode 6</li>
                    <li>Episode 7</li>
                    <li>Episode 8</li>
                    <li>Episode 9</li>
                    <li>Episode 10</li>
                    <li>Episode 11</li>
                    <li>Episode 12</li>
                    <li>Episode 13</li>
                    <li>Episode 14</li>
                    <li>Episode 15</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
