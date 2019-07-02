import React from 'react';
import { Link } from 'react-router-dom';

const Head = (props) => {
    if (props.user) {
        return <div className='kidplex-header'>
            <Link to='/'>
                <img src={window.logo} alt='KidPlex' className='logo' />
            </Link>
            <button className='logout' onClick={props.logout}>Log Out</button>
        </div>
    } else {
        return <div className='kidplex-header'>
            <Link to='/'>
                <img src={window.logo} alt='KidPlex' className='logo' />
            </Link>
            <Link to='/login' className='signin'> Sign In </Link>
        </div>
    }
}

export default Head;