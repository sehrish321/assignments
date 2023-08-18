//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const makeGreat1=(magicians2:string[])=>{
    let newMagicians=[]
    for (let i=0; i<magicians2.length; i++){
        newMagicians.push(`The great ${magicians2[i]}`)
        
    }
    return newMagicians; 
    
}

const showMagicians2=(magician:string[])=>{
    magician.forEach((value)=>{
        console.log(value)
    
    })
}

let magicians2 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];


let newMagicians=makeGreat1(magicians2)

showMagicians2(newMagicians)