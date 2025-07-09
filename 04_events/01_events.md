**JavaScript Events - A Detailed Note**

JavaScript events are actions or occurrences that happen in the browser and can be detected by JavaScript. These events allow developers to execute code in response to user interactions, browser activities, or other triggers.

Events can be triggered by various actions like clicking a button, pressing a key, moving the mouse, loading a page, resizing a window, and more.

---

### 1. **Event Object**

When an event occurs, an event object is created and passed to the event handler. This object contains useful information about the event.

```javascript
button.addEventListener('click', (event)=>{
  console.log(event);
})
```


### 2. **Common Event Object Properties**

#### a. `type`

- Indicates the type of the event (e.g., `click`, `keydown`, `mousemove`).

```javascript
button.addEventListener("click", function(event) {
  console.log(event.type); // "click"
});
```

#### b. `timestamp`

- Provides the time (in milliseconds) at which the event was created.

```javascript
button.addEventListener("click", function(event) {
  console.log(event.timeStamp); // e.g., 123456789
});
```

#### c. `defaultPrevented`

- Returns a boolean indicating whether `preventDefault()` was called on the event.

```javascript
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(event.defaultPrevented); // true
});
```

#### d. `target`

- Refers to the actual element that triggered the event.

```javascript
document.addEventListener("click", function(event) {
  console.log(event.target); // The element clicked
});
```

#### e. `toElement` / `srcElement`

- `toElement`: For mouseover/out events, refers to the element being entered.
- `srcElement`: A non-standard alias for `target` (commonly used in older IE versions).

```javascript
someElement.onmouseover = function(event) {
  console.log(event.toElement); // Element being hovered over
};
```

#### f. `currentTarget`

- The element to which the event handler is attached.

```javascript
button.addEventListener("click", function(event) {
  console.log(event.currentTarget); // The button element
});
```

#### g. `clientX`, `clientY`

- The X and Y coordinates of the mouse pointer relative to the viewport.
  - What it measures: The mouse pointer's position relative to the viewport (visible area of the web page).

  - Does not include scroll offset.

  - Useful when positioning elements or handling user interaction within the visible browser window.

```javascript
window.addEventListener("click", function(event) {
  console.log(`Client Coordinates: (${event.clientX}, ${event.clientY})`);
});
```

#### h. `screenX`, `screenY`

- The X and Y coordinates of the mouse pointer relative to the screen.
  - What it measures: The mouse pointer's position relative to the entire screen (monitor).

  - Includes the position of the browser window on the user's screen.

  - Less commonly used in layout calculations, more useful for window placement, debugging, or analytics.

```javascript
window.addEventListener("click", function(event) {
  console.log(`Screen Coordinates: (${event.screenX}, ${event.screenY})`);
});
```

#### i. `altKey`, `ctrlKey`, `shiftKey`

- Booleans indicating whether these keys were pressed when the event occurred.

```javascript
document.addEventListener("click", function(event) {
  if (event.altKey) console.log("Alt key was pressed.");
  if (event.ctrlKey) console.log("Ctrl key was pressed.");
  if (event.shiftKey) console.log("Shift key was pressed.");
});
```

#### j. `keyCode`

- Represents the Unicode value of the key pressed (deprecated but still in use).

```javascript
document.addEventListener("keydown", function(event) {
  console.log(`Key code: ${event.keyCode}`); // e.g., 13 for Enter
});
```

> Note: Use `event.key` or `event.code` instead of `keyCode` for modern development.

---

### 3. **Event Handling Methods**

#### a. Inline HTML Handlers

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

#### b. DOM Property

```javascript
button.onclick = function() {
  alert("Clicked!");
};
```

#### c. `addEventListener`

```javascript
button.addEventListener("click", function() {
  alert("Clicked!");
});
```

---

### 4. **Removing Event Listeners**

```javascript
function handler() {
  alert("Removed after one click");
  button.removeEventListener("click", handler);
}
button.addEventListener("click", handler);
```

---

### 5. **Event Propagation**

Events bubble up and can be captured going down. You can control propagation:

```javascript
element.addEventListener("click", function(event) {
  event.stopPropagation(); // Stops event from bubbling up
});
```

---

### Conclusion

Understanding the event object and its properties allows for powerful and interactive web applications. Mastery of event handling is foundational for modern JavaScript development.

