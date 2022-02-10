import React from 'react';

export default function Hero({ hero }) {
  console.log(hero);
  return (
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
    </div>
  );
}
