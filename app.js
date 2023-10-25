
let favNum = 21;
let baseURL = "http://numbersapi.com";

let number = axios.get(`${baseURL}/${favNum}?json`);

// Part 1
// 1.
number
    .then(data => console.log(data.data.text))
    .catch(err => console.log(err));

// 2.
let favNums = [32, 49, 20]
axios
    .get(`${baseURL}/${favNums}?json`)
    .then(data => console.log(data.data))
    .catch(err => console.log(err));

// 3.
let fourPromises = [];
for (let i = 1; i < 5; i++) {
    fourPromises.push(axios.get(`${baseURL}/${favNum}?json`)
    );
}

Promise.all(fourPromises)
    .then(each => (
        each.forEach(n => console.log(n.data.text))
    ))
    .catch(err => console.log(err));

// Part 2
// 1. request a single card and console.log value and suit
// get deck
let deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let newDeck = axios.get(deckURL);
newDeck
    .then(data => console.log(data))
    .catch(err => console.log(err));

let deck_id = "degjyfk3jx0x";

let drawCardURL = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
let card = axios.get(drawCardURL);
card
    .then(data => console.log(data.data.cards[0].value, data.data.cards[0].suit))
    .catch(err => console.log(err));