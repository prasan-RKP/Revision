
// Concept -1
/* 
// Promise.resolve("Hi")
//   .then((data) => {
//     console.log(data, "1st");
//   })
//   .then((data2) => {
//     console.log(data2);
//   });
  // Answer -> Hi 1st, undeifined
  */

 
 
 // Concept - 2

 /*
 Promise.resolve()
     .then(()=> {
        return Promise.resolve("second");
     })
     .then((data)=> {
        console.log(data);
     })

     // Second 

     */
    
 
// Concept - 3


//1) A,D,C,B
//2) 1,3,2
//3) Caught After catch


// 1) beacuse it is hard to read and execute in callbacks where in promise it is way better to on the basis of readability and maintain the code

// 2)Callback created a complex structure of code for that reason it is tough to read and maintain, promises eradicate the problem i guess here.

// 3) In promise chaing we can get out data if resolved/rejected, or if any error, important beacuse here we can filterout the actual answer.

// 4) in micortask queue console.log() statement goes here not that much idea

// 5)bcoz promise goes under microTask, and setTimeout goes under Macrotask 





