import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Login from './components/login';
import PrivateRoute from './components/private-route';

import { BrowserRouter as Router, Route } from "react-router-dom";

const ThemeContext = React.createContext('light');



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuth: false };
  }

  render() {
    return (
      <Router>

        <div className="App">
          <div className="container auth-form">
            <div>
              <ThemeContext.Provider value={this.state.isAuth}>
                  <div>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path='/' component={PrivateRoute} />
                  </div>
              </ThemeContext.Provider>
            </div>

          </div>
        </div>
      </Router>
    );

  }
}


export default App;
