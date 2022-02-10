import './Styles/App.css';
import Nav from './Routes/Nav';
import List from './Routes/List';
import Detail from './Routes/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(false);
  return (
    <Router>
      <div className="App">
        <h1>Super Hero Catalogue</h1>
        <Route path="/:section/:num">
          <Nav disabled={disabled} />
        </Route>
        <Route exact path="/home/:page">
          <List setDisabled={setDisabled} />
        </Route>
        <Switch>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
