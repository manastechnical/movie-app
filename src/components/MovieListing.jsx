import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../features/movies/MovieSlice';
import MovieCard from './MovieCard';

const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
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
  
  let renderShows = "";
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show,index)=>(
      console.log(show),
      <MovieCard key={index} data={show}/>
    ))
  ) 
  : 
  (<div><h3>{shows.Error}</h3></div>)

  return (
    <div className='movie-wrapper'>
      <div className='my-5 mx-0'>
        <h2 className='text-font-secondary mb-3 font-normal'>Movies</h2>
        <div className='grid grid-cols-aFill gap-4'>{renderMovies}</div>
      </div>
      <div className='my-5 mx-0'>
        <h2 className='text-font-secondary mb-3 font-normal'>Shows</h2>
        <div className='grid grid-cols-aFill gap-4'>{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;