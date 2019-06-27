import React from 'react';
import { Link } from 'react-router-dom';

const error404 = () => {
    return (
        <div>
            <Link to='/'>
                <img src={window.error404} alt='HEY! LISTEN' className='error404'/>
            </Link>
        </div>
    )
}

export default error404;