
/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
let nameList1=['bilal','admin','rehan','mahmad','arham']


let lengthOfArray=nameList1.length


for(let i=0; i<lengthOfArray; i++){
 nameList1.shift()


}

console.log('we need find to some users')