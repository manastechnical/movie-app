import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='my-0 mx-10'>
        <Routes>
          <Route path='/' component={Home} element={<Home/>}/>
          <Route path='/movie:imdbID' element={<MovieDetail/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
