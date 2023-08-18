/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each tim
*/
const makeSandwich=(...ingredients:string[])=>{
    if(ingredients.length==0){
        console.log('no items selected in make  a sandwich')
    }else{
        console.log('selected items')
        ingredients.forEach(items => {
         console.log(items)   
        });
    }


}
makeSandwich('bread','egg','salad')

