import { logDOM } from '@testing-library/react';
import React from 'react';
import Hero from '../Hero';

export default function List({ heroes }) {
  return (
    <div className="hero-container">
      {heroes.map((hero) => {
        console.log(hero);
        return <Hero hero={hero} key={hero.slug} />;
      })}
    </div>
  );
}
