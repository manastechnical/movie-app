import React from 'react';

const MovieCard = ({ key, data }) => {

  // const {data} = props;

  return (
    <div className='bg-secondary-color cursor-pointer'>
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
    </div>
  );
}

export default MovieCard;