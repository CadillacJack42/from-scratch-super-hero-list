import React from 'react';
import './Styles/Hero.css';
import { Link } from 'react-router-dom';

export default function Hero({ hero }) {
  return (
    <Link to={`/detail/${hero.id}`} className={'link'}>
      <div className="hero-container">
        <div className="sub-hero-container">
          <h2 className="hero-title">{`Name : ${hero.name}`}</h2>
          <img className="hero-image" height={'300px'} src={hero.image}></img>
        </div>
      </div>
    </Link>
  );
}
