import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling

const MainGrid = () => {
    const animeList = [
        {
            title: "Spy X Family",
            genre: "Action, Spy comedy",
            firstEpisodeDate: "9 April 2022",
            imgSrc: "./slider1.jpg",
            link: "rimuru.html"
        },
        {
            title: "Attack on Titan",
            genre: "Action, Drama",
            firstEpisodeDate: "7 April 2013",
            imgSrc: "./slider2.jpg",
            link: "/attack-on-titan"
        },
        {
            title: "Demon Slayer",
            genre: "Action, Fantasy",
            firstEpisodeDate: "6 April 2019",
            imgSrc: "./slider3.jpg",
            link: "/demon-slayer"
        },
        {
            title: "My Hero Academia",
            genre: "Action, Superhero",
            firstEpisodeDate: "3 April 2016",
            imgSrc: "./slider4.jpg",
            link: "/my-hero-academia"
        },
        {
            title: "Jujutsu Kaisen",
            genre: "Action, Supernatural",
            firstEpisodeDate: "2 October 2020",
            imgSrc: "./slider5.jpg",
            link: "/jujutsu-kaisen"
        },
        {
            title: "One Piece",
            genre: "Adventure, Fantasy",
            firstEpisodeDate: "20 October 1999",
            imgSrc: "./slider6.jpg",
            link: "/one-piece"
        },
        {
            title: "Tokyo Revengers",
            genre: "Action, Drama",
            firstEpisodeDate: "10 April 2021",
            imgSrc: "./slider7.jpg",
            link: "/tokyo-revengers"
        },
        {
            title: "Your Name",
            genre: "Romance, Fantasy",
            firstEpisodeDate: "26 August 2016",
            imgSrc: "./slider8.jpg",
            link: "/your-name"
        },
        {
            title: "Death Note",
            genre: "Mystery, Thriller",
            firstEpisodeDate: "3 October 2006",
            imgSrc: "./slider9.jpg",
            link: "/death-note"
        },
        {
            title: "Fullmetal Alchemist: Brotherhood",
            genre: "Action, Adventure",
            firstEpisodeDate: "5 April 2009",
            imgSrc: "./slider10.jpg",
            link: "/fullmetal-alchemist"
        }
    ];

    return (
        <section className="main-grid">
            <br /><br /><br />
            <div className="anime">
                {animeList.map((anime, index) => (
                    <div className="indi" key={index}>
                        <img src={anime.imgSrc} alt={anime.title} />
                        <div className="img-over">
                            <h4>{anime.title}</h4>
                            <p>Genres: {anime.genre}</p>
                            <p>First episode date: {anime.firstEpisodeDate}</p>
                            <div className="qqc">
                                <a href={anime.link}>Watch Now</a>
                            </div>
                        </div>
                        <div className="content"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainGrid;