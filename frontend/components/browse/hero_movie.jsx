import React from 'react';

class HeroMovie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <video
                    poster='/assets/poster.jpg'
                    src="https://kidplex-dev.s3.us-east-2.amazonaws.com/toy_story.mp4"
                    controls >
                </video>
                {/* Title: {this.props.movie.title} */}
            </div>
        )
    }   
}

export default HeroMovie;