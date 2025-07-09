// Select element by Id

document.getElementById('mainHeading');
//<h1 class=​"heading" id=​"mainHeading">​ This is Heading!​</h1>​

// Get ID of selected element
document.getElementById('mainHeading').id
//'mainHeading'

// Get Class of selected element
document.getElementById('mainHeading').className
//'heading'

// Get specified attribute
document.getElementById('mainHeading').getAttribute('id');
//'mainHeading'


document.getElementById('mainHeading').getAttribute('class');
//'heading'


// Change attribute value of selected element (override)
document.getElementById('mainHeading').setAttribute('class', 'title');
// Change class value from 'heading' to 'title'


// Add CSS to selected element
let mainTitle = document.getElementById('mainHeading')
mainTitle.style.color = green;


// Extract inner content
/*
Concider this example:
<h1 class="heading" id="mainHeading"> 
This is 
<span style="display: none;">Headind </span>
</h1>
*/

mainTitle = document.getElementById('mainHeading')
mainTitle.innerHTML
//' This is <span style="display: none;">Heading</span>'
mainTitle.innerText
//'This is'
mainTitle.textContent
//' This is Heading'








