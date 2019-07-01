import React from 'react';
import Video from './video';
import HeadContainer from '../head/head_container';

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
            <ul className='video-index-container'>
                {this.props.videos.map((video) => <Video video={video} key={video.id} />)}
            </ul>
        </div>
    }
}

export default VideoIndex;