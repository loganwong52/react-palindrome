import React from 'react'
import { useState } from 'react';
import WordChecker from './components/wordChecker';
import './App.css';

function App() {
  // states
  const [word, setWord] = useState("")

  // event handler
  function handleInput(event) {
    // print the user input
    // console.log(event.target.value)
    setWord(event.target.value)
  }

  // render
  return (
    <div className="App">
      <h1>Palindrome App</h1>
      <hr />
      <WordChecker word={word} handleInput={handleInput} />
    </div>
  );
}

export default App;