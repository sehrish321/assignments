/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function describe_city1(city:string,country:string){
 return(`city ${city} country ${country}`)

}

let value1=describe_city1('karachi','pakistan')
console.log(value1)
let value2=describe_city1('cape town','southafrica')
console.log(value2)
let value3=describe_city1('lahore','pakistan')
console.log(value3)