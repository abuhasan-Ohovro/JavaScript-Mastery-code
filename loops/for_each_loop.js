// Here we will discussed about (forEach) loops.
const coding_lang = ["js","cpp","py","ruby","rust","java","golang"];
// an example usecase of forEach loops in an array that simply out the value of an array.
coding_lang.forEach(function(val){
    console.log(val);
})
// Implementing the same code using arrow function.
const coding = ["js","cpp","py","ruby","rust","java","golang"];

coding.forEach((value) =>{
    console.log(value);
})

//we can also write a function outside and pass it to the forEach loop as a reference.

function printme(val){
      console.log(val);
}

coding.forEach(printme)// here you should only pass the function reference.

// By using forEach we can also access the value ,index and the whole array.

const codingLanguage =["JavaScript","Python","C++","GoLang","Rust","Swift"];

codingLanguage.forEach((index,value,array)=>{
    console.log(index,value,array);
})
/* OutPUt:
JavaScript 0 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
Python 1 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
C++ 2 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
GoLang 3 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
Rust 4 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
Swift 5 [ 'JavaScript', 'Python', 'C++', 'GoLang', 'Rust', 'Swift' ]
*/

// Now we will implemet forEach loops in a object. we wil see how we will access an element of an object inside an array.

const code =[
    {
        codingname :"JavaScript",
        filename :"js",
    },
    {
        codingname : "C++",
        filename : "cpp",
    },
    {
        codingname : "Python",
        filename : "py",
    }
];

code.forEach((item)=>{
    console.log(item.codingname)// this is how we can easily access an object element using forEach loops.
})
/* Output:
JavaScript
C++
Python
 */