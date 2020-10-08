// const square = function (x) {
//     return x*x;
// };

// console.log(square(5));

// // const squareArrow = (x) => {
// //     return x*x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(7));

// const getFirstName = (fullName) => {
//     if(fullName){
//         return fullName.split(' ')[0];
//     }else{
//         return undefined;
//     }
// }

const getFirstName = (fullName) => fullName.split(' ')[0];


console.log(getFirstName("Manjunath Poojary"));