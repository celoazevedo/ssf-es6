//assign fizzBuzz30 an arrow function that does not take any inputs.  
//fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', 
//numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

// function fizzBuzz30 (num){
//     var fizz = 'fizz';
//     var buzz = 'buzz';

//     for (num = 0; num <= 30; num++){
//         if (num % 3 === 0 && num % 5 === 0){
//             console.log(fizz + buzz);
//         } else if (num % 3 === 0) {
//             console.log(fizz);
//         } else if (num % 5 === 0) {
//             console.log(buzz);
//         } else {
//             console.log(num);
//         }
//     };
// };


let fizzBuzz30 = () => {
    let array = [];
    let fizz = 'fizz';
    let buzz = 'buzz';
    for (i = 0; i <= 30; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(fizz + buzz);
        } else if (i % 3 === 0) {
            console.log(fizz);
        } else if (i % 5 === 0) {
            console.log(buzz);
        } else {
            console.log(i);
        }
    }
    return array[i];
}









//Do not edit
module.exports = fizzBuzz30;