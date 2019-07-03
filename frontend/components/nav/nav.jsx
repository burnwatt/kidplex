import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav className='nav-main'>
                <ul className='nav-primary'>
                    <li>
                        <Link to='/browse'>
                            <img src={window.logo} alt='KidPlex' className='nav-logo' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/browse' className='nav-home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/browse' className='nav-home'>Movies</Link>
                    </li>
                </ul>
                <div className='nav-secondary'>
                    <i className="fas fa-search"></i>
                    <a href="https://dvd.netflix.com/">DVD</a>
                    <i class="fas fa-bell"></i>
                    <i class="far fa-smile"></i>
                </div>
            </nav>
        )
    }
}

export default Nav;