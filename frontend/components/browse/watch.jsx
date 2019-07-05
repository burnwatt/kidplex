import React from 'react';
import {Link} from 'react-router-dom';

class Watch extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getVideo(this.props.match.params.id);
    }

    render(){
        if(!this.props.video){
            return <div></div>;
        }
        return(
            <div className='watch-wrapper'>
                <video className='watch-player' controls autoPlay>
                    <source src={this.props.video.movie_url}/>
                </video>
                <div className='back-button'>
                    <Link to='/browse'>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Watch;