console.log("1");
setTimeout(() => console.log("2"),0);
Promise.resolve().then(()=> console.log("5")); 
console.log("6");
/**⚙️ Execution Flow (Very Important Concept)

JavaScript works on:

Call Stack
Microtask Queue (Promises)
Macrotask Queue (setTimeout) 
Promises (microtasks) always execute before setTimeout (macrotasks)
Even if setTimeout delay is 0*/