# 📘 Event Propagation: Event Bubbling and Event Capturing

Event propagation describes the way events travel through the Document Object Model (DOM) when an event occurs. It consists of three phases:
- Capturing phase (Capture): Event starts from the window and moves down to the event target.

- Target phase: The event reaches the target element.

- Bubbling phase (Bubble): The event bubbles back up from the target to the root.

## 🔁 Event Capturing vs. Event Bubbling

- Event Capturing: Listeners are triggered from the outermost element down to the target.

- Event Bubbling: Listeners are triggered from the target up to the outermost element.

- You can control the phase by passing a boolean in addEventListener:

    - true for capturing

    - false for bubbling (default)

``` html
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Event Propagation Example</title>
        <style>
            #outer {
            padding: 30px;
            background-color: lightblue;
            }
            #inner {
            padding: 30px;
            background-color: lightgreen;
            }
            img {
            width: 100px;
            height: 100px;
            border: 2px solid black;
            }
        </style>
        </head>
        <body>

        <div id="outer">
            Outer Div
            <div id="inner">
                Inner Div
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wxJ0c-jC6VcDASO9aiDWD9zWAeJLKrS5gg&s" alt="Sample Image" id="myImage">
            </div>
        </div>

        <script>
            // Event Capturing
            document.getElementById('outer').addEventListener('click', function () {
                console.log('Outer DIV (Capturing)');
            }, true); // Capturing phase

            // Event Bubbling
            document.getElementById('inner').addEventListener('click', function () {
                console.log('Inner DIV (Bubbling)');
            }, false); // Bubbling phase

            document.getElementById('myImage').addEventListener('click', function () {
                console.log('Image Clicked');
            }, false); // Bubbling phase
        </script>

        </body>
    </html>

```

## Output:
- Outer DIV (Capturing)
- Image Clicked
- Inner DIV (Bubbling)



# stopPropagation() – Short Note
- The stopPropagation() method prevents an event from continuing to bubble up or capture down the DOM. It stops the event at the current level.

```javascript
event.stopPropagation();
```

## Example Code of Stop Propagation

```javascript
<div id="outer">
  <button id="btn">Click Me</button>
</div>

<script>
  document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer Div Clicked');
  });

  document.getElementById('btn').addEventListener('click', (event) => {
    console.log('Button Clicked');
    event.stopPropagation(); // Prevents bubbling
  });
</script>
```

## Output:
- Button Clicked


# 🛑 Short Note on preventDefault()
The preventDefault() method in JavaScript is used to stop the default action associated with an event from occurring.

## 📘 Use Case:
It is commonly used with:

- Links (```<a>```) to stop navigation

- Form submissions (```<form>```) to prevent page reload

- Keyboard and mouse events to override browser behavior

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>preventDefault Example</title>
</head>
<body>

  <a href="https://chat.openai.com" id="chatgptLink">Go to ChatGPT</a>

  <script>
    document.getElementById('chatgptLink').addEventListener('click', function(event) {
      event.preventDefault(); // Prevents the link from navigating
      console.log('Default behavior prevented! You clicked the ChatGPT link.');
    });
  </script>

</body>
</html>

```
## ▶️ What Happens:
- Normally, clicking the link would open 'https://chat.openai.com' in the browser.

- With preventDefault(), that navigation is blocked.

- Instead, this message appears in the console:

```bash
Default behavior prevented! You clicked the ChatGPT link.
```