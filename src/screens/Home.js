// Core
import React from "react";
import 'antd/dist/reset.css';

// Style
import '../App.css';

// Components
import RatingStars from "../components/RatingStars"

const Home = () => {
    return (
        <div>
            <div className='movies'>
            <h2 style={{ color: '#37474f' }}>Popular Today 🔥</h2>
                <div className='movie-card'>
                    <img
                        style={{ width: '100%', borderRadius: '5px' }}
                        src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543"
                    />
                    <h2
                        style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            marginTop: '3%'
                        }}
                    >
                        Avengers - Endgame
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <RatingStars rating={4.5} />
                        <span>Action Movie</span>
                    </div>
                    <button>Gostei joinha</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
