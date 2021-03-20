const endPoint = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  getBooks();

  const createBookForm = document.querySelector("#create-book-form");

  createBookForm.addEventListener("submit", (e) => createFormHandler(e));
});

function getBooks() {
  fetch(endPoint)
    .then((response) => response.json())
    .then((books) => {
      // remember our JSON data is a bit nested due to our serializer
      books.data.forEach((book) => {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        const bookMarkup = `
          <div data-id=${book.id}>
            <img src=${book.attributes.image_url} height="300" width="250">
            <h3>${book.attributes.title}</h3>
            <p>${book.attributes.author}</p>
            <p>$ ${book.attributes.price}</p>
            <p>Genre: ${book.attributes.category.name}</p>
            <button data-id=${book.id}>edit</button>
          </div>
          <br><br>`;

        document.querySelector("#book-container").innerHTML += bookMarkup;
      });
    });
}

function createFormHandler(e) {
  e.preventDefault();
  const title = document.querySelector("#input-title").value;
  const author = document.querySelector("#input-author").value;
  const price = document.querySelector("#input-price").value;
  const description = document.querySelector("#input-description").value;
  const seller_info = document.querySelector("#input-seller_info").value;
  const image = document.querySelector("#input-url").value;
  const categoryId = parseInt(document.querySelector("#categories").value);
  // const categoryId = parseInt(category); //parse into integer
  postBook(title, author, price, description, seller_info, image, categoryId);
}

// prettier-ignore
function postBook(title, author, price, description, seller_info, image_url, category_id){
  // console.log(title, author, price, description, seller_info, image_url, category_id);
  
  let bodyData = {title, author, price, description, seller_info, image_url, category_id}

  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(book => {
    console.log(book);
    const bookData = book.data.attributes
    // render JSON response
    const bookMarkup = `
    <div data-id=${book.id}>
      <img src=${bookData.image_url} height="300" width="250">
      <h3>${bookData.title}</h3>
      <p>${bookData.author}</p>
      <p>$ ${bookData.price}</p>
      <p> Category: ${bookData.category.name}</p>
      <button data-id=${bookData.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#book-container').innerHTML += bookMarkup;
  })

}
