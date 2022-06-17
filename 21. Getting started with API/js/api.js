//32-2 Intro To Json, Json Structure, Parse, Stringify
const user = { id: 11, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
//console.log(user); //{ id: 11, name: 'Gorib Amir', job: 'actor' }
//console.log(stringified); //{"id":11,"name":"Gorib Amir","job":"actor"}

const shop = {
  name: "alia Store",
  address: "Ranbir road",
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    name: "alia Bhatt",
    profession: "actor",
  },
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
// console.log(shop); //{name: 'alia Store', address: 'Ranbir road', products: Array(3), isExpensive: false}
console.log(shopStringified); //{"name":"alia Store","address":"Ranbir road","products":["laptop","mobile","pepsi"],"owner":{"name":"alia Bhatt","profession":"actor"},"isExpensive":false}
const converted = JSON.parse(shopStringified);
console.log(converted.owner); //{name: 'alia Bhatt', profession: 'actor'}

//32-3 Json Placeholder, Get Data, Display Data On UI
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json));

//32-4 Load More Data, More API, Send Data To Function
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

//32-5 Dynamically Display Loaded Data On Your Website
function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerText = `${user.id}. Name: ${user.name} email: ${user.email}`;
    ul.appendChild(li);
  }
}

const displayPosts = (posts) => {
  const postSection = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.style.margin = "50px 0px 50px 0px";
    const h3 = document.createElement("h3");
    h3.innerText = `${post.id}. ${post.title}`;
    div.appendChild(h3);
    const p = document.createElement("p");
    p.innerText = post.body;
    div.appendChild(p);
    postSection.appendChild(div);
  }
};

//32-7 Get, Post, Patch, Delete, Crud, Get Vs Post
//post example
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//patch example
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//delete example
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

//32-8 Debug Api, Network Tab,Status Code, Headers, Bad Api
//HTTP response status codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)
