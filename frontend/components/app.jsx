import React from 'react';
import { Route } from 'react-router-dom';


import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HeadContainer from './head/head_container';

const App = () => {
    return <div>  
        <SplashContainer />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
}

export default App;