//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians1 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

const makeGreat = (magician: string[]) => {
    for (let i = 0; i < magician.length; i++) {
        magicians1[i] = `The great ${magician[i]}`;

    }

}

const showMagicians1=(magician:string[])=>{
magician.forEach((value)=>{
    console.log(value)

})



}
makeGreat(magicians1)
showMagicians1(magicians1)