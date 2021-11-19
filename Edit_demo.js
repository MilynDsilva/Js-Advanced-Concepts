let cleanRoom = function(){
    return new Promise(function(resolve,reject){
    resolve('Room is cleaned');
    //reject('Room is not clean');
    });
};

let removeGarbage = function(message){
    return new Promise(function(resolve,reject){
    resolve(message+' Garbage has been removed ');
    });
};

let winIcecream = function(message){
    return new Promise(function(resolve,reject){
    resolve(message+' Won icecream');
    });
};
//race for some
//all for ;-; all



// Promise.race([cleanRoom(),removeGarbage(),winIcecream()]).then(function(){
//     console.log('All finished');
// })

// let cleanRoom = ()=>{
//     return new Promise(function(resolve,reject){
//     resolve('Room is cleaned');
//     //reject('Room is not clean');
//     });
// };

// let removeGarbage = message =>{
//     return new Promise(function(resolve,reject){
//     resolve(message+' Garbage has been removed ');
//     });
// };

// let winIcecream = message =>{
//     return new Promise(function(resolve,reject){
//     resolve(message+' Won icecream');
//     });
// };


// cleanRoom().then(function(message){
//     return removeGarbage(message);
// }).then(function(message){
//     return winIcecream(message);
// }).then(function(message){
//     console.log('Finished ,Now the '+message);
// }).catch(function(message){
//     console.log('Hey , the  '+message);
// });

// cleanRoom().then(function(resolve){
//     console.log(resolve);
// })

// cleanRoom().then(function(resolvereason){
//     console.log(resolvereason);
// })























// let somePromise = new Promise(function(resolve,reject){
//     isClean = null;
//     if(isClean){
//         resolve('yep');
//     }else{
//         reject('Nope');
//     }
// });

// somePromise.then(function(resolve1){
//     console.log("room is clean?"+resolve1);
// }).catch(function(reject1){
//     console.log('Room is clean??'+reject1);
// })