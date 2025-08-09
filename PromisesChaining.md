### promise chaining
```js
createOrder(cart){
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then (function(payment){
        return showOrderSummary(payment);
    })
    .then(function(payment){

    });
}
```

**we can write above program even more simple by using arrow functions**
```js
createOrder(cart)
.then((orderId)=>proceedToPayment(orderId))
.then((paymentInfo)=>showOrderSummary(payment))
.then((payment)=>updateWalletBalance(payment));
```