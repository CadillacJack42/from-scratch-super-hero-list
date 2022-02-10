import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import HeroDetail from '../HeroDetail';
import { getHeroById } from '../services/fetch-utils';

export default function Detail() {
  let { id } = useParams();
  const [hero, setHero] = useState({});
  const [route, setRoute] = useState();

  useEffect(() => {
    const fetchHero = async (id) => {
      const newHero = await getHeroById(id);
      //   newHero === null ? setRoute(`/detail/${Number(id) + 1}`) : setHero(newHero);
      setHero(newHero);
    };
    fetchHero(id);
  }, [id, route]);
  //   console.log(route);
  //   useRouteMatch(route);
  return <div>{hero ? <HeroDetail hero={hero} /> : <h1>Loading</h1>}</div>;
}
