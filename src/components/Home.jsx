import React,{useEffect, useState} from 'react';
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice';


const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));    
    dispatch(fetchAsyncShows(seriesText));
  },[dispatch]);

  return (
    <div>
      <div className=''></div>
      <MovieListing />
    </div>
  );
}

export default Home;
