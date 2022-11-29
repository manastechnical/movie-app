import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

const Header = () => {
  return (
    <div className='bg-secondary-color bg-cover h-20 px-10 py-0 flex items-center justify-between'>
      <Link to="/" style={{textDecoration: 'none',color:'white'}}>
        <div className=' text-font-primary text-xl font-semibold'>
            Movie App
        </div>
      </Link>
      <div className='w-8 h-8'>
        <img className='w-8 h-8' src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
