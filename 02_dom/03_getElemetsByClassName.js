// Select elemt by class name: returns HTML collection (not array) of all the elementshaving same class name
document.getElementsByClassName('title')
//HTMLCollection [h1#mainHeading.title, mainHeading: h1#mainHeading.title].

// HTML collection is not an array, hence we can not apply all array  methods in it. To do so, first we have to convert HTML collection into an array

/*
<ul>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
</ul>
Change content, css of all the list items
*/

let listElements = document.getElementsByClassName('list-item')
listElements = Array.from(listElements);
listElements.map( (listEle) =>{
    listEle.innerHTML = "Hello Bro!";
} );