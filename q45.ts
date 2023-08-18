/*
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments.

  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.

*/


const car=(manufacturer:string,model:string,...optional:any[])=>{
    const [value]=optional;
    let carinfo={
        manufacturer:manufacturer,
        model:model,
        propeties:value,
    }

    return carinfo;

}


let car1=car('Honda','Nissan',[{color:"black",year:'2010'}]);
console.log(car1);