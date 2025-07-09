## 📘 JavaScript: Understanding `.call()` and Execution Context with `this`

---

### Problem:

```javascript

function setUserName(username){
    // Check in DB is same username exists
    this.username = username;
    console.log(`I am setUserName function and I have set username = ${this,username}`);
    // 
}

function CreateUser(username, email, passcode){
    setUserName(username);
    this.email = email;
    this.passcode = passcode;
}

const user1 = new CreateUser('Keshab', 'keshab@example.com', 123);

console.log(user1);     // CreateUser { email: 'keshab@example.com', passcode: 123 }
```

---

### 🔍 Solution: 


```javascript
function setUserName(username){
    // Check in DB is same username exists
    this.username = username;
}

function CreateUser(username, email, passcode){
    setUserName.call(this, username);
    this.email = email;
    this.passcode = passcode;
}

const user1 = new CreateUser('Keshab', 'keshab@example.com', 123);

console.log(user1);   

/*
CreateUser {
  username: 'Keshab',
  email: 'keshab@example.com',
  passcode: 123
}

*/
```

---

## 🔁 Execution Flow: Call Stack & `this`

### 1. **Function Call: `new CreateUser(...)`**

* When `CreateUser('Keshab', ...)` is invoked using `new`, JavaScript creates a new object.
* A special execution context is created for `CreateUser` and pushed onto the **call stack**.
* Inside this function, `this` refers to the new object being created (`user1`).

```js
this = {
  // object under construction
}
```

---

### 2. **Calling `setUserName.call(this, username)`**

* Within `CreateUser`, we call `setUserName` using `.call()`, explicitly setting its `this` to the same `this` from `CreateUser` (i.e., the new object).
* This creates a new execution context for `setUserName`, which is added **on top of the stack**.
* Now the stack looks like:

```
CALL STACK (Top → Bottom):
→ setUserName Execution Context
→ CreateUser Execution Context
```

---

### 3. **Inside `setUserName`**

```javascript
function setUserName(username){
    this.username = username;
}
```

* Here, `this` refers to the object passed by `.call()` — **which is the same object being constructed in `CreateUser`**.
* So, `this.username = username` sets the `username` property on that object (`user1.username = 'Keshab'`).

---

### 4. **Returning from `setUserName`**

* Once `setUserName` completes execution:

  * Its execution context is **popped off** the call stack.
  * But the changes made to `this` (the new object) **persist**, since `this` was a reference to the outer `CreateUser`'s object.

---

### 5. **Remaining Code in `CreateUser`**

* After `setUserName` finishes, the remaining properties are assigned:

```javascript
this.email = email;
this.passcode = passcode;
```

* These, too, are set on the same `this` object.

* Finally, `CreateUser` returns the new object:

```javascript
{
  username: 'Keshab',
  email: 'keshab@example.com',
  passcode: 123
}
```

---

## 🧠 Key Concepts Recap

### 🔹 `this` in JavaScript

* The value of `this` depends on **how** a function is called.
* When using `.call(this, ...)`, you're telling JavaScript **explicitly** what `this` should be inside the called function.

### 🔹 `.call()` Usage

* `.call(context, arg1, arg2, ...)` temporarily **borrows a function** and runs it with a specific `this`.
* Perfect for constructor chaining or internal method reuse.

### 🔹 Execution Context and Call Stack

* Every function call creates an **execution context** (a new stack frame).
* Stack is **LIFO** (Last-In-First-Out).
* Once a function finishes execution, its context is removed from the stack.
* But if it modifies an object (like via `this.username = ...`), those changes persist **outside the function** if `this` was passed in from outside.

---

## ✅ Final Output

```js
CreateUser {
  username: 'Keshab',
  email: 'keshab@example.com',
  passcode: 123
}
```

The `username` property was **set from `setUserName()`**, but remains on the `user1` object because `this` inside `setUserName` was pointing to the object being created in `CreateUser`.

---

## 📄 Conclusion

* Using `.call(this, ...)` allows you to write reusable functions that operate on any object.
* Even though `setUserName()` finishes and is removed from the stack, any changes made to `this` (if passed correctly) will persist.
* This pattern is powerful when working with constructor functions or when you want to share methods across different contexts.

---


