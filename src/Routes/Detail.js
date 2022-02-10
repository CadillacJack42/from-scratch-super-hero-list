import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../Hero';
import { getHeroById } from '../services/fetch-utils';

export default function Detail() {
  const { id } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    const fetchHero = async () => {
      const newHero = await getHeroById(id);
      setHero(newHero);
    };
    fetchHero();
  }, [id]);
  console.log(id, hero);
  return <div>{hero ? <Hero hero={hero} /> : <h1>Loading</h1>}</div>;
}
