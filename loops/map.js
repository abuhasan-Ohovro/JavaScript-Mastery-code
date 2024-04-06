//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results. 
// Here os an example of  map method on a array 

const map_01 = [1,2,3,4,5,6,7,8,9,10];

const doublevalue = map_01.map((num)=>{
            return num + 10;
});

console.log(doublevalue);

// Now we will discuss about chaining using map and filter.When you apply multiple map and filter method on a particuler array or object thats called chaining. For example ;

const map_02 = [10,20,30,40,50,60,70,80,90,100];

const chainnig_Method = map_02 
                              .map((num)=>( num * 10))
                              .map((num)=>(num + 10))
                              .filter((num)=>(num >= 500));

console.log(chainnig_Method)


// This type of chaining method apply when user want s to filter some of the result on the web .