//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// Example code of reduce

const myNum = [ 20,30,40,50,60,70,80,90];

const myreduce = myNum.reduce((accumulator,currentvalue) =>{
    //console.log(`value of accumulator: ${accumulator} and Value of currentvalue ${currentvalue}`);
     return accumulator + currentvalue;
} ,0)

//console.log(myreduce)

// Applying reduce methos on an object.
const shopping = [
    {
        itemName :"panjabi",
        price : 999
    },
    {
        itemName :"Shirt",
        price : 1999
    },
    {
        itemName :"T-shirt",
        price : 499
    }
] 

const totalPrice = shopping.reduce((acc,item) =>{
    return  acc + item.price; // Herre we this line will output all the sum of the shopping items.
},0)

console.log(totalPrice);

