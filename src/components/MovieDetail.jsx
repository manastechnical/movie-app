import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMoiveOrShow } from '../features/movies/movieSlice';
import { CalendarToday, Movie, Refresh, Star, ThumbUp } from '@material-ui/icons';
import ReactLoading from 'react-loading';


const MovieDetail = () => {

  const [loading, setLoading] = useState(false);
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    setTimeout(() => {
      setLoading(true);
    }, 1500)
    return () => {
      dispatch(removeSelectedMoiveOrShow());
    }
  }, [dispatch, imdbID]);


  return (
    loading ? (<div className='flex flex-col lg:flex-row lg:justify-evenly py-10 px-0 text-font-primary font-normal'>
      <div className='section-left'>
        <div className='text-4xl text-font-primary'>{data.Title}</div>
        <div className='lg:hidden flex justify-center'>
        <img src={data.Poster} alt={data.Title} />
      </div>
        <div className='pl-1 mt-5 text-font-secondary flex'>
          <span className='mr-5'>
            IMDB Rating <Star className='text-gold' /> : <span className='text-[#c3def7]'>{data.imdbRating}</span>
          </span>
          <span className='mr-5'>
            IMDB Votes <ThumbUp className='text-thumbsUp' /> : <span className='text-[#c3def7]'>{data.imdbVotes}</span>
          </span>
          <span className='mr-5'>
            Runtime <Movie className='text-gray-400' /> : <span className='text-[#c3def7]'>{data.Runtime}</span>
          </span>
          <span className='mr-5'>
            Year <CalendarToday className='text-calendar' /> : <span className='text-[#c3def7]'>{data.Year}</span>
          </span>
        </div>
        <div className='mt-5 leading-7 '>
          {data.Plot}
        </div>
        <div className=''>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>Director:</span>
            <span className='text-font-secondary'>{data.Director}</span>
          </div>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>Actors:</span>
            <span className='text-font-secondary'>{data.Actors}</span>
          </div>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>Awards:</span>
            <span className='text-font-secondary'>{data.Awards}</span>
          </div>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>Generes:</span>
            <span className='text-font-secondary'>{data.Genre}</span>
          </div>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>Languages:</span>
            <span className='text-font-secondary'>{data.Language}</span>
          </div>
          <div className='my-2'>
            <span className='py-3 mr-2 px-0 text-font-primary font-semibold w-full'>BoxOffice:</span>
            <span className='text-font-secondary'>{data.BoxOffice}</span>
          </div>
        </div>
      </div>
      <div className='lg:min-w-fit lg:flex hidden'>
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>) :
      <div className='flex justify-evenly py-10 px-0 text-font-primary font-normal mb-20'>
        <ReactLoading color='#ffffff' height={66} width={200} />
      </div>
  );
}

export default MovieDetail;