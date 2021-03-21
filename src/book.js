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

  renderUpdateForm() {
    return `
    <form data-id=${this.id} >
      <h3>Edit Book Info:</h3>

      <label>Title</label>
      <br><input id='input-title' type="text" name="title" value="${this.title}" placeholder="Enter book title..." class="input-text">
      <br><br>
      <label>Author</label>
      <br><input id='input-author' type="text" name="author" value="${this.author}" placeholder="Enter author's name..." class="input-text">
      <br><br>
      <label>Price</label>
      <br><input id='input-price' type="text" name="price" value="${this.price}" placeholder="Enter your price..." class="input-text">
      <br><br>
      <label>Description</label>
      <br><textarea id='input-description' name="description" rows="8" cols="80" value="${this.description}" placeholder="Enter book description (eg. story line, condition, etc)..."></textarea>
      <br><br>
      <label>Seller Info</label>
      <br><textarea id='input-seller_info' type="text" name="seller_info" rows="8" cols="80" value="${this.seller_info}" placeholder="Enter your contact info..."></textarea>
      <br><br>
      <label>Image</label>
      <br><input id='input-url' type="text" name="image" value="${this.image_url}" placeholder="Enter an book cover image URL..." class="input-text">
      <br><br>
  
      <label>Genre</label>
      <select id="categories" name="categories">
        <option value="1">Fantasy</option>
        <option value="2">Adventure</option>
        <option value="3">Romance</option>
        <option value="4">Mystery</option>
        <option value="5">Horror</option>
        <option value="6">Thriller</option>
        <option value="7">Historical fiction</option>
        <option value="8">Sci Fi</option>
        <option value="9">Memoir</option>
        <option value="10">Educational</option>
        <option value="11">Motivational</option>
        <option value="12">Children</option>

      </select>
      <br><br>      <input id='edit-button' type="submit" name="submit" value="Edit Book" class="submit">
      <br><br>
      </form>
  `;
  }

  static findById(id) {
    return Book.all.find((book) => book.id == id);
  }
}

Book.all = [];
