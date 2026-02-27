
// 1) Dynamic Modules always  use modern async/await:

 const run = async () => {
    let vals = await import('./Exports/variables.js');
    console.log(vals.bench);
    console.log(vals.myNum);
 }
 run();