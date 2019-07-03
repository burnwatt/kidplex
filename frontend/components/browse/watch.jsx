import React from 'react';

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
            <div>
                <video controls autoPlay>
                    <source src={this.props.video.movie_url}/>
                </video>
            </div>
        );
    }
}

export default Watch;