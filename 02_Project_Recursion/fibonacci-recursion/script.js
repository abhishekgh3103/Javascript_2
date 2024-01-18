// Printing Fibonacci Series using Recursion

let a = 0;
let b = 1;
let arr = [0 , 1];


function fibsRec(num) {
    if ( num <= 2) return;
    else{
        temp = b;
        b = a + b;
        a = temp;
        arr.push(b);
        fibsRec(num - 1);
    }
    return arr;
}