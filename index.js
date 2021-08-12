function receivesAFunction(callBackFunction) {
    callBackFunction(); 
    return "Hello"; 
}
function returnsANamedFunction() {
    return function dolly() {
        console.log("hello"); 
    };
}
function returnsAnAnonymousFunction() {
    return function() {
    };
}