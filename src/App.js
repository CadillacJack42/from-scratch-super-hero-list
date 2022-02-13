import './Styles/App.css';
import Nav from './Routes/Nav';
import List from './Routes/List';
import Detail from './Routes/Detail';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import React, { useState } from 'react';
import React from 'react';

// function App() {
//   const [disabled, setDisabled] = useState(false);
//   return (
//     <Router>
//       <div className="App">
//         <h1>Super Hero Catalogue</h1>
//         <Route exact path="/">
//           <Redirect to="/home/1" />
//         </Route>
//         <Route exact path="/:section/:num">
//           <Nav disabled={disabled} />
//         </Route>
//         <Route exact path="/home/:page">
//           <List setDisabled={setDisabled} />
//         </Route>
//         <Route exact path="/detail/:id">
//           <Detail />
//         </Route>
//       </div>
//     </Router>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  render() {
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/home/1" />
        </Route>
        <Home>
          <Switch>
            <Route
              exact
              path="/:section/:num"
              render={(props) => <Nav {...props} disabled={this.state.disabled} />}
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/home/:page"
              render={(props) => <List {...props} disabled={this.state.disabled} />}
            />
          </Switch>
          <Switch>
            <Route exact path="/detail/:id" component={Detail} />
          </Switch>
        </Home>
      </Router>
    );
  }
}
export default App;
