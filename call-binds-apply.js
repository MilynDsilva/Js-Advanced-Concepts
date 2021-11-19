const obj = {
    num:2
};
var addToThis = function(a,b,c) {
    return this.num+a+b+c;  
};

console.log(addToThis.call(obj,3,3,2));
//for apply we need not pass args in an array and pass it

const obj3 = {
    num:2
};
var addToThis = function(a,b,c) {
    return this.num+a+b+c;  
};

array1= [2,3,6];
console.log(addToThis.apply(obj3,array1));
//


const obj1 = {
    num:2
};
var addToThis = function(...aa) {
    return sum = aa.reduce((a,b)=> a+b);  
};

console.log(addToThis.call(obj1,3,3,2));
console.log(sum);
