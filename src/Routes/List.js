import Hero from '../Hero';
import '../Styles/List.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllHeroes } from '../services/fetch-utils';

export default function List({ setDisabled }) {
  const { page } = useParams();
  const [heroes, setHeroes] = useState([]);
  const From = (page - 1) * 50;
  const To = page * 50 - 1;

  useEffect(() => {
    const myFunc = async () => {
      const heroList = await getAllHeroes(From, To);
      setHeroes(heroList);
      heroList.length < 50 ? setDisabled(true) : setDisabled(false);
    };
    myFunc();
  }, [From, To, setDisabled]);
  return (
    <div className="hero-container">
      {heroes.map((hero) => {
        return <Hero hero={hero} key={hero.slug} />;
      })}
    </div>
  );
}
