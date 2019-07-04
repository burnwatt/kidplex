import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import error404 from './error404';
import VideoIndexContainer from './browse/video_index_container';
import WatchContainer from './browse/video_show_container';

const App = () => {
    return <div>  
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/browse" component={VideoIndexContainer} />
            <ProtectedRoute path="/watch/:id" component={WatchContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/" component={error404} />
        </Switch>
    </div>
}

export default App;