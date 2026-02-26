

// concept - 1

const myPromise = new Promise((res, rej)=> {
    let success = true;

    setTimeout(()=> {
        if(success){
            res("Data received");
        }
        else{
            rej("Something went wrong");
        }
    }, 2000);
})


// -------- classic way ---------
// myPromise 
//         .then((res)=> console.log(res))
//         .catch((err)=> console.log(err))
//         .finally(()=> console.log("Process finished"));



// -------- modern way -------
async function handlePromise() {
    try {
        const res = await myPromise;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("Task completed");
    }
}

handlePromise();

