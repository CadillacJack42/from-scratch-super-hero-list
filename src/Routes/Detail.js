import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import HeroDetail from '../HeroDetail';
import { getHeroById } from '../services/fetch-utils';

export default function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const [hero, setHero] = useState({});
  const chooseOperand = () => {
    history.location.state.state === '+' &&
      history.push(`/detail/${Number(id) + 1}`, { state: history.location.state.state });
    history.location.state.state === '-' &&
      history.push(`/detail/${Number(id) - 1}`, { state: history.location.state.state });
  };

  useEffect(() => {
    const fetchHero = async (id) => {
      const newHero = await getHeroById(id);
      newHero === null ? chooseOperand() : setHero(newHero);
      setHero(newHero);
    };
    fetchHero(id);
  }, [id]);
  return <div>{hero ? <HeroDetail hero={hero} /> : <h1>Loading</h1>}</div>;
}
