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
    return (
        <div>
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
    )
}

export default WordChecker;