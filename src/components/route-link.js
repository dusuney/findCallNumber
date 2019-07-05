import React from 'react';
import { Link } from "react-router-dom";
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
              <Link to="/topicOne">Topic one</Link>
            </li>
            <li>
              <Link to="/topicTwo">Topic two</Link>
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