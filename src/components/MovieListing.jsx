import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../features/movies/MovieSlice';
import MovieCard from './MovieCard';

const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  console.log(movies);
  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      console.log(movie),
      <MovieCard key={index} data={movie}/>
    ))
  ) 
  : 
  (<div><h3>{movies.Error}</h3></div>)

  return (
    <div className='movie-wrapper'>
      <div className='my-5 mx-0'>
        <h2 className='text-font-secondary mb-3 font-normal'>Movies</h2>
        <div className='grid grid-cols-aFill gap-4'>{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;