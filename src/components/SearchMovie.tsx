import React, { useEffect } from 'react';
import useMovieStore from '../store/movie-data-store';

interface ISearchMovieProps {
  title: String;
}

const SearchMovie: React.FunctionComponent<ISearchMovieProps> = ({title}) => {

  const fetchMovies = useMovieStore(state => state.fetchMovies);
  const state = useMovieStore();
  
  let imdbLink = "https://www.imdb.com/title/" + state.movieData?.imdbID;

  useEffect(() => {
  
    fetchMovies(title);
   
  }, [title, fetchMovies]);
      
  if (title !== "" && state.movieData?.Error !== "Movie not found!")
  {
    return (
      <div className="Movie">
        <div className="Poster">
          <img alt="Poster" src={state.movieData?.Poster}/>
        </div>
      <div className="Movie-details">

        <h1><i className="fas fa-film"/> {state.movieData?.Title}</h1>

        <p><i className="fas fa-scroll"/> {state.movieData?.Genre}</p>
        <p><i className="fas fa-calendar-day"/> Released {state.movieData?.Released}</p>
        <p><i className="fas fa-user"/> Directed by {state.movieData?.Director}</p>

        <hr/>
        <h2><i className="fas fa-users"/> Cast: </h2>
        <p>{state.movieData?.Actors}</p>

        <hr/>
        <h2><i className="fas fa-pen-alt"/> Written by: </h2>
        <p>{state.movieData?.Writer}</p>

        <hr/>
        <h2><i className="fas fa-file-alt"/> Plot Synopsis:</h2>
        <p> {state.movieData?.Plot}</p>

        <hr/>
        <div className="imdb">
          <p>See more on </p> <a href={imdbLink} rel="noreferrer" target="_blank"><i className="fab fa-imdb fa-3x"/></a>
        </div>

      </div>
    </div>
    );
  }
  else if (state.movieData?.Error === "Movie not found!") {
    return(
      <div>
        <h1><i className="far fa-question-circle"/> Whoops! We couldn't find that title!</h1>
      </div>
    );
  }
  else {
    return(null);
  }
}

export default SearchMovie;