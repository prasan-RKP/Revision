
//------ Synchronous vs Asynchronous -----

// console.log("Start");
// setTimeout(()=> {
//     console.log("Hello");
// }, 2000);
// console.log("End");

// API -> api is like a system where we can send request to get results.


// ----- Call back ----

function sayTotal(a, b){
    console.log(a+b)
}

function calc(a,b,sumCall) {
   sumCall(a,b);
}

calc(1,2,sayTotal);

