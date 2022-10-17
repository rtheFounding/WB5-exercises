let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];


//a. Code that searches the courses array using map() function to return only the item name and then use forEach() to display the list of items
function buildItems(array) {
    return array.item;
}

function displayNames(arrayElement) {
    console.log(arrayElement)
}
let itemNamesArray = cart.map(buildItems);
itemNamesArray.sort()
itemNamesArray.forEach(displayNames);

//b. code that determines the total cost of everything in the cart using reduce(). In the reucer function, remember to account for the possiblity of there being more than 1 unit(ex: 5 apples rather than 1!)
function getTotalCost(currentTotal, arrayElement) {
    return currentTotal + (arrayElement.price * arrayElement.quantity)
}
let sum = cart.reduce(getTotalCost, 0);
console.log(sum)

//c. revisit (a.) and sort the list before displaying it.
// Yes i can by simply doing itemNamesArray.sort() before calling line 22.
