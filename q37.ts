/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt1(size:string,message:string='i like typescript'){
    console.log(`shirt size ${size} message ${message}`)

}
make_shirt1('2xl')
make_shirt1('3xl')
make_shirt1('small','i like javascript')