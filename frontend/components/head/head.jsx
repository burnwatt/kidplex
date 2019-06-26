import React from 'react';
import { Link } from 'react-router-dom';

const Head = (props) => {
    if (props.user) {
        return <div className='kidplex-header'>
            <img src={window.logo} alt='KidPlex' className='logo'/>
            <button onClick={props.logout}>Log Out</button>
        </div>
    } else {
        return <div className='kidplex-header'>
            <img src={window.logo} alt='KidPlex' className='logo'/>
            <Link to='/login' className='login-btn'> Sign In </Link>
        </div>
    }
}

export default Head;