import { Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice';

const Header = () => {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (term==="") {
      return alert("Please enter movie/show");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }

  return (
    <div className='bg-secondary-color bg-cover h-20 px-10 py-0 flex items-center justify-between'>
      <div className=' text-font-primary text-xl font-semibold'>
        <Link to="/">Movie App</Link>
      </div>
      <div className='w-1/2 flex justify-center'>
        <form className='flex justify-center w-3/4'>
          <input type="text" onChange={(e)=>setTerm(e.target.value)} placeholder="Search Movies or Shows" className='text-sm w-full py-1 pr-1 pl-3 shadow appearance-none border rounded focus:outline-none focus:shadow-outline leading-tigh bg-slate-200' />
          <Search className="text-slate-200 cursor-pointer" onClick={handleSearch} />
        </form>
      </div>
      <div className='w-8 h-8'>
        <img className='w-8 h-8' src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
