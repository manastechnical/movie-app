import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../features/movies/MovieSlice';
import MovieCard from './MovieCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Settings} from '../common/settings';

const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ) 
  : 
  (<div><h3>{movies.Error}</h3></div>)
  
  let renderShows = "";
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show,index)=>(
      <MovieCard key={index} data={show}/>
    ))
  ) 
  : 
  (<div><h3>{shows.Error}</h3></div>)

  return (
    <div className='movie-wrapper'>
      <div className='my-5 mx-0'>
        <h2 className='text-font-secondary mb-3 font-normal'>Movies</h2>
        <div>
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='my-5 mx-0'>
        <h2 className='text-font-secondary mb-3 font-normal'>Shows</h2>
        <div>
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;