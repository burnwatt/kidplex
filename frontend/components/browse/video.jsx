import React from 'react';
import {Link} from 'react-router-dom';

const Video = props => {

    return(
        <li className='video-item'>
            <Link to={'/browse/' + props.video.id}>
                {/* Title: {props.video.title} <br/> */}
                <img src={props.video.poster_url} alt={props.video.title}/>
            </Link>
            {/* Year:  {props.video.year} <br />
            Synopsis: {props.video.synopsis} <br /> */}
        </li>
    );
}

export default Video;