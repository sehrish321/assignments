/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


*/
let GuestList3=['bilal','rehan','ahmad']
    console.log(`i found a bigger dinner table, so now more space is available`)
    GuestList3.unshift('ali')
    GuestList3.splice(2,0,'ayaan')
    GuestList3.push('irfan')
for (let i=0;i<GuestList3.length;i++){
    console.log(`Do you join us for dinner tonight? ${GuestList3[i]}`)



}