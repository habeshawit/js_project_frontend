//prettier-ignore
class App {
//     constructor() {
//         this.adapter = new Adapter();
//       } 

//   attachEventListeners() {
//     document.querySelector("#book-container").addEventListener("click", (e) => {
//       const id = parseInt(e.target.dataset.id);
//       const book = Book.findById(id);
//       console.log("clicked");
//       console.log(book);
//       document.querySelector("#update-book").innerHTML = book.renderUpdateForm();   
//     });
//     document.querySelector('#update-book').addEventListener('submit', e => {
//       e.preventDefault();
//       const id = parseInt(e.target.dataset.id);
//       const book = Book.findById(id);
//       const title = e.target.querySelector("#input-title").value;
//       const author = e.target.querySelector("#input-author").value;
//       const price = e.target.querySelector("#input-price").value;
//       const seller_info = e.target.querySelector("#input-seller_info").value;
//       const description = e.target.querySelector("#input-description").value;
//       const image_url = e.target.querySelector("#input-url").value;
//       const category_id = parseInt(e.target.querySelector("#categories").value);
    
//       const jsonBody = {book,title,author,price,seller_info,description,image_url,category_id};
//       this.adapter.updateBook(book.id, jsonBody).then(updatedNote => console.log(updatedNote));
  
//     //   const bodyJSON = {book,title,author,price,seller_info,description,image_url,category_id};
//     //     fetch(`http://localhost:3000/api/v1/books/${book.id}`, {
//     //       method: 'PATCH',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //         Accept: 'application/json',
//     //       },
//     //       body: JSON.stringify(bodyJSON),
//     //     })
//     //       .then(res => res.json())
//     //       // our backend responds with the updated note instance represented as JSON
//     //       .then(updatedNote => console.log(updatedNote));
//       });



//   }
constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleBookClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createBooks = this.createBooks.bind(this);
    this.addBooks = this.addBooks.bind(this);
    this.createFormHandler = this.createFormHandler.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#book-container').addEventListener('click', this.handleBookClick);
    document.querySelector('#update-book').addEventListener('submit', this.handleFormSubmit);
    document.querySelector("#create-book-form").addEventListener('submit', this.createFormHandler);
    // document.querySelector('#image-box').addEventListener('click', this.handleEditClick);

    
}

  createBooks(books) {
    console.log(books);
    books.data.forEach(book => {
        // const newBook = new Book(book.id, book.attributes);
      new Book(book.id, book.attributes);
    });
    this.addBooks();
  }

  addBooks() {
    document.querySelector('#book-container').innerHTML = '';
    Book.all.forEach(
      book => (document.querySelector('#book-container').innerHTML += book.renderBook())
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
      const book = Book.findById(id);
      const title = e.target.querySelector("#input-title").value;
      const author = e.target.querySelector("#input-author").value;
      const price = e.target.querySelector("#input-price").value;
      const seller_info = e.target.querySelector("#input-seller_info").value;
      const description = e.target.querySelector("#input-description").value;
      const image_url = e.target.querySelector("#input-url").value;
      const category_id = parseInt(e.target.querySelector("#categories").value);
    
      const jsonBody = {book,title,author,price,seller_info,description,image_url,category_id};
    //   debugger
      this.adapter.updateBook(book.id, jsonBody).then(updatedBook => {
        const book = Book.findById(updatedBook.data.id);
        book.update(updatedBook.data.attributes);
        this.addBooks();
      });
  }

  handleBookClick(e) {
    const id = parseInt(e.target.dataset.id);
    const book = Book.findById(id);
    if(e.target.id === "myBtn"){
      console.log("Button Clicked");
      document.querySelector('#update-book').innerHTML = book.renderUpdateForm();
    }
    else if(e.target.id === "image-box")
    {      
      document.querySelector('#view-book').innerHTML = book.renderBookDetails();
      console.log("Image Clicked");
// debugger
    }
    
  }

  createFormHandler(e) {
    e.preventDefault();
    const title = document.querySelector("#input-title").value;
    const author = document.querySelector("#input-author").value;
    const price = document.querySelector("#input-price").value;
    const description = document.querySelector("#input-description").value;
    const seller_info = document.querySelector("#input-seller_info").value;
    const image = document.querySelector("#input-url").value;
    const categoryId = parseInt(document.querySelector("#categories").value);
    this.postFetch(title, author, price, description, seller_info, image, categoryId);
  }

  postFetch(title, author, price, description, seller_info, image_url, category_id){
    let bodyData = {title, author, price, description, seller_info, image_url, category_id}
  
    fetch(endPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(book => {
      const bookData = book.data
      
      const newBook = new Book(bookData.id, bookData.attributes);
      document.querySelector(
        "#book-container"
      ).innerHTML += newBook.renderBook();
  
    }) 
  }

  handleImageClick(e){
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const book = Book.findById(id);
    document.querySelector('#view-book').innerHTML = book.renderBookDetails();

  }

}
