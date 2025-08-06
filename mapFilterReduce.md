# Map ,Filter , reduce

## Map

### to double values 

```js

let arr=[6,7,8,9,2];

let doubleValues=arr.map((x)=>x=x*2);
console.log(doubleValues);

```

### To covert names into upper case

```js

const names=["hema","lahari","hari","ramani","ravi"];

const newNames=names.map((name)=>name.toUpperCase());
console.log("Names in uppercase: "+newNames);

```

## Filter 

### filter prime numbers from array
```js
 let primeNumbers=arr.filter((x)=>{
    if(x<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(x);i++){
        if(x%i===0){
            return false;
        }
    }
    return true;
 });

 console.log("Prime numbers are: "+primeNumbers);

```
## Reduce
### to find sum of elements in array

``js

 let sum=arr.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
 },0);
    console.log("Sum of elements in array is: "+sum);

```


### custom function to find cubes of a number

```js

function cube(num){
return num*num*num;
}

const output=function(arr,logic){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(logic(arr[i]));
    }
    return result;
}
console.log("Cubes of numbers in array: "+output([1,2,3,4,5],cube));


```js

### Chain filter, map, and reduce together
Task: Given [1, 2, 3, 4, 5, 6]

 First filter only even numbers → [2, 4, 6]

Then double each → [4, 8, 12]

 Then sum them using reduce → 24

```js

const numbers = [1, 2, 3, 4, 5, 6];

const output=numbers.filter((n)=>n%2===0).map((n)=>n*2).reduce((acc,curr)=>acc+curr,0);

console.log("Output: " + output); 

```