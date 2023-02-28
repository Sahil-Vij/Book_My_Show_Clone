import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import './home.css';
import Homecarousel from "./homecarousel";
import { Upcoming } from "@mui/icons-material";
import Hoc from "./hoc";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=8545476b1c474e3fae2e5865d2bd2bc1";
    const fetchdata = async () => {
      const response = await fetch(url);
      const json = await response.json();
      //console.log(json.results);
      setPopularMovies(json.results);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                    {movie ? movie.release_date : ''}
                    <span className="posterImage__rating">
                        {movie ? movie.vote_average : ''}
                        <i className="fas fa-star" />{' '}
                    </span>
                </div>
                <div className="posterImage__description">
                    {movie ? movie.overview : ''}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
     <Hoc/>
    </>
  );
}

export default Home;
