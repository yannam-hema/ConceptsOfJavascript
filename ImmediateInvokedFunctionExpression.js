// IIFE also know as self executing anonymous function
// It means it runs as soon as it defined
(function (){
    console.log("IIFE - Immediately Invoked Function Expression");
})();

(function (name){
    return "hello"+name;
})("hema");

(()=>{
    return "hello Inn arrow Function";
})();

