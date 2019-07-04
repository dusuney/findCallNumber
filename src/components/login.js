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
  
 
  class Login extends React.Component {
    state = {
      isAuth: false
    }
    constructor(props) {
      super(props);
  
    }
  
    redirect() {
      this.setState({ isAuth: true });
      window.location = 'http://localhost:3000';
    }
  
    render(props) {
      if (localStorage.getItem('isAuth')) {
        return <Redirect to={'/'} />
      }
  
      return (
  
        <div>
          {
            <Formik
              initialValues={{
                firstName: '',
                lastName: ''
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                localStorage.setItem('isAuth', true);
                this.redirect();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="col-md-12">
                    <div className="form-group ">
                      <label htmlFor="firstName">Doctor-name</label>
                      <Field name="firstName" className="form-control" />
                      {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                      ) : null}
                    </div>
                    <label htmlFor="lastName">Пароль</label>
                    <Field name="lastName" className="form-control" />
                    {errors.lastName && touched.lastName ? (
                      <div>{errors.lastName}</div>
                    ) : null}
                    <br />
                    <button type="submit" className="btn btn-primary">Войти</button>
                  </div>
                </Form>
              )}
            </Formik>
          }
        </div>
      );
    }
  }

  export default Login;