import React, { useState } from 'react';
import './App.css';
import SearchMovie from './components/SearchMovie'

function App() {

  document.title = "Movie Search";

  const [textInput, setTextInput] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value);
  }

  const handleClick = () => {
    if (textInput !==  "") {
      setMovieTitle(textInput);
      setTextInput("");
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      handleClick();
    }
  }

  return (
    <div className="App">
      <div className="Search">
        <input type="text" className="Search-box" onChange={handleTextInput} onKeyPress={handleKeyPress} value={textInput} placeholder="Enter a movie title..."/><button className="Search-button" onClick={handleClick}><i className="fas fa-search"></i>  Search</button>
      </div>
      <div className="Info">
        <SearchMovie title={movieTitle}/>
      </div>
    </div>
  );
}

export default App;
