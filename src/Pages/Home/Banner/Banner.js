import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src='https://i.ibb.co/3YrJDc4/coxs.jpg' text="First slide" />
                    <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                        <p>Cox's Bazar is The Best Sea Beach.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://i.ibb.co/P9dBPqf/kuakata.jpg' text="Second slide" />
                    <Carousel.Caption>
                        <h3>Kuakata Beach</h3>
                        <p>Kuakata is The Beatiful Beach</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://i.ibb.co/s95jF1V/Ratargul.jpg' text="Third slide" />
                    <Carousel.Caption>
                        <h3>Ratargul</h3>
                        <p>
                          Ratargul is The Forest Beach
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;