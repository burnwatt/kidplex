import React from 'react';

class Genre extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <h1>{this.props.genre.genre}</h1>
    }
}

export default Genre;