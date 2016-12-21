/**
 * 1. Inputs can be a string of letters or a word
 * 2. Output should be an integer corresponding to the number of times
 *    the letter(s) appear in the word
 * 3. Use .split to split the word into letters in an array
 * 4. Use a for loop to run the string of letters through the word's letters
 *          - for loop in a for loop
 * 5. Pull the count out
 */

function magic(word, letters) {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < letters.length; j++ ) {
            if (word[i] === letters[j]) {
                counter++;
            }
        }
    }
    return counter;
}
let fsh = magic('fishfood', ['f', 'h']);
console.log(fsh);

// Don't need to split in this case since strings and arrays have a lot
// of the same properties - you cannot push to a string and you'd need to 
// slice to remove something and concat something else...