# Promises
**Promise is a object that represents eventual completion of async operation**
### Promise has three states 1.pending 2.fulfilled 3.Rejected .
### As soon as promise fullfilled/rejected ,it updates the empty object which is assigned undefined in pending state
### using.then() we can attach a callback function ,instead of passing them like call back function inside a function
### These things overcomes the problems of callback hell 
**now we can control of our program as we use .then() -->over coming inversion of control**
**JS guarentee that promise only resolves once :) and it is immutable in nature**

```js

const promise=fetch("./something");

promise.then(function(data){
    return "sucess";
});

```