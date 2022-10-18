let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Snickers", price: 2.79 },
    { product: "Whoppers", price: 1.50 },
    { product: "Nerds", price: 1.19 },
    { product: "Kisses", price: 1.00 },
    { product: "Kit-Kat", price: 2.39 },
    { product: "Gummy Bears", price: 5.79 }
]

//candies that cost less than 4.00;
let someCandies = products.filter(p => p.price < 4.00)

for (let i = 0; i < someCandies.length; i++) {
    console.log(someCandies[i].product)
} 

// candies that have "M&M" in their name.
let nameWith = products.filter(name => name.product.indexOf("M&Ms") != -1); // filter gives arrays.
for (let i = 0; i < nameWith.length; i++) {
    console.log("Names that have the name M&Ms " + nameWith[i].product)
}

//do we carry swedish fish:

let findProduct = products.find((array) => array.product == "Swedish Fish");
if (findProduct != undefined) {
    console.log("Yes we do carry " + findProduct.product)
}