import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import error404 from './error404';
import VideoIndexContainer from './browse/video_index_container';
import VideoShow from './browse/video_show';

const App = () => {
    return <div>  
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/browse" component={VideoIndexContainer} />
            <ProtectedRoute path="/browse/:id" component={VideoShow} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/" component={error404} />
        </Switch>
        {/* <SplashContainer />
        <AuthRoute path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}


    </div>
}

export default App;