import React from 'react';
import { Link } from 'react-router-dom';
import HeadContainer from '../head/head_container';

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