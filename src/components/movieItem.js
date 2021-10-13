import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends Component {
    render(){
        return(
            <div>
                {/* <h1>{this.props.myFilm.Title}</h1>
                <p>{this.props.myFilm.Year}</p>
                <img src={this.props.myFilm.Poster}></img> */}
            

<Card>
<Card.Header>{this.props.myFilm.Title}</Card.Header>
<Card.Body>
  <blockquote className="blockquote mb-0">
  <img src={this.props.myFilm.Poster}></img>
    <footer className="blockquote-footer">
    {this.props.myFilm.Year}
    </footer>
  </blockquote>
</Card.Body>
</Card> 
</div>
        );
    }
}

export default MovieItem;