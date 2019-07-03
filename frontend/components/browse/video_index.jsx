import React from 'react';

// import Video from './video';
import NavContainer from '../nav/nav_container';
import GenreContainer from '../genre/genre_container';
import HeroMovieContainer from '../browse/hero_movie_container';

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
            <NavContainer />
            <HeroMovieContainer videos={this.props.videos}/>
            <ul className='video-index-container'>
                {this.props.genres.map((genre) => <GenreContainer genre={genre} videos={this.props.videos} key={genre.id} />)}
            </ul>
        </div>
    }
}

export default VideoIndex;