import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {

    return (
        <div className="splash-page">
            <div className="splash-header">
                <Link to="/">Logo</Link>
                <Link to="/login">Log In</Link>
            </div>

            <div className="splash-main">
                <h2>See what's next</h2>
                <span>Watch Anywhere. Cancel Anytime</span>
                <Link to="/signup">Join Free For A Month</Link>
            </div>
        </div>
    )
}

export default Splash;