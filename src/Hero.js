import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ hero }) {
  console.log(hero);
  return (
    <Link to={`detail/${hero.id}`}>
      <div className="hero-container">
        <p>
          {`Name : ${hero.name}`}
          <br></br>
          {`Full Name : ${hero.full_name}`}
          <br></br>
          {`Aliases ${hero.aliases}`}
          <br></br>
          {`Alter Egos : ${hero.alter_egos}`}
          <br></br>
        </p>
        <img src={hero.image}></img>
        <p>{`${hero.name} is a ${hero.race} who identifies as ${hero.gender}.
         They were born in ${hero.birthplace}. They stand at ${hero.height},
         weigh ${hero.weight}, have ${hero.hair_color} hair and ${hero.eye_color} eyes`}</p>
        <p>{`${hero.name} `}</p>
      </div>
    </Link>
  );
}
