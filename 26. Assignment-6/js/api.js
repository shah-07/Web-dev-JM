//load API
const loadBooks = async (searchText) => {
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayBooks(data)
}


//spinner
const toggleSpinner = (displayStyle, height) => {
  document.getElementById('spinner').style.display = displayStyle;
  document.getElementById('spinner-container').style.height = height;
}


//Remove Previous Search Reasult
const removeSearchResult = () => {
  document.getElementById('num-found').textContent = '';
  document.getElementById('books').textContent = '';
}


//Search Books (main function)
const searchBooks = () => {
  const searchText = document.getElementById('search-field').value;

  // display spinner
  toggleSpinner('block', '350px');
  removeSearchResult();
  loadBooks(searchText);
}


//show Books that searched
const displayBooks = (books) => {
  //if nothing is searching for spinner
  if (books.docs.length === 0) {
    toggleSpinner('none', '0px');
  }

  //get search field value
  const searchText = document.getElementById('search-field').value;

  //show how many search results is founding
  const numberFoundContainer = document.getElementById('num-found');
  const div = document.createElement('div');
  div.innerHTML = `
    <p class="text-center">"${searchText}" Search Results Found: ${books.numFound}</p>
  `;
  numberFoundContainer.appendChild(div);

  //Clear Search field
  document.getElementById('search-field').value = '';

  //show books of search results
  const booksContainer = document.getElementById('books');
  books?.docs.forEach(book => {
    //if photo and author name and publisher name and publish data is available
    if (book.cover_i !== undefined && book.author_name && book.publisher && book.publish_date) {
      const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      //create html of book card
      const div = document.createElement('div');
      div.classList.add('col');
      const div2 = document.createElement('div');
      div2.classList.add('card');
      div2.classList.add('h-100');
      div2.innerHTML = `
        <img src="${url}" class="book-img" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">
            <small><strong>Author Name: </strong>${book.author_name[0]}</small></br>          
            <small><strong>Publisher Name: </strong>${book.publisher[0]}</small></br>          
            <small><strong>Publish Date: </strong>${book.publish_date[0]}</small>
          </p>
        </div>
      `;
      div.appendChild(div2);
      booksContainer.appendChild(div);

      //hide spinner
      toggleSpinner('none', '0px');
    }
  });
}