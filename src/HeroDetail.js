import React from 'react';
import './Styles/HeroDetail.css';

export default function HeroDetail({ hero }) {
  return (
    <div className="hero-detail-container">
      <h1 className="hero-name">{`${hero.name} `}</h1>
      <div className="center-items">
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
        <img alt={'No Image Available'} src={hero.image} className={'hero-detail-image'}></img>
        <div className="hero-stats">
          <h3>{hero.name} Stats</h3>
          <p>
            {`Combat: ${hero.combat}`}
            <br></br>
            {`Power: ${hero.power}`}
            <br></br>
            {`Durability: ${hero.durability}`}
            <br></br>
            {`Speed: ${hero.speed}`}
            <br></br>
            {`Strength: ${hero.strength}`}
            <br></br>
            {`Intelligence: ${hero.intelligence}`}
          </p>
        </div>
      </div>

      <h3>{hero.name} Bio</h3>
      <div className="bio-container">
        <p className="bio-left">
          {`Publisher : ${hero.publisher}`}
          <br></br>
          {`First Appearance : ${hero.first_appearance}`}
          <br></br>
          {`alignment : ${hero.alignment}`}
          <br></br>
          {`Occupation : ${hero.occupation}`}
          <br></br>
          {`Base : ${hero.base}`}
          <br></br>
          {`Groups : ${hero.groups}`}
          <br></br>
          {`Relatives : ${hero.relatives}`}
          <br></br>
        </p>
        <p className="bio">
          {`Race : ${hero.race}`}
          <br></br>
          {`Gender : ${hero.gender}`}
          <br></br>
          {`Birthplace : ${hero.birthplace}`}
          <br></br>
          {`Height : ${hero.height}`}
          <br></br>
          {`Weight : ${hero.weight}`}
          <br></br>
          {`Hair : ${hero.hair_color}`}
          <br></br>
          {`Eyes : ${hero.eye_color}`}
        </p>
      </div>
    </div>
  );
}
