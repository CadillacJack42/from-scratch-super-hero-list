import './Styles/App.css';
import Nav from './Routes/Nav';
import List from './Routes/List';
import Detail from './Routes/Detail';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(false);
  return (
    <Router>
      <div className="App">
        <h1>Super Hero Catalogue</h1>
        <Route exact path="/">
          <Redirect to="/home/1" />
        </Route>
        <Route exact path="/:section/:num">
          <Nav disabled={disabled} />
        </Route>
        <Route exact path="/home/:page">
          <List setDisabled={setDisabled} />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
      </div>
    </Router>
  );
}

export default App;
