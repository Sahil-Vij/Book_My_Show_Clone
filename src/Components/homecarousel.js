import React, { useEffect, useState } from 'react'
import './homecarousel.css'
import Cards from './card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


//import "./movielist.css"
function Homecarousel(prop) {
  const[govie,setgovie]=useState([]);
  
  useEffect(() => {
    const url =
      `https://api.themoviedb.org/3/movie/${prop.genre}?api_key=8545476b1c474e3fae2e5865d2bd2bc1`;
    const fetchdata = async () => {
      const response = await fetch(url);
      const json = await response.json();
     // console.log(json.results);
      setgovie(json.results);
    };
    fetchdata();
  }, []);
  return (
    <div className="home2">
    <div className='heading'>
        <img  id="image" src='/icon.png' alt="" />
        <h1>{prop.genre.toUpperCase()}</h1>
        <Link to={`/movies/${prop.genre}`}>
        <button id="btn">Explore All</button>
        </Link>
    </div>
    <div className='car'>
        <Splide 
              options={ {
                rewind: true,
                gap   : '1.5rem',
                perPage: 5,
                lazyLoad: 'nearby',
              } }>         
          {
            govie.map(movie => (
              <SplideSlide>
              <Cards movie={movie} />
              </SplideSlide>
          ))
          }
         
        </Splide>
       
    </div>
    </div>
  )
}

export default Homecarousel;