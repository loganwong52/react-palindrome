import React from 'react'

function WordChecker(props) {

    const { word, handleInput } = props; // destructuring

    // helper
    function isPalindrome(word) {
        word = word.toLowerCase();
        word = word.replace(/[^0-9a-zA-Z]+/g, "")
        let reversedWord = word.split("").reverse().join("");
        return word === reversedWord
    }

    // render
    // onChange continusouly checks userInput, sending it into handleInput to update state
    // and then it checks if it's a palindrome
    // Ternarary if-statement used to determine [is/is not]
    return (
        <div>
            <input id="input-box" type="text" placeholder='Enter word' onChange={handleInput} />
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
    )
}

export default WordChecker;