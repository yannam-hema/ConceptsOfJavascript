# Async Await
-Async Function will always return a promise
-if Function doesn't return promise  async function wrap the return value in to promise and then return it

**Syntax - return nonPromiseValue**
```
async function getData(){
    return "Hema";
}
const data=getData().then((res)=>{
    console.log("Async Await")
})
```
**Return a promise**
```
const p= new Promise((resolve,reject)=>{
    resolve("Promise");

    async function getData(){
        return p;
    }
    const data=getData().then((res)=>{
    console.log("Async Await")
})
})
```
## The question is  IF Async Await helps to handle to promises then what is difference between normal promise.then() method and this and why almost developers use this??

- In case of promise java script engine don't wait for promise to resolve it executes remaining things simultaneously whenever promise resolves it returns 
-In case of async await at the line where we write **await** java script code wait until it resolve and then continues





