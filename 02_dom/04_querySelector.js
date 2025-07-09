// querySelector selects first child of the returned HTML collection 

document.querySelector('h2'); // select first h2 element
//<h2>​Lorem, ipsum dolor.​</h2>​

document.querySelector('#mainHeading') // select first element with id mainHeading
//<h1 class=​"title" id=​"mainHeading">​…​</h1>​

document.querySelector('.title') // // select first element with class title
//<h1 class=​"title" id=​"mainHeading">​…​</h1>​

document.querySelector('input[type = "password"]') // select input elements (password)
//<input type=​"password" name id>​


/*
Change content and css of te first li in ul
<ul>
    <li>Lorem, ipsum dolor.</li>
    <li>Lorem, ipsum dolor.</li>
    <li>Lorem, ipsum dolor.</li>
</ul>
*/

const target = document.querySelector('ul').querySelector('li')
target.innerHTML = "Hello Brother";
target.style.backgroundColor = blue;




