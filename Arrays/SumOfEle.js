const arr=[67,23,789,56,789,123,73];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Sum of all elements in the array is: "+sum);

//using reducer and accumulator
const sumAcc=arr.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sumAcc);

// const small=arr.reduce((accu,curr)=>{
//     return (curr<accu)?curr:accu;
// })
// console.log(small);