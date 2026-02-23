// callBack hell
/*
function getUser(id, callBack) {
  setTimeout(()=> {
      console.log("User Fetched");
      callBack({id: id, name: "Prasan"})
  }, 1000)
}

function getPosts(userId, callBack) {
  setTimeout(()=> {
      console.log("post fetched");
      callBack(["Post1", "Post2"])
  }, 1000)
}

function getComments(post, callBack){
  setTimeout(()=> {
    console.log("Comments fetched");
    callBack(["Nice", "Awesome"]);
  }, 1000)
}

// Now calling them using callBack hell
getUser(1, (user)=> {
  getPosts(user.id, (posts)=> {
    getComments(posts[0], (coments)=> {
      console.log(coments);
    })
  })
})

*/


// Using Promise Getting results
// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User Fetched");
//       resolve({ id: id, name: "Prasan" });
//     }, 1000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Posts fetched");
//       resolve(["Post1", "Post2"]);
//     }, 1000);
//   });
// }

// function getComments(post) {
//   return new Promise((resolve, reject) => {
//      return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Comments fetched");
//       resolve(["Nice", "Awesome"]);
//     }, 1000);
//   });
//   });
// }


// getUser(1)
// .then(user => getPosts(user.id))
// .then(posts => getComments(posts[0]))
// .then(comments => console.log(comments))
// .catch(err => console.log(err));



// Q.1) 
// function greet() {
//   return new Promise((res, rej)=> {
//      setTimeout(()=> {
//         console.log("Hello Priyansu");
//      },1000)
//   })
// }

// greet()
// .then(res => console.log(res))
// .catch(err => console.log(err))


//