// function counter(){
//     let count=1;
//     function modifycounter(){
//         count++;
//         return count;
//     }
//     return modifycounter;
// }

// const x=counter();
// console.log(x());
// console.log(x());
// console.log("let  seee");

// const y =counter();
// console.log(y());
// console.log(y());

// console.log("hello");

// console.log("hello2");

// console.log("hello3");

// console.log("hello4");

// console.log("hello5");

// console.log("hello6");



console.log(this);

function a(){
console.log(this);
}
a();
const b={
    function (){
        function x (){
        console.log(this);
        }
    }
}
b.function();