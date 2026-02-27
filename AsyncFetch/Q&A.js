// Q.1) Multi-User Data Aggregator(parallel requests)

/*
const fetchUserDetails = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      console.log("HTTP Erros:", response.status);
      return;
    }

    let users = await response.json();

    let detailArr = [];

       users.forEach((user, idx)=> {
        detailArr.push({name: user?.name, zipcode: user?.address?.zipcode})
       })
       console.log(detailArr);
  } catch (error) {
    console.log("Something went wrong");
  }
};

fetchUserDetails();
*/

// Q.2) Sequential vs Parallel Fetch Timing

/*

async function fetchSequential() {
  console.time("Sequential");
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();

  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const userPosts = await posts.json();

  let comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const userComments = await comments.json();

  console.timeEnd("Sequential");

  return { usersData, userPosts, userComments };
}

async function fetchParallel() {
  console.time("Parallel");

  const [users, posts, comments] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments"),
  ]);

  await Promise.all([
    users.json(),
    posts.json(),
    comments.json()
  ]);

  console.timeEnd("Parallel");
}

 fetchParallel();
 fetchSequential();

 // Answer is Parallel: 223.083984375 ms , Sequential: 1710.38720703125 ms


 */

// Q.3) Build a retry Mechamism

/*
async function fetchWithRetry(url, retries = 3) {
  
    for(let i=0; i<retries; i++) {
        try {
            const res = await fetch(url);
            if(!res.ok) throw new Error('HTTP Error');

            let data = await res.json();
            console.log(data);
           
        } catch (error) {
            console.log('1st attmept gone ')
             if(i === retries - 1){
                throw new Error("All attempt failed, thorwn away");
            }

            console.log("tries",i+1,"times");
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/usersdfg",3);

/*



