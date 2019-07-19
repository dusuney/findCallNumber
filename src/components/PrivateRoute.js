import React from 'react';
import { BrowserRouter as Router, Route,  Redirect } from "react-router-dom";
import  ListElements  from "./Dashboard";

class PrivateRoute extends React.Component {
 
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