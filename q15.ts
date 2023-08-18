//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestList2=['bilal','rehan','ahmad']
console.log(`Unfortunately ${GuestList2[1]} can not make it to dinner`)
GuestList2.splice(1,1,'arham')
for(let i=0;i<GuestList2.length;i++){
    console.log(`DO you join us for dinner tonight? ${GuestList2[i]}`)



}
