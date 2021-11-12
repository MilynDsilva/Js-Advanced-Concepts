function truthyOrFalsy(a) {
    return  a ? "truthy" : "falsy";
}

console.log(truthyOrFalsy(0));
truthyOrFalsy(0)
// "falsy"
// truthyOrFalsy(10 == 5)
// "falsy"
// truthyOrFalsy(1)
// "truthy"
// truthyOrFalsy(-1)
// "truthy"