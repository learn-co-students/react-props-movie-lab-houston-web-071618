import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = (movieData) => {
    // map over your movieData array and return the correct
    //.map over the imported movie data array and render MovieCards for each element. (see documentation)
    //Don't forget to pass all 4 props
    return movieData.map( (movie) => (
      <MovieCard
        title = {movie.title}
        IMDBRating = {movie.IMDBRating}
        genres = {movie.genres}
        poster = {movie.poster}
      />
    ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
