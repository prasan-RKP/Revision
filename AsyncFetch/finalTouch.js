// --------- Fetch with Async and Await --------

// async await make the fetch code easier to read.

// Example - Basic beginners level of program

async function loadData() {
  let response = await fetch("https://dummyjson.com/users/4");

  let data = await response.json();
  console.log(data);
}

loadData();

// ---- Important: HTTP Errors  + Network Errors -----
// 1) A 404 response is not a rejected promise.
//2) You must check response.ok.

async function loadData() {
  try {
    let response = await fetch("https://dummyjson.com/users/4");

    if (!response.ok) {
      console.log("HTTP Erros:", response.status);
      return;
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Network Error");
  }
}

loadData();
