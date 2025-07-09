/*
querySelctorAll selects all elemets specified and returns a node list

this node list is not an array,but nodeist has forEach fecelity
But if we want other facelities of array (like map), we have to convert lode list to array
*/

/*
<ul>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
    <li class = 'list-item'>Lorem, ipsum dolor.</li>
</ul>
Change content, css of all the list items
*/

let listEle = document.querySelectorAll('li')

listEle.forEach( (ele) =>{
    ele.innerHTML = "Hello!"
} )
