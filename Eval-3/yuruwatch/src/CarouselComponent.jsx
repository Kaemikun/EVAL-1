
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './Animac.css';
import { IonIcon } from '@ionic/react';
import { mail, lockClosed, person, close, menu, search } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom'; 

const CarouselComponent = () => {
    return (
        <div>
            <section style={{ height: '95px' }}></section>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="over-lay">
                            <h1><a href="##">That time I got reincarnated as a Slime</a></h1>
                            <h4>The story follows Satoru Mikami, a salaryman who is murdered and then reincarnated in a sword and sorcery world as the titular slime, who goes on to gather allies to build his own nation of monsters.</h4>
                        </div>
                        <a href="/anime-preview">
                            <img src="./poster1.jpg" style={{ boxShadow: '0 0 200px rgba(0,0,0,0.9) inset' }} className="d-block w-100" alt="That time I got reincarnated as a Slime" />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <img src="./poster2.jpg" className="d-block w-100" alt="Fairy Tail" />
                        <div className="over-lay">
                            <h1><a href="##">Fairy Tail</a></h1>
                            <h4>The story follows the adventures of Natsu Dragneel, a member of the popular wizard guild Fairy Tail, as he searches the fictional world of Earth-land for the dragon Igneel.</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./poster3.jpg" className="d-block w-100" alt="Jojo's Bizarre Adventures" />
                        <div className="over-lay">
                            <h1><a href="##">Jojo's Bizarre Adventures</a></h1>
                            <h4>The series focuses on the mysterious adventures of the Joestar family across generations, from the end of the 19th century to the modern era.</h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default CarouselComponent;