// let san = 'sAn DIEGO';
// let fern = 'where the red fern grows';
// let chx = 'Chicken pot pie';
// /**
//  * convert a string to title case.
//  * 
//  * input: one string
//  * output: string
//  * 
//  * 1. split sentence into multiple words
//  * 2. isolate first letter of each word and capitalize
//  * 3. lowercase the rest
//  * 4. convert array back to string
//  */

// function headliner(words) {
//     let chunks = words.split(' '); //chunks is an array
//     for (let i = 0; i < chunks.length; i++) {
//         chunks[i] = chunks[i][0].toUpperCase() + chunks[i].slice(1).toLowerCase();
//     }
//     return chunks.join(' '); //combine the array back into a string
// }
// let hl = headliner('were live in new york city')
// console.log(hl);

/*--------------------------------------------------*/
function init() {

    let parent = document.querySelector('body');

    let header1 = document.createElement('h1');
    header1.textContent = 'Places I want to go';
    parent.appendChild(header1);

    let header2 = document.createElement('h2');
    header2.classList.add('author'); //how to add classes!
    header2.setAttribute('id', 'fancy'); //how to add IDs
    header2.textContent = 'By me';
    parent.appendChild(header2);

    let list = document.createElement('ul');
    parent.appendChild(list);

    // let mexico = document.createElement('li');
    // mexico.textContent = 'New Mexico';
    // list.appendChild(mexico);

    // let maine = document.createElement('li');
    // maine.textContent = 'Maine';
    // list.appendChild(maine);

    // let guat = document.createElement('li');
    // guat.textContent = 'Guatemala';
    // list.appendChild(guat);

    let places = ['New Mexico', 'Maine', 'Guatemala', 'Cuba'];
    for (let i = 0; i < places.length; i++) {
        let item = document.createElement('li');
        item.textContent = places[i]; //put places[i] as the text in this element
        list.appendChild(item);
    }

    let footer = document.createElement('footer');
    parent.appendChild(footer);

    let copyright = document.createElement('p');
    copyright.textContent = 'Copyright 2016';
    footer.appendChild(copyright);


}

window.addEventListener('load', init);