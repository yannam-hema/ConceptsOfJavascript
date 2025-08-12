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


## example
**assume these are async operations that we need to perform**

### createOrder , proceedToPayment , showOrderSummary , updateWallet
```js

  function createOrder() {
  return new Promise(function (resolve, reject) {
    const orderId = 23;

    if (orderId > 20) {
      resolve(orderId); 
    } else {
      reject("Error while fetching details of Order");
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve) {
    console.log("Proceeding to payment for order:", orderId);
    const amountToBePaid = 500; 
    resolve(amountToBePaid);
  });
}

function showOrderSummary(amountToBePaid) {
  return new Promise(function (resolve) {
    console.log("Amount to be paid:", amountToBePaid);
    resolve(amountToBePaid);
  });
}

function updateWallet(amount) {
  return new Promise(function (resolve) {
    console.log("Deducted:", amount);
    resolve();
  });
}

// Chain
createOrder()
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (amountToBePaid) {
    return showOrderSummary(amountToBePaid);
  })
  .then(function (amount) {
    return updateWallet(amount);
  })
  .catch(function (err) {
    console.log(err);
  });


```