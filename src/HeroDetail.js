import React from 'react';
import './Styles/HeroDetail.css';

export default function HeroDetail({ hero }) {
  return (
    <div className="hero-container">
      <h1 className="hero-name">{`${hero.name} `}</h1>
      <img alt={'No Image Available'} src={hero.image} className={'hero-detail-image'}></img>
      <h3 className="names">
        {`Name : ${hero.name}`}
        <br></br>
        {`Full Name : ${hero.full_name}`}
        <br></br>
        {`Known Aliases : ${hero.aliases}`}
        <br></br>
        {`Alter Egos : ${hero.alter_egos}`}
        <br></br>
      </h3>
      <p className="bio">{`${hero.name} is a ${hero.race} who identifies as ${hero.gender}.
         They were born in ${hero.birthplace}. They stand at ${hero.height},
         weigh ${hero.weight}, have ${hero.hair_color} hair and ${hero.eye_color} eyes`}</p>
    </div>
  );
}
