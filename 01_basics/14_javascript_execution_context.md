# 🧠 JavaScript Execution Context - Full Explanation

## 📘 What is an Execution Context?

The **Execution Context** is the environment in which JavaScript code runs. It keeps track of:

- Variables
- Functions
- Scope chain
- The value of `this`

Every time JavaScript code is run, a new **Execution Context (EC)** is created.

---

## 🛠 Types of Execution Contexts

### 1. 🌍 Global Execution Context (GEC)

- Created when the script starts running.
- There is only one GEC per program.
- Stores all global variables and functions.
- The value of this in the Global Execution Context differs depending on the environment:

  - In the Browser: this refers to the window object.

  - In Node.js (or other standalone engines): this refers to an empty object {} or the global object (in older Node versions).

### 2. 🧩 Function Execution Context (FEC)

- Created every time a function is invoked.
- Has its own scope, variables, and `this` binding.
- Multiple FECs can exist simultaneously on the call stack.

### 3. 📆 Eval Execution Context (Eval EC)

- Created when code is run inside the `eval()` function.
- Not commonly used. Can introduce security and performance issues.

---

## 🔁 Lifecycle of Execution Context

### 1. 💾 Memory Creation Phase

- JavaScript scans the code before execution.
- Allocates memory for:
  - Variables (initialized with `undefined`)
  - Function declarations (stored fully)

### 2. ⚙️ Execution Phase

- Assigns values to variables.
- Executes function calls and expressions.

---

## 🧪 Example Code Simulation

```js
let var1 = 10;
let var2 = 5;

function add(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = add(var1, var2);
let result2 = add(20, 25);
```

---

## 🧮 Simulation: Step-by-Step

### 🌍 Global Execution Context (GEC)

#### 1. Memory Creation Phase

| Identifier | Value           |
| ---------- | --------------- |
| `var1`     | `undefined`     |
| `var2`     | `undefined`     |
| `add`      | function object |
| `result1`  | `undefined`     |
| `result2`  | `undefined`     |

#### 2. Execution Phase

| Code                        | Effect                |
| --------------------------- | --------------------- |
| `var1 = 10`                 | `var1` is assigned 10 |
| `var2 = 5`                  | `var2` is assigned 5  |
| `result1 = add(var1, var2)` | Calls `add(10, 5)`    |
| `result2 = add(20, 25)`     | Calls `add(20, 25)`   |

---

### 🧩 Function Execution Context: `add(10, 5)`

#### Memory Creation Phase

| Identifier | Value       |
| ---------- | ----------- |
| `num1`     | `undefined` |
| `num2`     | `undefined` |
| `total`    | `undefined` |

#### Execution Phase

| Code                      | Effect               |
| ------------------------- | -------------------- |
| `num1 = 10`               | Argument assigned    |
| `num2 = 5`                | Argument assigned    |
| `let total = num1 + num2` | `total = 15`         |
| `return total`            | Returns 15 to caller |

---

### 🧩 Function Execution Context: `add(20, 25)`

Same process:

| Step         | Result               |
| ------------ | -------------------- |
| `num1 = 20`  | Argument assigned    |
| `num2 = 25`  | Argument assigned    |
| `total = 45` | Computed value       |
| `return`     | Returns 45 to caller |

---

## 📌 Summary

- JavaScript code runs inside **Execution Contexts**.
- Two main types:
  - **Global Execution Context**
  - **Function Execution Context**
- Each context has two phases:
  - **Memory Creation Phase**
  - **Execution Phase**
- Function calls create new contexts and operate independently.
- Always use `let`, `const`, or `var` to declare variables to avoid polluting the global scope.

---

##
