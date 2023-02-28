import React, { createContext, useEffect, useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./search";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';

function Navbar(props) {
  const [search, setSearch] = useState("");
  function handlesubmit(){
   // e.preventDefault();
    props.getData(search);
  }
  function handleClick(){
    setSearch("");
    props.setInput('');
  }
  // useEffect(() => {
  //   const url =
  //     `https://api.themoviedb.org/3/search/movie?api_key=8545476b1c474e3fae2e5865d2bd2bc1&language=en-US&query=${search}`;
  //   const fetchdata = async () => {
  //     const response = await fetch(url);
  //     console.log(response);
  //     const json = await response.json();
  //     console.log(json.results);
  //     setSearch(json.results);
  //   };
  //   fetchdata();
  // }, []);

  return (
    
    
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/g-drive-b0895.appspot.com/o/files%2Flogo-img.jpg?alt=media&token=99c09ce9-90ac-403e-88a3-8dae093a7a03"
          }
          id="img"
          alt="logo-img"
        />
        </Link>
        <div className="navbar-start-search">
         
          <Link to="/search">
          <SearchIcon onClick={handlesubmit}/>
          </Link>
          <input
            type="text"
            value={search}
            placeholder="Search Movie"
            onChange={(e) => setSearch(e.target.value)
            } 
               
          />
           <ClearIcon onClick={handleClick}/>  
        </div>
      </div>
      <div className="navbar-end">
        <button>Sign in</button>
        
      </div>
    </div>
    
    
  );
}

export default Navbar;
