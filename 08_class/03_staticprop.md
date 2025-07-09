### 📘 What is a **Static Property** in JavaScript?

A **static property** is a property that belongs to the **class (or constructor function) itself**, **not to its instances**.

---

## 🔹 Static Property vs Instance Property

| Type              | Where it’s defined        | Accessed from              |
| ----------------- | ------------------------- | -------------------------- |
| Instance Property | Inside the constructor    | From the object (instance) |
| Static Property   | On the constructor itself | From the class/constructor |

---

### ✅ Example: Static Property (ES6 Class Syntax)

```javascript
class Animal {
    constructor(name) {
        this.name = name; // instance property
    }

    static type = 'Mammal'; // static property
}

console.log(Animal.type);       // ✅ 'Mammal'
const a1 = new Animal('Leo');
console.log(a1.type);           // ❌ undefined (not on instance)
```

---

### ✅ Static Property with Constructor Functions

```javascript
function Animal(name) {
    this.name = name;
}

// Define static property directly on the constructor function
Animal.type = 'Mammal';

const a1 = new Animal('Tiger');

console.log(Animal.type);   // ✅ 'Mammal'
console.log(a1.type);       // ❌ undefined
```

---

## 🔹 Static Methods 

Just like static properties, **static methods** are methods defined on the class itself:

```javascript
class Dog {
    static bark() {
        return "Dogs bark!";
    }
}

console.log(Dog.bark());     // ✅ Dogs bark!
```

---

## 🧠 Summary

* **Static properties/methods** are not inherited by instances.
* They're used for class-level information or utilities (like a counter, type info, factory methods).
* Use the class/constructor name to access them: `ClassName.staticProperty`

---

Let me know if you'd like an example that uses both static and instance properties together in a real-world use case!
