// Core
import React, { useState } from "react";
import 'antd/dist/reset.css';

// MUI
import { Rating } from '@mui/material';

// Style
import '../App.css';

const Home = () => {
    const [rate, setRating] = useState(4)

    return (
        <div style={{ padding: '15px' }}>
            <div className='movies'>
                <h1 style={{ color: '#864726', fontWeight: '800' }}> Trending Today 🔥</h1>
                <div className='movie-card'>
                    <img
                        style={{ width: '100%', borderRadius: '15px' }}
                        src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
                    />
                    <h2
                        style={{
                            fontSize: '18.5px',
                            fontWeight: '600',
                            marginTop: '3.5%',
                            textTransform: 'uppercase'
                        }}
                    >
                        <b>Movie name</b>
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Rating
                            name="simple-controlled"
                            value={rate}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <h4 style={{ color: '#37474f', marginTop: '1.5%' }}>
                            <i style={{ textTransform: 'uppercase' }}>Genre</i> Movie
                        </h4>
                    </div>
                </div>
            </div>
            <div className='aboutUs'>
                <div className='aboutUs-text'>
                    <h2>Power of AI in Cinema 🎥</h2>
                    <p>
                        Our AI, the wizard behind the screen, deciphers your tastes, finding movie recommendations
                        that defy the ordinary. <br /> <br />
                        Immerse yourself in the captivating fusion of artificial intelligence and the magic of storytelling.
                    </p>
                </div>
                <div className='aboutUs-img'>
                    <img
                        style={{ width: '100%', borderRadius: '20px' }}
                        src="https://the-decoder.com/wp-content/uploads/2023/11/ai_robot_cinema_metropolis-e1699892636630.png"
                    />
                </div>
            </div>
            <div className='movies'>
                <h2 style={{ color: '#864726', fontWeight: '800', fontSize: '28px' }}>For you 🎯</h2>
                <div className='movie-card'>
                    <img
                        style={{ width: '100%', borderRadius: '15px' }}
                        src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
                    />
                    <h2
                        style={{
                            fontSize: '18.5px',
                            fontWeight: '600',
                            marginTop: '3.5%',
                            textTransform: 'uppercase'
                        }}
                    >
                        <b>Movie name</b>
                    </h2>
                    <h5 style={{ fontSize: '14px', fontWeight: '600', color: '#333333' }}>Director's name</h5>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Rating
                            name="simple-controlled"
                            value={0}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        <h4 style={{ color: '#37474f', marginTop: '1.5%' }}>
                            <i style={{ textTransform: 'uppercase' }}>Genre</i> Movie
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
