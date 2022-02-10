import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ hero }) {
  console.log(hero);
  return (
    <Link to={`detail/${hero.id}`}>
      <div className="hero-container">
        <h2>{`Name : ${hero.name}`}</h2>
        <img src={hero.image}></img>
      </div>
    </Link>
  );
}
