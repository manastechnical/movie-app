import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ key, data }) => {

  return (
    <div className='bg-secondary-color cursor-pointer min-h-[450px] h-full m-2 transition-all duration-200 ease-out hover:opacity-50 transform hover:-translate-y-1 hover:scale-110'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className=''>
        <div className='h-80'>
          <img className='w-full h-full' src={data.Poster} alt={data.Title} />
        </div>
        <div className='p-5'>
          <div className='text-font-primary'>
            <h4 className='text-2xl font-normal mb-2'>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;