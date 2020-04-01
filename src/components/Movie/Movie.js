import React from 'react';
import './Movie.css';
import noImage from "./no-image.jpg";

class Movie extends React.Component {
    render() {
        return (
            <div className="img-box">
                <img src={this.props.posterUrl === "noImage"? noImage : this.props.posterUrl} alt="" />
                <div className="transparent-box">
                    <div className="caption">
                        <p>{this.props.title}</p>
                        <p className="opacity-low">{this.props.year} {this.props.type}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;