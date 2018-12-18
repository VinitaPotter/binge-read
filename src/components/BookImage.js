import React, { Component } from 'react';
import library from '../images/library.jpg'

class BookImage extends Component{
    render(){
        const { thumbnail } = this.props;
            if(thumbnail !== ""){
            return(
                <div className="container hide-on-med-and-down">
                    <img src={thumbnail} alt="library" width="120%"/>
                </div>
            );
        } else {
            return(
                <div className="container hide-on-med-and-down">
                    <img src={library} alt="library" width="120%"/>
                </div>     
            );
        }
    }
};

export default BookImage