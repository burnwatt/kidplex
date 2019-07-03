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
            <div>
                {/* <video controls autoPlay poster={hero.poster_url} muted>
                    <source src={hero.trailer_url} />
                </video> */}
                <video
                    width='100%'
                    poster={hero.poster_url}
                    src={hero.trailer_url}
                    autoPlay
                    muted >
                </video>
            </div>
        )
    }   
}

export default HeroMovie;