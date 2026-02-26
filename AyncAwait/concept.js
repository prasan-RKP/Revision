

// Why async await Exitst 

// async -> makes a function return a promise
// await -> makes a function wait for a promsie

// We use for reduce nesting and improve readability.


// --------- IMP Notes ---------

// The async keyword before a function makes a function to return a promise.




// ------- Comparison of  "Promise" VS "Async awit" -----



// ---- Via Promise ----

/*
const step1 = () => {
    return Promise.resolve("A");
}

const step2 = (value) => {
  return Promise.resolve(value + "B");
}

const step3 = (value) => {
    return Promise.resolve(value + "C");
}

step1()
     .then((val)=>{console.log(val)});
step2(2)
     .then((value)=> console.log(value));
step3(3)
     .then((value)=> console.log(value))  
     

*/



// ------ via  Async/Await ------

const step1 = () => {
    return Promise.resolve("A");
}

const step2 = (value) => {
  return Promise.resolve(value + "B");
}

const step3 = (value) => {
    return Promise.resolve(value + "C");
}


async function run () {
    let v1 = await step1();
    let v2 = await step2(4);
    let v3 = await step3(8);

    console.log(v1, v2, v3)
}

run();






