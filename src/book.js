class Book {
  constructor(id, bookAttributes) {
    this.id = id;
    this.title = bookAttributes.title;
    this.author = bookAttributes.author;
    this.price = bookAttributes.price;
    this.description = bookAttributes.description;
    this.seller_info = bookAttributes.seller_info;
    this.image_url = bookAttributes.image_url;
    this.category = bookAttributes.category;
    Book.all.push(this);
  }

  renderBook() {
    return `
                <div data-id=${this.id}>
                  <img src=${this.image_url} height="300" width="250">
                  <h3>${this.title}</h3>
                  <p>$ ${this.price}</p>
                  <p>Genre: ${this.category.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
  }
}

Book.all = [];
