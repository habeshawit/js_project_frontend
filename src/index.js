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
        // debugger;
        const newBook = new Book(book.id, book.attributes);
        document.querySelector(
          "#book-container"
        ).innerHTML += newBook.renderBook();
      });
      // .catch((err) => console.log(err));
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
    const bookData = book.data
    
    const newBook = new Book(bookData.id, bookData.attributes);
    document.querySelector(
      "#book-container"
    ).innerHTML += newBook.renderBook();

  })

}
