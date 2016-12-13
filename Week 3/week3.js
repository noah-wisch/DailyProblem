let san = 'sAn DIEGO';
let fern = 'where the red fern grows';
let chx = 'Chicken pot pie';
/**
 * convert a string to title case.
 * 
 * input: one string
 * output: string
 * 
 * 1. split sentence into multiple words
 * 2. isolate first letter of each word and capitalize
 * 3. lowercase the rest
 * 4. convert array back to string
 */

function headliner(words) {
    let chunks = words.split(' '); //chunks is an array
    for (let i = 0; i < chunks.length; i++) {
        chunks[i] = chunks[i][0].toUpperCase() + chunks[i].slice(1).toLowerCase();
    }
    return chunks.join(' '); //combine the array back into a string
}
let hl = headliner('were live in new york city')
console.log(hl);