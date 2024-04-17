// Here we will learn about the prototypal behaviour of the JavaScript.

function multipie (num){
    return num*5
}

multipie.power =3;
console.log(multipie(5));
console.log(multipie.power);  // Now we can say that in JavaScript every thing is an object. We can also make a function behave like an object. 

//** Array ------>  object -------> null */
//** String ------>  object -------> null */
//** Function ------>  object -------> null */


console.log(multipie.prototype);