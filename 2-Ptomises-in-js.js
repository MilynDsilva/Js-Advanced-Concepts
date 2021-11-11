//Promises in js

//similar to promises irl

// let cleanTheRoom = new Promise(function(resolve,reject){
//     //cleaning the room

//     let isClean = false;

//     if(isClean){
//         resolve('Clean');
//     }else {
//         reject('not Clean');
//     }
// });

// cleanTheRoom.then(function(resolve){
//     console.log('the room is '+ resolve);
// }).catch(function(reject){
//     console.log('the room is '+ reject);
   
// })

let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
     // resolve('Cleaned The Room');
      reject('Did not clean the room')
    });
  };
  
  let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + ' remove Garbage');
    });
  };
  
  let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve( message + ' won Icecream');
    });
  };
  
  cleanRoom().then(function(result){
      return removeGarbage(result);
  }).then(function(result){
      return winIcecream(result);
  }).then(function(result){
      console.log('finished ' + result);
  }).catch(function(result){
      console.log('done '+result);
      //return cleanRoom(result);
  })