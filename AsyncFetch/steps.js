
// ------- Fetch returns a Promise-------

//Example --  The result is a Response object, not the JSON data.
// fetch('https://dummyjson.com/ip')
// .then((res)=> {
//     console.log(res);
// })


//  Example - Getting JSON data (response.json()) return a promise

fetch('https://dummyjson.com/ip')
.then((res)=> {
    return res.json();
})
.then((data)=> {
    console.log(data);
})

// The above is a promise chain.