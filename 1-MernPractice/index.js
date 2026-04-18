//First Question

// console.log("1");
// setTimeout(() => console.log("2"),0);
// Promise.resolve().then(()=> console.log("5")); 
// console.log("6");
/**⚙️ Execution Flow (Very Important Concept)

JavaScript works on:

Call Stack
Microtask Queue (Promises)
Macrotask Queue (setTimeout) 
Promises (microtasks) always execute before setTimeout (macrotasks)
Even if setTimeout delay is 0*/

//2nd Question

// const abc = {
//     x : 1
// }

// const xyz = abc;
// xyz.x = 3;

// console.log(abc.x);

// Que 3. Infinite Curring

// function add(a) {
//     return function(b) {
//         if(b!== undefined) {
//             return add(a+b);
//         }else{
//             return a;
//         }
//     };
// }

// console.log(add(1)(2)(3)(4)());

//Que 4: Difference between Deep and Shallow copy

let obj1 = {
    a: 1,
    b: {
        c: 2,
    }
}

// Shallow copy
let obj2 = {...obj1};
console.log(obj1);
// console.log(obj2);
// obj2.b.c = 4;
// console.log(obj1);
// console.log(obj2);

//Deep Copy

let obj3 = JSON.parse(JSON.stringify(obj1));

console.log(obj3);
obj3.b.c = 5;
console.log(obj1);
console.log(obj3);
