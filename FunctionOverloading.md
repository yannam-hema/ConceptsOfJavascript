

### 📄 `function-overloading.md`

````markdown
# 🔁 Function Overloading in JavaScript

### ❓ What is Function Overloading?

Function overloading allows multiple functions with the same name but different parameter lists. It is common in languages like Java and C++.

Example in Java:
```java
int add(int a, int b) { return a + b; }
int add(int a, int b, int c) { return a + b + c; }
````

### ❌ But in JavaScript...

JavaScript does **not support native function overloading**. If you define two functions with the same name, the **last one overrides the previous ones**.

```js
function greet(name) {
    return "Hello " + name;
}

function greet(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}

console.log(greet("Hema"));  // Output: Hello Hema, you are undefined years old
```

Only the second function survives.

---

## ✅ Workarounds to Simulate Overloading

### 1️⃣ Rest Operator (`...args`)

Best modern approach.

```js
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

sum(1, 2);        // 3
sum(1, 2, 3);     // 6
sum(1, 2, 3, 4);  // 10
```

> You can accept any number of arguments and handle them dynamically.

### 📌 Function: `sum(...args)`

```js
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
```

---

## 🧠 Step-by-Step Explanation:

### 🔹 `...args` – Rest Parameter

* The `...` is called the **rest operator** in this context.
* It gathers all arguments passed to the function into an **array** named `args`.

```js
sum(1, 2, 3, 4); 
// args = [1, 2, 3, 4]
```

So `...args` allows the function to accept any number of parameters (2, 3, 10, etc).

---

### 🔹 `args.reduce(...)`

The `reduce()` method is used to **reduce an array to a single value** by applying a function repeatedly.

```js
args.reduce((acc, val) => acc + val, 0);
```

Here:

* `acc` is the **accumulator** – it stores the ongoing result.
* `val` is the **current value** in the array as we iterate.
* `0` is the **initial value** of `acc`.

---

### 📊 Example Breakdown

```js
sum(1, 2, 3);
```

`args = [1, 2, 3]`

Internally this happens:

| Step | acc | val | acc + val |
| ---- | --- | --- | --------- |
| 1    | 0   | 1   | 1         |
| 2    | 1   | 2   | 3         |
| 3    | 3   | 3   | 6         |

Final output: `6`

---

### ✅ Final Output

So:

```js
sum(2, 4, 6, 8);  // Output: 20
sum();            // Output: 0 (empty array, returns initial value)
```

---

### 🧪 Useful Tip

You can log to visualize:

```js
function sum(...args) {
    console.log("args:", args);
    return args.reduce((acc, val) => acc + val, 0);
}
```

---



---

### 2️⃣ Check Number of Arguments

Useful for conditional behavior.

```js
function greet(name, age) {
    if (age === undefined) {
        return `Hello ${name}`;
    }
    return `Hello ${name}, age ${age}`;
}
```

---

### 3️⃣ Use `arguments` Object (Old Style)

```js
function info() {
    if (arguments.length === 1) {
        console.log("Only name:", arguments[0]);
    } else if (arguments.length === 2) {
        console.log("Name & Age:", arguments[0], arguments[1]);
    }
}
```

---

## 🔚 Summary

| Technique             | Use Case                    | Preferred |
| --------------------- | --------------------------- | --------- |
| Rest Operator (`...`) | Handle any number of params | ✅ Yes    |
| Param checking        | For 2–3 variants            | ☑️ Maybe  |

> JavaScript embraces flexibility over strict typing — so we mimic overloading rather than enforce it.

---

