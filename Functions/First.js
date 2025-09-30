function a(name , b){
b("hello"+name);
}
a("hema",b=>console.log("callback function"+b));


const questionableArray = [0, false, '', null, undefined, 42];
const truthArray = questionableArray.filter(Boolean);
console.log(truthArray)