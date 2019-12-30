import React from 'react';
import PropTypes from 'prop-types';

const Login = ({authentiucate}) => {
    return (
        <nav className="login">
            <h2>Inventory Login</h2>
            <p>Sign in to manage your store's inventory</p>
            <button
                className="github"
                onClick={() => authentiucate('Github')}
            >Log in with Github</button>
            <button
                className="facebook"
                onClick={() => authentiucate('Facebook')}
            >Log in with Facebook</button>
            <button
                className="twitter"
                onClick={() => authentiucate('Twitter')}
            >Twitter</button>
        </nav>
    );
};

Login.prototypes = {
    authentiucate: PropTypes.func.isRequired
};

export default Login;
