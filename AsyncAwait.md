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

