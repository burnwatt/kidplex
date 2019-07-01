import React from 'react';
// import { Player } from 'video-react';

const VideoShow = props => {
    return (
        // <Player
        //     // playsInline
        //     poster="/assets/poster.jpg"
        //     src="https://kidplex-dev.s3.us-east-2.amazonaws.com/toy_story.mp4"
        // />
        <div>
            <video
                poster='/assets/poster.jpg'
                src="https://kidplex-dev.s3.us-east-2.amazonaws.com/toy_story.mp4"
                controls >
            </video>
            Title: {props.title}
            URL: 
        </div>   
    );
};

export default VideoShow;