const express = require('express')

const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


const PORT = 3000


// Greet User
app.get('/greetings/:username', (req, res, next) => {
    res.send(`<h1> Hello ${req.params.username}! </h1>`)
})

// Roll Number
app.get('/roll/:number', (req, res, next) => {

})

// Collectibles
app.get('/collectibles/:index', (req, res, next) => {
    if(req.params.index in collectibles){
        res.send(`<h1> So you want the ${collectibles[req.params.index].name}? For $${collectibles[req.params.index].price}, it can be yours!`)
    }else{
        res.send(`<h1>That item isn't in stock. Check back soon!</h1>`)
    }
})

// Queries
app.get('/hello', (req, res) => {
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

app.get('/shoes', (req, res, next) => {

})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})