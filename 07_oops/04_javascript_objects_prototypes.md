# Deep Dive: Everything is an Object in JavaScript (Functions, Prototypes, and `new`)

JavaScript is a **prototype-based object-oriented language**, which means objects inherit from other objects via prototypes. Let's explore in-depth how functions, objects, and prototypes work together — and what really happens with `new`, `this`, and `prototype`.

---

## 1. Everything Is an Object (Sort of)

### Primitives vs Objects

JavaScript has two main types:

- **Primitives**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Objects**: `Object`, `Array`, `Function`, `Date`, etc.

While primitives are **not** objects, JavaScript will temporarily wrap them in objects when needed:

```js
const str = "hello";
console.log(str.toUpperCase()); // HELLO
```

Under the hood, JavaScript does:

```js
new String("hello").toUpperCase();
```

---

## 2. Functions Are Objects

In JavaScript, **functions are a special kind of object**. This means:

- You can add properties to them.
- They have a `prototype` property.

Example:

```js
function greet() {}
greet.lang = "English";
console.log(greet.lang); // English
```

---

## 3. The `prototype` Property

Every **function** has a `prototype` object by default. This object is used **when creating instances using **``.

```js
function Item(name) {
    this.name = name;
}
Item.prototype.sayName = function() {
    console.log(this.name);
};

const pen = new Item("Pen");
pen.sayName(); // Pen
```

Here:

- `pen.__proto__ === Item.prototype` is `true`
- `pen` inherits from `Item.prototype`

---

## 4. What Happens When You Use `new`

When you use the `new` keyword:

```js
const obj = new Constructor(arg1, arg2);
```

JavaScript does these steps:

1. Creates a new empty object: `{}`
2. Links it to the constructor's prototype: `obj.__proto__ = Constructor.prototype`
3. Binds `this` to the new object and calls the constructor
4. Returns the new object (unless the constructor returns something else)

### Example:

```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.show = function() {
    console.log(`${this.name}: ${this.price}`);
};

const laptop = new Product("Laptop", 1200);
laptop.show(); // Laptop: 1200
```

---

## 5. Understanding `this`

### Rules for `this`

- In a **method**: `this` refers to the object before the dot.
- In a **constructor**: `this` refers to the newly created object.
- In **global functions**: `this` is the global object (or `undefined` in strict mode).

```js
function Car(brand) {
    this.brand = brand;
}
const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota
```

---

## 6. Shared Methods Using Prototypes

Instead of defining methods inside the constructor (which would duplicate them), we attach them to the constructor's `prototype`:

```js
function Items(item, price) {
    this.item = item;
    this.price = price;
}

Items.prototype.printItems = function() {
    console.log(`Price of ${this.item} is: ${this.price}`);
};

Items.prototype.addTax = function() {
    this.price += 15;
};

const coffee = new Items('cold coffee', 250);
coffee.addTax();
coffee.printItems(); // Price of cold coffee is: 265
```

Why use prototype?

- Memory efficiency: All instances share one copy of the method.
- Enables inheritance and method reuse.

---

## 7. Bonus: Why `undefined` in `console.log()`?

If your method only prints and doesn’t return anything:

```js
console.log(coffee.printItems()); // Logs string, then logs undefined
```

To fix:

```js
Items.prototype.printItems = function() {
    return `Price of ${this.item} is: ${this.price}`;
};
console.log(coffee.printItems()); // Logs the string only
```

---

## Summary:

- Primitives are not objects, but can act like them temporarily.
- Functions are objects and can have properties.
- Every function has a `prototype` — used when creating new objects.
- `new` sets up inheritance and binding of `this`.
- Use prototype to share methods between instances.

Understanding how `prototype`, `new`, and `this` work under the hood helps you master JavaScript's powerful and flexible object model.

