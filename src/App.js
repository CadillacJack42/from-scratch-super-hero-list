import './App.css';
import { useState } from 'react';
import { getAllHeroes } from './services/fetch-utils';

function App() {
  const [heroes, setHeroes] = useState();
  const myFunc = async () => {
    const heroList = await getAllHeroes();
    setHeroes(heroList);
  };
  myFunc();
  const list = JSON.stringify(heroes);
  return <div className="App">{list}</div>;
}

export default App;
