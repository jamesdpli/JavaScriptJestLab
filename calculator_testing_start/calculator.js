const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b; 
};

const divide = function(a, b){
    return a / b; 
};

const modulus = function(a, b){
    return a % b;
};

const even = function(a){
    if(modulus(a, 2) == 0){
        return true;
    } 
    else return false;
};

const odd = function(a){
    // if(even(a) == true){
    //     return false; 
    // }
    // else return true;
    return even(a) ? false : true;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
