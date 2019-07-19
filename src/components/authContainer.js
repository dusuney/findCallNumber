import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import { setEmailText, setPasswordText } from '../store/auth/actions';

class AuthContainer extends React.Component {
  
    render() {
        return <Auth
            email={this.props.email} password={this.props.password}
            setEmailText={this.props.setEmailText} setPasswordText={this.props.setPasswordText}></Auth>
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
