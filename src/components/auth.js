import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BrowserRouter as Redirect } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});


class Auth extends React.Component {
  state = {
    isAuth: false
  }
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  redirect() {
    localStorage.setItem('isAuth',true)
    this.setState({ isAuth: true });
    window.location = 'http://localhost:3000';
  }
  onEmailChange(event){
    this.props.setEmailText(event.target.value)
  }

  onPasswordChange(event){
    console.log(event);
    this.props.setPasswordText(event.target.value)
  }
  render(props) {
    if (localStorage.getItem('isAuth')) {
      return <Redirect to={'/'} />
    }

    return (

      <div>
        
          <label htmlFor="email" >Имя</label>
          <input value={this.props.email} onChange={this.onEmailChange}></input>

          <label htmlFor="password" >Пароль</label>
          <input value={this.props.password} onChange={this.onPasswordChange}></input>
          <button onClick={this.redirect.bind(this)}>Войти</button> 
        
      </div>
    );
  }
}

export default Auth;