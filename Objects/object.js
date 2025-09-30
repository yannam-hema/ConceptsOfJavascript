// const sales = [
//   { product: 'Laptop', category: 'Electronics', amount: 1200 },
//   { product: 'Shirt', category: 'Apparel', amount: 50 },
//   { product: 'Keyboard', category: 'Electronics', amount: 75 },
//   { product: 'Jeans', category: 'Apparel', amount: 80 },
//   { product: 'Mouse', category: 'Electronics', amount: 25 },
// ];
// let Electronics=0;
// let Apparel=0;
// for(let sale of sales){
//   if(sale.category==='Electronics'){
//     Electronics+=sale.amount;
//   }
//   else{
//     Apparel+=sale.amount;
//   }
// }
// const result ={
//     "Electronics":Electronics,
//     "Apparel":Apparel
// }
// console.log(result);


// const cart=["apple","banana","orange"];
// const obj ={
//   apple:8,
//   banana:5,
//   orange:12,
//   mango:23
// }
// const dis={
//   apple:2,
//   orange:3
// }
// const a="appple" in obj;
// const merge={obj,dis};
// console.log(a)
// let tax=0.2;

// let total=0;
// for(let item in cart){
//   let price=obj[cart[item]];
//   console.log(price);
//   let disc=dis[cart[item]] ||0;
//   let finalPrice=(price-(price *(disc/100)))+(tax/100);
//   total+=finalPrice;
// }
// console.log(total);

// const arr=[1,34,543,213,56];
// function max(arr){
//   return Math.max(...arr);
// }
// console.log(max(arr));

// const obj ={
//   name:"hema"
// }
// obj.age=21;
// console.log(obj);

// console.log("hema".repeat(6))

// console.log(JSON.parse(JSON.stringify(obj)));

// const new_obj ={...obj,city:'bengaluru'};
// console.log(new_obj);


// let s="madam";
// const obj={};
// for(let i=0;i<s.length;i++){
//   if(obj[s[i]]){
//     obj[s[i]]+=1;
//   }
//   else{
//  obj[s[i]]=1;
//   }
// }
// console.log(obj);

// const obj1={name:"lahari",
//   age:17,
//   college:"sastra"
// }
// // const new_obj1={...obj1};
// // new_obj1.name="yannam lahari";

// const new_obj1=JSON.parse(JSON.stringify(obj1));
// new_obj1.name="yannam lahari";
// console.log(new_obj1);
// console.log(obj1);


class b{
  display(){
    console.log("yaaaaa!")
  }
}
class a extends b{
  constructor(name){
    super();
    this.name=name;
  }
  call(){
    console.log(this.name);
  }
}
const obj = new a("hema");
obj.call();
obj.display();