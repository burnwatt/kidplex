import React from 'react';

class HeroMovie extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const hero = this.props.videos[14]
        if(!hero){
            return null
        }
        return (
            <div className='hero-container'>
                <video
                    className='hero-player'
                    poster={hero.poster_url}
                    src={hero.movie_url}
                    autoPlay
                    muted>
                </video>
            </div>
        )
    }   
}

export default HeroMovie;