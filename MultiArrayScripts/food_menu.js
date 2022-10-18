let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Ham Sandwich", price: 4.54 },
        { item: "Chicken Sandwich", price: 5.43 },
        { item: "Turkey Sandwich", price: 4.32 },
        { item: "Veggie Sandwich", price: 3.21 }
    ],
    [
        { item: "Steak with fries", price: 10.32 },
        { item: "Wings with fries", price: 12.42 },
        { item: "Korean BBQ", price: 16.32 },
        { item: "Large Pizza", price: 13.52 },
        { item: "Chicken Fried Rice", price: 11.42 }
    ]
];



mealTitle = ["Breakfast Menu", "Lunch Menu", "Dinner Menu"];
let meal = 1;
function chooseMenu(mealIndex) {
    console.log(mealTitle[mealIndex]);
    console.log("---------------")
    //for (let i = 0; i < numOf; i++) {
        for (let i = 0; i < menu[mealIndex].length; i++) {
                console.log(menu[mealIndex][i].item)
        }
   // } 
}

chooseMenu(meal)
