//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
 let personName1="ali"
 let capitalname=personName1.toUpperCase()
 console.log(capitalname);
 console.log(capitalname.toLowerCase())

let titlecase1=personName1.slice(0,1)
let titlecase2=personName1.slice(1)
console.log(titlecase1.toUpperCase()+titlecase2)