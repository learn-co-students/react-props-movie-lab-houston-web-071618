import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return (
      movieData.map((oneMovieData) => <MovieCard key={oneMovieData.title} title={oneMovieData.title} IMDBRating={oneMovieData.IMDBRating} genres={oneMovieData.genres} poster={oneMovieData.poster} />)
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
