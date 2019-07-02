import React from 'react';

// import Video from './video';
import HeadContainer from '../head/head_container';
import GenreContainer from '../genre/genre_container';
import HeroMovie from '../browse/hero_movie';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getVideos();
        this.props.getGenres();
    }

    render(){
        if(!this.props.videos){
            return <ul></ul>
        }
        return <div className='video-index'>
            <HeadContainer />
            <HeroMovie video={this.props.videos[1]}/>
            <ul className='video-index-container'>
                {this.props.genres.map((genre) => <GenreContainer genre={genre} videos={this.props.videos} key={genre.id} />)}
            </ul>
        </div>
    }
}

export default VideoIndex;