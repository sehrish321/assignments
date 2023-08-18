/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let Guestlist4=['ali','bilal','ayaan','rehan','ahmad','irfan']
    console.log(`i found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.`)
    console.log(`i have invite fot two guests dinner tonight`)
    for(let i=0;i<4;i++){
    console.log(`unfortunately ${Guestlist4.pop()} can not invite it to the dinner `)
        


    }

    for (let i=0;i<=Guestlist4.length;i++){
        console.log(`Do you join us for dinner tonight? ${Guestlist4.pop()}`)



    }
console.log(Guestlist4)