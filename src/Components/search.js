import React, {useContext, useEffect, useState} from "react"
import "./search.css"
import { useParams } from "react-router-dom"
import Cards from "./card"


const Search = (props) => {
    
    const [movieList, setMovieList] = useState([]);
  
   //console.log(props.search);
    // useEffect(() => {
    //     getData()
    // }, [])
    let variable=props.search
    console.log(props.search);
    useEffect(() => {
    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=8545476b1c474e3fae2e5865d2bd2bc1&language=en-US&query=${variable}`;
    console.log(url);
      const fetchdata = async () => {
      const response = await fetch(url);
      console.log(response);
      const json = await response.json();
      console.log(json.results);
      setMovieList(json.results);
    };
    fetchdata();
  }, [variable]);

    // const getData = () => {
    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=8545476b1c474e3fae2e5865d2bd2bc1&language=en-US&query=${search}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.results);
    //         setMovieList(data.results)
    //     })
    // }

    return (
        <div className="movie__list">
            <h2 className="list__title">Search Results</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default Search;