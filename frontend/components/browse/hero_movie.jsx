import React from 'react';

class HeroMovie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <video
                    poster='https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/spiderman.jpg'
                    src="https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/spiderman.mp4"
                    controls >
                </video>
                {/* Title: {this.props.video.title} */}
            </div>
        )
    }   
}

export default HeroMovie;