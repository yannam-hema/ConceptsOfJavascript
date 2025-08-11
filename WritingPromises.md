## Creating our own Promise
```js
const pr= new promise(function(resolve,reject){

//resolve code

//reject code

})
```

**we used promise constructor to create promise**
**we passed a function inside a promise constructor , that functio has two arguments called "resolve", "reject"**
**With these arguments we have control of our promise either we want to resolve it or reject it**
**we can't resolve promise twice , it only executes once**
**we attach .then() , .catch() to our promise for resolve and reject respectively**
**Remember to return when we have promise chaining**