import logo from "./logo.svg";
import Navbar from "./Components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import './App.css'
import MovieList from "./Components/movielist";
import Movie from "./Components/movie";
import Search from "./Components/search";
import { useState } from "react";
//import { SearchTwoTone } from "@mui/icons-material";
//import { Search, SearchOffOutlined } from "@mui/icons-material";

function App() {
const[input,setInput]=useState('');

  function getData(data){
    console.log(data);
     
      
     }
  }
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar getData={getData} setInput={setInput} />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route exact path="/search" element={<Search search={input} setInput={setInput}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
