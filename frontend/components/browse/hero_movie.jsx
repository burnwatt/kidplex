import React from 'react';
import spidey from '../../../app/assets/images/spidey.png';
import {Link} from 'react-router-dom';

class HeroMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = { muted: true};
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
        let hero = document.getElementById('hero');
        if (window.scrollY > 300) {
            hero.muted = true;
            hero.pause();
            this.setState({muted: true});
        } else {
            hero.play();
        }
    }

    loadPoster(){
        let hero = document.getElementById('hero');
        hero.autoplay = false;
        hero.load();
    }

    componentDidMount(){
        window.addEventListener("scroll", this.scrollPause);
    }

    componentDidUpdate(){
        let hero = document.getElementById('hero');
        if (hero) {
            hero.addEventListener("ended", this.loadPoster);
        }
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollPause);
    }

    render(){
        const hero = this.props.videos[14]
        if(!hero){
            return null
        }

        let controlButton;
        if(this.state.muted === true){
            controlButton = <i className="fas fa-volume-mute" onClick={this.volumeToggle}></i>;
        } else {
            controlButton = <i className="fas fa-volume-up" onClick={this.volumeToggle}></i>;
        }

        return (
            <div className='hero-container'>
                <video
                    id='hero'
                    className='hero-player'
                    poster={hero.poster_url}
                    src={hero.trailer_url}
                    autoPlay
                    muted
                >
                </video>
                <div className='hero-info'>
                    <img id='hero-title'src={spidey} alt={hero.title}/>
                    <Link className='hero-buttons' to={'/watch/' + hero.id}>
                        <i className="fas fa-play"></i>
                        <span>Play</span>
                    </Link>
                    <h2>Watch Now</h2>
                    <section id='hero-synopsis'>{hero.synopsis}</section>
                </div>
                <div className='hero-control'>
                    {controlButton}
                </div>
            </div>
        )
    }   
}

export default HeroMovie;