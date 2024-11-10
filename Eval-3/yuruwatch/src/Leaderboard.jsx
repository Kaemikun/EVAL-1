import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling

const Leaderboard = () => {
    const leaderboardData = [
        { rankImage: "./l1.png", animeImage: "./slider1.jpg", title: "Spy X Family", link: "#" },
        { rankImage: "./l2.png", animeImage: "./slider10.jpg", title: "Fairy Tail", link: "#" },
        { rankImage: "./l3.png", animeImage: "./slider2.jpg", title: "A Silent Voice", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider3.jpg", title: "Your Name", link: "/yourname" },
        { rankImage: "./l4.png", animeImage: "./slider4.jpg", title: "Weathering With You", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider5.jpg", title: "Attack On Titan", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider6.jpg", title: "Promised Neverland", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider7.jpg", title: "Parasite The Maxim", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider8.jpg", title: "Akame ga Kill", link: "#" },
        { rankImage: "./l4.png", animeImage: "./slider9.jpg", title: "Code Geass", link: "/codegeass" },
    ];

    return (
        <div className="l2">
            <div className="headd">
                <h2><center>Leaderboard</center></h2>
            </div>
            <div className="leaderboard">
                {leaderboardData.map((anime, index) => (
                    <div className="position" key={index}>
                        <div>
                            <img src={anime.rankImage} width="100%" alt={`Rank ${index + 1}`} />
                        </div>
                        <a href={anime.link}>
                            <img className="limage" src={anime.animeImage} alt={anime.title} />
                        </a>
                        <div className="content3">
                            <h4>{anime.title}</h4>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;