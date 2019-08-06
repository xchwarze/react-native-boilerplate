import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginView from './LoginView';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch.user.authLogin({
            username: un,
            password: pwd
        })
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
