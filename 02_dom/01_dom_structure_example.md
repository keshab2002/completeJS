**Short Note on DOM (Document Object Model)**

The Document Object Model (DOM) is a programming interface provided by web browsers that allows developers to access and manipulate the structure, style, and content of HTML and XML documents. It represents the page as a tree of nodes, where each node is an object representing a part of the document. This tree-like structure allows programming languages like JavaScript to dynamically change the document's layout, content, or style.

In the DOM:

- The entire document is represented as a root `#document` node.
- Elements like `<html>`, `<body>`, and `<div>` are element nodes.
- Text inside elements is represented as text nodes.
- Relationships include parent, child, and sibling nodes.

**Example HTML Code and DOM Tree Structure**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title> DOM TREE </title>
    </head>
    <body>
        <div class="main">
            <h1> This is Heading!</h1>
            <p> This is a paragraph</p>
        </div>
    </body>
</html>
```

**DOM Tree Structure:**

```
#document
|
├── <!DOCTYPE html>
|
└── html (lang="en")
    ├── head
    │   └── title
    │       └── " DOM TREE "
    │
    └── body
        └── div
            ├── h1
            │   └── " This is Heading!"
            │
            └── p
                └── " This is a paragraph"
```

This structure demonstrates how the DOM interprets the HTML document, allowing programmatic manipulation of elements and content.

