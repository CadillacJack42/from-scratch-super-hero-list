import Hero from '../Hero';
import '../Styles/List.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterHeroes, getAllHeroes } from '../services/fetch-utils';

export default function List({ setDisabled }) {
  const { page } = useParams();
  const [heroes, setHeroes] = useState([]);
  const [column, setColumn] = useState('name');
  const [query, setQuery] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredHeroes = await filterHeroes(column, query);
    setHeroes(filteredHeroes);
  };

  return (
    <div>
      <div className="search-heroes">
        <label>
          Find Hero By :
          <form onSubmit={handleSubmit}>
            <select onChange={(e) => setColumn(e.target.value)}>
              <option value="name">Name</option>
              <option value="publisher">Publisher</option>
              <option value="alignment">Alignment</option>
            </select>
            <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
            <button>Search</button>
          </form>
        </label>
      </div>

      <div className="hero-container">
        {heroes.map((hero) => {
          return <Hero hero={hero} key={hero.slug} />;
        })}
      </div>
    </div>
  );
}
