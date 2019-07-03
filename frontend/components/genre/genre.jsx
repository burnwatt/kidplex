import React from 'react';
import Video from '../browse/video';

class Genre extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='genres'>
                <h1>{this.props.genre.genre}</h1>
                <ul className='genreList'>
                    {this.props.videos.map( vid => <Video video={vid} key={vid.id}/>)}
                </ul>
            </div>
        )
    }
}

export default Genre;