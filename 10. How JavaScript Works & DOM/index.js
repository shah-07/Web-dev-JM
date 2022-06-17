//console.log(20 + 30 + 20);
/* const obj = {
    a: 'one',
    b: 'two',
    a: 'three'
};
console.log(obj); */


//23-4 Get different HTML elements in JS by using tag name
const student = {name: 'kissmot ali', age: 16, height: 60};
const blogTitles = document.getElementsByTagName('h3');
console.log(blogTitles); //HTMLCollection(4) [h3, h3, h3, h3]
for(const h3 of blogTitles) {
    // console.log(h3);
}

const blogDescription = document.getElementsByTagName('p');
for(const p of blogDescription){
    // console.log(p.innerText);
}


//23-5 Capture and change Element by using getElementById
const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';
const third = document.getElementById('third-title');
third.innerText = 'Title updated by JS';
third.style.backgroundColor = 'salmon';
third.style.padding = '10px';
third.style.marginLeft = '20px'; 

//23-6 Explore getElementsByClassName and querySelectorAll
const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    blog.style.border = '2px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '5px';
    blog.style.padding = '5px';
}
document.querySelector('.blog').style.backgroundColor = 'gray';
document.querySelector('.blog').style.color = 'white';
const querySecondTitle = document.querySelectorAll('#second-title');
querySecondTitle[0].style.fontFamily = "arial";


//23-7 NodeList, htmlcollection, setAttribute, parentNode, childnodes
querySecondTitle[0].setAttribute('title', 'I added a tooltip using JS');
document.getElementById("third-title").parentNode;
document.getElementById("second-blog").childNodes; //NodeList(5) [text, h3#second-title, text, p, text]


//23-8 Create HTML elements using Javascript and appendChild
//create the element
const li = document.createElement('li');
li.innerText = 'Blog 5';
//where to add
const ul = document.getElementById('blog-list');
//appendchild
ul.appendChild(li);

//add article
const article = document.createElement('article');
const h3 = document.createElement('h3');
h3.innerText = 'My awesome Blog-5';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dicta aperiam recusandae, in deleniti aspernatur cupiditate. Cumque libero magni consequatur quae, sapiente eligendi quos qui, quam nisi debitis in repellat.';
article.appendChild(h3);
article.appendChild(p);

//another way
const article2 = document.createElement('article');
article2.innerHTML = `
<h3>My awesome Blog-6</h3>
<p>Omnis pariatur odit distinctio at libero? Autem praesentium numquam quod, pariatur hic omnis earum qui provident odio quos repudiandae maxime, atque temporibus totam vel sapiente excepturi? Hic repudiandae libero perspiciatis!</p>
`

//parent of article
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);
blogSection.appendChild(article2);

// Remove element
const blogList = document.getElementById('blog-list');
const thirdChild = blogList.children[2];
blogList.removeChild(thirdChild);
