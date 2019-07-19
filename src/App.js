import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AuthContainer from './components/AuthContainer';
import PrivateRoute from './components/PrivateRoute';

import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducers from './store/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const ThemeContext = React.createContext('light');

const store = createStore(rootReducers);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuth: false }; 
  }


  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container auth-form">
              <div>
                <ThemeContext.Provider value={this.state.isAuth}>
                  <div>
                    <Route path="/login" component={AuthContainer} />
                    <PrivateRoute path='/' component={PrivateRoute} />
                  </div>
                </ThemeContext.Provider>
              </div>

            </div>
          </div>
        </Router>
      </Provider>
    );

  }
}


export default App;
