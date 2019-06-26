import React from 'react';
import { Link } from 'react-router-dom';

const Head = (props) => {
    if (props.user) {
        return <div>
            <h1>KidPlex</h1>
            <button onClick={props.logout}>Log Out</button>
        </div>
    } else {
        return <div>
            <h1>KidPlex</h1>
            <span>Already a KidPlex Subscriber?
                <Link to='/login'> Login instead.</Link>
            </span>
        </div>
    }
}

export default Head;