## 🚨 Example Code:

```javascript
const func = function (name) {
    this.name = name;
};

const user = func('Keshab'); // Called WITHOUT 'new'
```

---

## 🤔 So What Happens Here?

### ❗ You did NOT use `new`, so:

1. `func` is called like a **normal function**, not a constructor.
2. In **non-strict mode**, `this` inside `func` refers to the **global object** (in Node.js it's `global`; in the browser it's `window`).
3. So it assigns:

   ```javascript
   global.name = 'Keshab'; // or window.name = 'Keshab' in browser
   ```
4. The function does **not return anything**, so `user` is `undefined`.

---

### ✅ Output & Side Effects:

```javascript
console.log(user);     // undefined
console.log(global.name); // 'Keshab' in Node.js
```

In the browser:

```javascript
console.log(window.name); // 'Keshab'
```

---

## 🛑 In `strict mode`?

If you were using `"use strict";`, then:

* `this` inside `func` would be `undefined`
* Attempting to do `this.name = name` would throw a `TypeError` because you're trying to set a property on `undefined`

```js
"use strict";
const func = function(name) {
    this.name = name; // ❌ Cannot set property 'name' of undefined
};
func('Keshab');
```

---

## ✅ Correct Usage (with `new`):

```js
const user = new func('Keshab');
console.log(user.name); // Keshab
```

Now:

* `this` inside the function refers to the newly created object
* `user` is that object with `{ name: "Keshab" }`

---

### 🧠 Summary:

| Called With      | `this` refers to                  | `user` becomes | Side Effect                    |
| ---------------- | --------------------------------- | -------------- | ------------------------------ |
| `func('Keshab')` | global (or `undefined` in strict) | `undefined`    | Sets `global.name = 'Keshab'`  |
| `new func(...)`  | new empty object                  | the new object | Safe, expected constructor use |

---

Would you like this added to your document with a table like above? It’s a really important concept to master.
