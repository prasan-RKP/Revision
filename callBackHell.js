
// ----------- CallBackHell ------
// A situation where functions passed argument to other functions 

// Each task has a callback that triggers the next task, thats creates the callback tobe nested 


function task1(callBack) {
  setTimeout(() => {
    console.log("Task One is Completed");
    callBack();
  },2000);
}

function task2 (callBack) {
    setTimeout(()=> {
        console.log("Task two is completed");
        callBack();
    },1000);
}



task1(function(){
    task2(function(){
        console.log("kndndkfn")
    })
})