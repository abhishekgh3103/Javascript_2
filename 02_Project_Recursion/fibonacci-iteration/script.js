// Printing Fibonacci Series using Iteration

let a = 0;
let b = 1;
let arr = [0 , 1];
function fibs(num) {
    for (let i = 2; i < num; i++){
        temp = b;
        b = a + b;
        a = temp;
        arr.push(b);
    }
    return arr;
}