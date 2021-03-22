const endPoint = "http://localhost:3000/api/v1/books";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
  const app = new App();
  app.attachEventListeners();

  // app.adapter.fetchBooks().then((json) => {
  //   json.forEach((book) => {
  //     debugger;
  //     document.querySelector("#book-container").innerHTML += new Book(
  //       book
  //     ).renderBook();
  //   });
  app.adapter.fetchBooks().then(app.createBooks);
});

// getBooks();

// const createBookForm = document.querySelector("#create-book-form");

// createBookForm.addEventListener("submit", (e) => createFormHandler(e));

// const bookContainer = document.querySelector("#book-container");
// bookContainer.addEventListener("click", (e) => {
//   const id = parseInt(e.target.dataset.id);
//   const book = Book.findById(id);
//   document.querySelector("#update-book").innerHTML = book.renderUpdateForm();
// });

// document
//   .querySelector("#update-book")
//   .addEventListener("submit", (e) => updateFormHandler(e));
// });

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
  postFetch(title, author, price, description, seller_info, image, categoryId);
}

// prettier-ignore
function postFetch(title, author, price, description, seller_info, image_url, category_id){
  let bodyData = {title, author, price, description, seller_info, image_url, category_id}

  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(book => {
    // console.log(book);
    const bookData = book.data
    
    const newBook = new Book(bookData.id, bookData.attributes);
    document.querySelector(
      "#book-container"
    ).innerHTML += newBook.renderBook();

  })

}

// // prettier-ignore
// function updateFormHandler(e) {
//   e.preventDefault();
//   const id = parseInt(e.target.dataset.id);
//   const book = Book.findById(id);
//   const title = e.target.querySelector("#input-title").value;
//   const author = e.target.querySelector("#input-author").value;
//   const price = e.target.querySelector("#input-price").value;
//   const sellerInfo = e.target.querySelector("#input-seller_info").value;
//   const description = e.target.querySelector("#input-description").value;
//   const image_url = e.target.querySelector("#input-url").value;
//   const category_id = parseInt(e.target.querySelector("#categories").value);
//   patchBook(book, title, author, price, sellerInfo, description, image_url, category_id);
//   // debugger
// }

// //prettier-ignore
// function patchBook(book, title, author, price, seller_info, description, image_url, category_id) {
//   const bodyJSON = { book, title, author, price, seller_info, description, image_url, category_id }
//   fetch(`http://localhost:3000/api/v1/books/${book.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(bodyJSON),
//   })
//     .then(res => res.json())
//     // .then(updatedNote => console.log(updatedNote));
//     .then(updatedNote => {
//       console.log(updatedNote.data.attributes)
// // document.querySelector(
// //       "#book-container"
// //     ).innerHTML = updatedNote.data.attributes.renderBook;

//     });

//     // debugger

// }
