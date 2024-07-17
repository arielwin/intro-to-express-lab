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
    
    if(req.params.number > 0){

        res.send((`${Math.floor(Math.random(req.params.number) * req.params.number)}`)

    )}else {
        res.send(`You must specify a number.`)
    }
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

app.get('/shoes', (req, res) => {
    const {'min-price': minPrice, 'max-price': maxPrice, type} = req.query
    let filteredShoes = shoes
    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price= minPrice)
    }
    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice))
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type)
    }

    res.json(filteredShoes)
})





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})