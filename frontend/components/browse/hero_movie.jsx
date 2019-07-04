import React from 'react';
import spidey from '../../../app/assets/images/spidey.png';
import {Link} from 'react-router-dom';

class HeroMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = { muted: false };
        this.volumeToggle = this.volumeToggle.bind(this);
        this.pauseHero = this.volumeToggle.bind(this);
    }

    volumeToggle(){
        let hero = document.getElementById('hero');
        if(hero.muted){
            hero.muted = false;
            this.setState({muted: false});
        } else {
            hero.muted = true;
            this.setState({muted: true});
        }
    }

    scrollPause(){

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        const hero = this.props.videos[14]
        if(!hero){
            return null
        }
        return (
            <div className='hero-container'>
                <video
                    id='hero'
                    className='hero-player'
                    poster={hero.poster_url}
                    src={hero.movie_url}
                >
                </video>
                <div className='hero-info'>
                    <img id='hero-title'src={spidey} alt={hero.title}/>
                        <Link className='hero-buttons' to={'/watch/' + hero.id}>
                            <i class="fas fa-play"></i>
                            Play
                        </Link>
                    <h2>Watch Now</h2>
                    <section id='hero-synopsis'>{hero.synopsis}</section>
                </div>
                <div className='hero-control'>
                    <i class="fas fa-volume-mute"></i>
                </div>
            </div>
        )
    }   
}

export default HeroMovie;