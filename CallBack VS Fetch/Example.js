//  ----------Callback VS  Fetch ---------

// ----- Loading data.json Using a Callback -----

function loadFile(Callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      Callback(null, JSON.parse(xhr.responseText));
    } else {
      Callback("HTTP Error: ", xhr.status, null);
    }
  };

  xhr.onerror = () => {
    Callback("Network Error", null);
  };

  xhr.send();
}



loadFile((err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});



//------ Loading data.json Using fetch

async function loadFile3() {
    try {
        let response = await fetch('https://dummyjson.com/users/4');

        if(!response.ok){
            throw new Error("HTTP Error: " + response.status);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
