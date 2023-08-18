/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/


let favFruits=['orange','banana','grapes','mango']

let fruit='banana'

if(fruit=='mango' && favFruits.includes(fruit)){
    console.log('i like mango')
}else if(fruit=='grapes' && favFruits.includes(fruit)){
    console.log('i like grapes')
}else if(fruit=='banana' && favFruits.includes(fruit)){
    console.log('i dont like banana')
}else{
    console.log('i dont like orange')
}
// let fruitList=['apple','banana','grapes','orange']

// let fruit='mango'
// let bool2= fruit=='mango'
// console.log(bool2)

// let bool1=fruitList.includes(fruit)
// console.log(bool1)

// console.log(bool1&&bool2)