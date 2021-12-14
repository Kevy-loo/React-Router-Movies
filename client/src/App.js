import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>Replace this Div with your Routes</div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movie'>Movie</Link>
        <Link to='/movieList'>Movie List</Link>
      </nav>
      <Switch>
        <Route path='/movies/:movieID'>
          <Movie movies={movieList} />
        </Route>
        <Route path='/'>
          <MovieList movies={movieList} />
        </Route>

      </Switch>

      
    </div>

  );
}
