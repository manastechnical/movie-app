import React,{useEffect} from 'react';
import MovieListint from './MovieListing';
import movieApi from '../common/apis/movieApi';
import { APIKEY } from '../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../features/movies/MovieSlice';

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovies = async() => {
      const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`).catch((err)=>{
        console.log("Err: "+err);
      });
      dispatch(addMovies(response.data));
    }

    fetchMovies();
  },[]);

  return (
    <div>
      <div className=''></div>
      <MovieListint />
    </div>
  );
}

export default Home;
