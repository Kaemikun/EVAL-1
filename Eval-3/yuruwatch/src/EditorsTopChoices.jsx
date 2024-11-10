import React from 'react';
import './style.css'; // Assuming you have a CSS file for styling

const EditorsTopChoices = () => {
    const choices = [
        { id: 1, title: "Code Geass", imgSrc: "./slider9.jpg", link: "/codegeass" },
        { id: 2, title: "Attack on Titan", imgSrc: "./slider5.jpg", link: "/attack-on-titan" },
        { id: 3, title: "That Time I Got Reincarnated as a Slime", imgSrc: "./slider11 (2).jpg", link: "/slime-isekai" },
        { id: 4, title: "Your Name", imgSrc: "./slider3.jpg", link: "/yourname" },
        { id: 5, title: "Unknown", imgSrc: "./slider2.jpg", link: "#" },
        { id: 6, title: "Unknown", imgSrc: "./slider6.jpg", link: "#" },
        { id: 7, title: "Unknown", imgSrc: "./slider1.jpg", link: "#" },
        { id: 8, title: "Unknown", imgSrc: "./slider8.jpg", link: "#" },
        { id: 9, title: "Unknown", imgSrc: "./slider4.jpg", link: "#" },
        { id: 10, title: "Unknown", imgSrc: "./slider10.jpg", link: "#" },
    ];

    return (
        <section className="editor">
            <br />
            <h1>Editor's Top Choices</h1>
            <br />
            <div className="scroll">
                {choices.map((choice) => (
                    <div key={choice.id}>
                        <h1>#{choice.id}</h1>
                        <a href={choice.link}>
                            <img src={choice.imgSrc} alt={choice.title} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EditorsTopChoices;