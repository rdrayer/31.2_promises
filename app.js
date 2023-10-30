
// Exercise 1:
// let favNum = 21;
// let baseURL = "http://numbersapi.com";

// let number = axios.get(`${baseURL}/${favNum}?json`);

// // Part 1
// // 1.
// number
//     .then(data => console.log(data.data.text))
//     .catch(err => console.log(err));

// // 2.
// let favNums = [32, 49, 20]
// axios
//     .get(`${baseURL}/${favNums}?json`)
//     .then(data => console.log(data.data))
//     .catch(err => console.log(err));

// // 3.
// let fourPromises = [];
// for (let i = 1; i < 5; i++) {
//     fourPromises.push(axios.get(`${baseURL}/${favNum}?json`)
//     );
// }

// Promise.all(fourPromises)
//     .then(each => (
//         each.forEach(n => console.log(n.data.text))
//     ))
//     .catch(err => console.log(err));

// // Part 2
// // 1. request a single card and console.log value and suit
// // get deck
// let deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// let newDeck = axios.get(deckURL);
// newDeck
//     .then(data => console.log(data.data))
//     .catch(err => console.log(err));

// let deck_id = "degjyfk3jx0x";

// let drawCardURL = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
// let card = axios.get(drawCardURL);
// card
//     .then(data => console.log(data.data.cards[0].value, data.data.cards[0].suit, data.data.remaining))
//     .catch(err => console.log(err));

// // 2. draw a card from a newly shuffled deck, then draw another from the same deck
// let deck_id2 = "4ozleghs13mv"
// let drawCardURL2 = `https://deckofcardsapi.com/api/deck/${deck_id2}/draw/?count=1`
// let two_cards = axios.get(drawCardURL2);
// two_cards
//     .then(first => {
//         console.log(first.data.cards[0].value, first.data.cards[0].suit)
//         console.log(first.data.remaining)
//         return axios.get(drawCardURL2);
//     })
//     .then(second => {
//         console.log(second.data.cards[0].value, second.data.cards[0].suit)
//         console.log(second.data.remaining)
//     })
//     .catch(err => console.log(err));



// Exercise 2:
// Part 1:
// 1. 
async function favNumFact(num) {
    try {
        let baseURL = `http://numbersapi.com/${num}?json`;
        let response = await $.getJSON(baseURL);
        console.log(response.text);
    }
    catch (e) {
        console.log('error')
    }
}
// 2.
async function multNums() {
    try {
        let baseURL = "http://numbersapi.com";
        let reqAll = await Promise.all(
            [
                $.getJSON(`${baseURL}/1?json`),
                $.getJSON(`${baseURL}/2?json`),
                $.getJSON(`${baseURL}/3?json`)
            ]
        );
        console.log(`Fact 1: ${reqAll[0].text}`);
        console.log(`Fact 2: ${reqAll[1].text}`);
        console.log(`Fact 3: ${reqAll[2].text}`);
    }
    catch (e) {
        console.log('error')
    }
}

// Part 2:
// 1. 
