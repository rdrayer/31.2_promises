
let favNum = 21;
let baseURL = "http://numbersapi.com";

let number = axios.get(`${baseURL}/${favNum}?json`);

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