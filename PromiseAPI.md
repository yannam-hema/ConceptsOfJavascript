# Promise APIs (Important for Interviews)  
---

## `Promise.all([p1, p2, p3])`

- Example:
  - `p1` might take 3 seconds to settle  
  - `p2` might take 1 second to settle  
  - `p3` might take 2 seconds to settle  

- Behavior:
  - `Promise.all` gives output as an array with resolved messages **if all promises are resolved**.
  - If **any one promise is rejected**, it stops execution and throws an error.
  - If `p2` has rejected, then it shows error **after 1 second** (does not wait for all).
  - It won’t wait until every promise settles if one fails.

---

## `Promise.allSettled([p1, p2, p3])`

- It will wait for **all promises to settle** (whether resolved or rejected).
- It gives an **object of promise results**.
- This is the **safest option** among all of them.  

---

## `Promise.race([p1, p2, p3])`

- Returns the **fastest settled promise** (either resolved or rejected).

---

## Terminology of Promises

- **Settled** → got the result  
- **Resolve (fulfilled)** → success  
- **Reject (failed)** → error  

---

## `Promise.any([p1, p2, p3])`

- Returns the **first fulfilled promise**.  
- It ignores rejected promises.  
- If **all promises fail/reject**, then it gives an **aggregate error** → *All promises were rejected*.

---

### Extra Note
 Watch Akshay's video on YouTube for deeper explanation.
