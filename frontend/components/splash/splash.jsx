import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import HeadContainer from '../head/head_container';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

const Splash = props => {

    return (
        <div className="splash-page">
            <header>
                <HeadContainer />
            </header>
            <div className="splash-main">
                <h2>See what's next.</h2>
                <span>Watch Anywhere. Cancel Anytime.</span>
                <br/>
                <Link to="/signup" className='signup-btn'>Join Free For A Month</Link>
            </div>
        </div>
    )
}

export default Splash;