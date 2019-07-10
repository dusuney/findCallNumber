import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ListElements from "./list-elements";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let isAuth = localStorage.getItem('isAuth')
    return (
      <Route render={(props) => (
        isAuth
          ? <ListElements {...props} />
          : <Redirect to={{
            pathname: '/login'
          }} />
      )} />
    )
  }
}

export default PrivateRoute;