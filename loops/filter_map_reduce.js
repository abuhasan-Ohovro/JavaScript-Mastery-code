// Topic name : Filter map and Reduce 
//Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function. 

// Here is an example of fiter on an array 

const arr = [1,3,4,5,6,7,8,6,5,0];
const value = arr.filter((val)=>{
    return val >= 4;
})
//console.log(value);

// Accessing an element form an object inside an array using filter method 

const findnum =[
    {
        score : 34,
        age : 21
    },
    {
        score : 46,
        age : 22,
    },
    { 
        score : 85,
        age : 20
    }
];

const agefind = findnum.filter((num)=>{
    return num.age > 21 ; // Output : [ { score: 46, age: 22 } ]
});

console.log(agefind);