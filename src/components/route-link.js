import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
class RouteLink extends React.Component {
  logout() {
    localStorage.setItem('isAuth', '');
    window.location = 'http://localhost:3000/login';
  }

  render() {
    if (localStorage.getItem('isAuth')) {
      return (
        <div>
          <ul>
            <li>
              <a href="/" link="/" onClick={this.logout}>Выход</a>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
            <li>
              <Link to="/topics2">topics2</Link>
            </li>
          </ul>
          <hr />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default RouteLink;