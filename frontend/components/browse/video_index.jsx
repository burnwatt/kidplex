import React from 'react';

import Video from './video';
import HeadContainer from '../head/head_container';
import GenreContainer from '../genre/genre_container';
import HeroMovie from '../browse/hero_movie';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getVideos();
    }

    render(){
        if(!this.props.videos){
            return <ul></ul>
        }

        return <div className='video-index'>
            <HeadContainer />
            <HeroMovie movie={this.props.videos[1]}/>
            <ul className='video-index-container'>
                {this.props.videos.map((video) => <Video video={video} key={video.id} />)}
            </ul>
        </div>
    }
}

export default VideoIndex;