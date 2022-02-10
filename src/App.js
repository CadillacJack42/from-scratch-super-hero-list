import './App.css';
import List from './Routes/List';
import Detail from './Routes/Detail';
import { useEffect, useState } from 'react';
import { getAllHeroes } from './services/fetch-utils';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [page, setPage] = useState(1);
  const [heroes, setHeroes] = useState([]);
  const From = (page - 1) * 50;
  const To = page * 50 - 1;

  useEffect(() => {
    const myFunc = async () => {
      const heroList = await getAllHeroes(From, To);
      setHeroes(heroList);
    };
    myFunc();
  }, [From, To]);
  console.log(heroes);
  return (
    <Router>
      <div className="App">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous Page
        </button>
        <button disabled={heroes > 50} onClick={() => setPage(page + 1)}>
          Next Page
        </button>
        <Switch>
          <Route exact path="/">
            <List heroes={heroes} />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
