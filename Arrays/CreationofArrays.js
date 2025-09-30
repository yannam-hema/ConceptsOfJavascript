
const places=["giddalur","duttalur","vinjamur","pamur"];
const arr=new Array(1,2,3,4,5);
const differentTypes=Array.of("hema",21,"brahmanapalli","Yellow");
const surName=Array.from("yannam");
// console.log(surName);
// console.log(differentTypes);
// console.log(arr);
// const schools=[];
// schools.push("alpha");
// schools.push("ZPHS");
// schools[7]="viswabharathi";
// //here the schools array will update the array length to 8 and the empty indexes will be undefined
// for(let i=0;i<schools.length;i++){
// console.log(schools[i]);
// }
// console.log(schools[10]); // un defined
// console.log(schools.length); // length don't change until we have value assigned to that index
// console.log(Object.keys(schools)); // it will give the indexes which have values assigned to them
// console.log(Object.values(schools));

// // for Each loop
// places.forEach((item,index)=>{
//     console.log(item,index);
// })

// for(const item of schools){
//     console.log(item);
// }

arr.push(56);
console.log(arr);
arr.pop();
console.log(arr);
console.log(typeof(arr.toString()));
console.log(arr.concat(surName));
console.log(typeof(arr.join("-")));
console.log(arr.slice(0,3));
console.log(arr.slice(2));
arr.splice(1,4,999);
console.log(arr);