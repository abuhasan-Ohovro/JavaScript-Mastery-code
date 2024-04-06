// here we wil know about (for...of) loops.(for...of) loops is a one of the variation of for loops. Its used for itearate over an array , string or object.
// We can also say that :The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
// here is an example of implementaion of (for...of) on a string.
const str = "hello world!";
for (const chr of str) {
  //console.log(`each cahracter of this sentence is ${chr}`);
}
/*Expected output:
each cahracter of this sentence is h
each cahracter of this sentence is e
each cahracter of this sentence is l
each cahracter of this sentence is l
each cahracter of this sentence is o
each cahracter of this sentence is
each cahracter of this sentence is w
each cahracter of this sentence is o
each cahracter of this sentence is r
each cahracter of this sentence is l
each cahracter of this sentence is d
each cahracter of this sentence is !  */
/*
// Hrer is the an example of (for...of) on a arrry.
const myarr = [2,5,7,8,0,7,5,3,6,8,90,9];
const index = 0;
for (const index of myarr) {
    console.log(`Each value of my array is ${index}`);
}
/**OUTPUT:Each value of my array is 2
Each value of my array is 5
Each value of my array is 7
Each value of my array is 8
Each value of my array is 0
Each value of my array is 7
Each value of my array is 5
Each value of my array is 3
Each value of my array is 6
Each value of my array is 8
Each value of my array is 90
Each value of my array is 9 */

/*
// A simple disscusion on map 

const map =  new Map();
map.set('BN',"Bangladesh");
map.set('UAE',"United Arab Emirates");
map.set('PLS',"Palestine");
map.set('IN',"India");

console.log(map);

/* Output:
Map(4) {
  'BN' => 'Bangladesh',
  'UAE' => 'United Arab Emirates',
  'PLS' => 'Palestine',
  'IN' => 'India'
  */
/*
// Note : if you want apply (for... of) loops on the map and you want to output be like key value pair you should to the following.
 const newmap = new Map();
newmap.set('1','hasan')
newmap.set('2','korim')
newmap.set('3','rohim')
newmap.set('4','salam')

for (const [key,value] of newmap) {
    console.log(`This is key -> ${key}  & this is value -> ${value}`)
    
}
// OUTPUT: 
/*
This is key -> 1  & this is value -> hasan
This is key -> 2  & this is value -> korim
This is key -> 3  & this is value -> rohim
This is key -> 4  & this is value -> salam
*/
//Now will apply (for...of) loop on a object
const myobject = {
  car1: "Porsche",
  car2: "Audi",
  car3: "BMW",
  car4: "Marcedes Benz",
};
// LOL : ( for... of) loop is not usable for object :)
// So, if (for..of ) can't work on object so how do we will work on object! here comes another loop which is very useful in the case of object ab=nd that is (for .. in) loop.
// Here is an example of (for.. in) loop ona object .

const myobject_02 = {
  car1: "Porsche",
  car2: "Audi",
  car3: "BMW",
  car4: "Marcedes Benz",
};

for (const key in myobject_02) {
  //console.log(key); // By using this it will only return the key of that particular object.
 // console.log(myobject_02[key]); // By using this it wil return the value of that particular vlaue of an object.
  // Atlast , we come to the conclusion that if we want to print the key value pair of an object first of all we have to use (for...in) loop and then we have to write this following syntax:
  //console.log(`key is ->${key} & Value is ->${myobject_02[key]}`);
}
// If we apply (for...in) loops in an array and we want the key of that particuler arrray it will return the index number of the array as  key.
// Example code :

const fav_lan = ["js", "py", "c++", "java", "kotlin", "golang"];

for (const key in fav_lan) {
  console.log(key); // Output : 0 1 2 3 4 5
}
for (const key in fav_lan) {
    console.log(`value of the array is ${fav_lan[key]}`)/* OUTPUT : 
     value of the array is js
    value of the array is py
    value of the array is c++
    value of the array is java
    value of the array is kotlin
    value of the array is golang*/
}
