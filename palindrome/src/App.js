import React from 'react'
import { useState } from 'react';
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

  function isPalindrome(word) {
    word = word.toLowerCase();
    word = word.replace(/[^0-9a-zA-Z]+/g, "")
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord
  }

  return (
    <div className="App">
      <h1>Palindrome App</h1>
      <hr />
      <input id="input-box" type="text" placeholder='Enter word' onChange={handleInput} />
      <br />
      <br />
      <p id="inform-user">
        {word}
        {isPalindrome(word)
          ? ' is '
          : ' is not '
        }
        a palindrome
      </p>
    </div>
  );
}

export default App;
