import React, { useEffect, useState } from 'react';
import useMovieStore from '../store/movie-data-store';

interface ISearchMovieProps {
  title: String;
}

const SearchMovie: React.FunctionComponent<ISearchMovieProps> = ({title}) => {

  type IMovieResponse = {
    Title: String;
    Actors: String;
    Director: String;
    Genre: String;
    Plot: String;
    Poster: string;
    imdbID: String;
    Released: String;
    Writer: String;
    Error: String;
    Year: String;
  }

  const fetchMovies = useMovieStore(state => state.fetchMovies);
  const state = useMovieStore();
  const [watchlist, setWatchlist] = useState<(IMovieResponse | undefined)[]>([]);
  
  let imdbLink = "https://www.imdb.com/title/" + state.movieData?.imdbID;

  useEffect(() => {
  
    fetchMovies(title);
   
  }, [title, fetchMovies]);

  const handleClick = () => {
    setWatchlist([...watchlist, state.movieData])
  }

  const handleDelete = (indexToDelete: number) => {
    setWatchlist(watchlist.filter((movie, index) => index !== indexToDelete));
  }
      
  if (title !== "" && state.movieData?.Error !== "Movie not found!")
  {
    return (
      <div className="Info-panel">
        <div className="Watchlist">
          <h1>Watchlist</h1>
          <hr/>
          {watchlist.map((movie, index) =>
            <div className="Watchlist-item">
              <img alt="Poster" src={movie?.Poster}/>
              <div className="Watchlist-info">
                <p>{movie?.Title}</p>
                <p>{movie?.Year}</p>
              </div>
              <div className="Remove-button">
                <button className="Watchlist-remove" onClick={() => handleDelete(index)}><i className="fas fa-trash"/></button>
              </div>
            </div>
          )}
        </div>
        <div className="Movie">
          <div className="Left-side">
            <div className="Poster">
              <img alt="Poster" src={state.movieData?.Poster}/>
            </div>
            <br/>
            <div className="Add-button">
              <button className="Watchlist-add" onClick={handleClick}><i className="fas fa-plus"/>Add to watchlist</button>
            </div>
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