const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
// Exercise 1 
app.get('/greetings/:name', (req,res) => {
    const name = req.query.name;
    res.send(`Hello there, ${req.params.name}`);
});
// Exercise 2
app.get('/roll/:rollnumber', (req, res) => {
    const maxNumber = parseInt(req.params.rollnumber);

    if (isNaN(maxNumber)) {
        return res.send("You must specify a number.");
    }

    const rolledNumber = Math.floor(Math.random() * (maxNumber + 1));

    res.send(`You rolled a ${rolledNumber}!`);
});
// Exercise 3
app.get('/collectibles/:item', (req, res) => {
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const item = collectibles[req.params.item];

  res.send(`So, you want the ${item.name}, For ${item.price}, it can be yours!`);
});

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let results = shoes;

  const minPrice = req.query['min-price'];
  const maxPrice = req.query['max-price'];
  const type = req.query.type;

  if (minPrice) {
    results = results.filter(shoe => shoe.price >= parseFloat(minPrice));
  }

  if (maxPrice) {
    results = results.filter(shoe => shoe.price <= parseFloat(maxPrice));
  }

  if (type) {
    results = results.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
  }

  res.json(results);
});

// I wasn't able to completely figure it out in the end to be honest, I kept getting errors or the URL isn't found (cannot GET). This is as far as I got
