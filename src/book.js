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
  //   constructor(data) {
  //     this.id = data.id;
  //     this.title = data.title;
  //     this.author = data.author;
  //     this.price = data.price;
  //     this.description = data.description;
  //     this.seller_info = data.seller_info;
  //     this.image_url = data.image_url;
  //     this.category = data.category;
  //     Book.all.push(this);
  //   }

  renderBook() {
    return `
    
    <div class="col-md-2 d-flex">
            
        <div class="card mb-5 shadow-sm flex-fill" >
        <img src=${this.image_url} class="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalLong" data-id=${this.id}>
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.author}</p>
            <p class="card-text"> $ ${this.price}</p>
            <div class="d-flex justify-content-between align-items-center">
            <!--<div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" data-id=${this.id}>Edit</button>
            </div>-->

            <!-- Button trigger modal -->
            <button type="button" id="myBtn" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-id=${this.id}>
              Edit
            </button>
            <small class="text-muted">${this.category.name}</small>
            </div>
        </div>
        </div>
    </div>
    `;
    // return `
    //             <div data-id=${this.id}>
    //               <img src=${this.image_url} height="300" width="250">
    //               <h3>${this.title}</h3>
    //               <p>$ ${this.price}</p>
    //               <p>Genre: ${this.category.name}</p>
    //               <p>${this.description}</p>
    //               <p>Contact Seller: ${this.seller_info}</p>
    //               <button data-id=${this.id}>edit</button>
    //             </div>
    //             <br><br>`;
  }

  renderUpdateForm() {
    return `
    
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Book</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form data-id=${this.id} >
      
      <div class="form-group row">
            <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Title" class="form-control">
          </div>

          <div class="form-group row">
            <input id='input-author' type="text" name="author" value="${this.author}" placeholder="Author" class="form-control">
          </div>
          
          <div class="form-group row">
            <textarea id='input-description' name="description" rows="8" cols="80" value="${this.description}" placeholder="${this.description}" class="form-control"></textarea>
          </div>

         <div class="form-group row">
            <input id='input-url' type="text" name="image" value="${this.image_url}" placeholder="Image URL" class="form-control">
          </div>

          <div class="form-group row">
            <input id='input-price' type="text" name="price" value="${this.price}" placeholder="Price" class="form-control">
          </div>

          <div class="form-group row">
            <input id='input-seller_info' type="text" name="seller_info" value="${this.seller_info}" placeholder="Seller Contact Info..." class="form-control">
          </div>
          
          
          <div class="form-group row">
            <select class="form-control form-control-sm" id="categories" name="categories" value="${this.category}">
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
          </div>  
      <div class="modal-footer">  
        <input id='edit-button' class="btn btn-primary" type="submit" name="submit" value="Save Changes" class="submit">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
      </div>
      </form>
      </div>
      
    </div>
  </div>
</div>
  `;
  }

  static findById(id) {
    return Book.all.find((book) => book.id == id);
  }

  //prettier-ignore
  update({ title, author, price, description, seller_info, image_url, category }) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.description = description;
    this.seller_info = seller_info;
    this.image_url = image_url;
    this.category = category;
  }

  renderBookDetails() {
    // debugger;
    return `
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${this.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <p class="card-text"><strong>Author: </strong>${this.author}</p>
          <p class="card-text"><strong>Price: </strong>$ ${this.price}</p>
          <p class="card-text"><strong>Description: </strong>${this.description}</p>
          <p class="card-text"><strong>Seller Contact Info: </strong>${this.seller_info}</p>
      </div>
    </div>
  </div>
</div>
<!--<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${this.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="card-text"><strong>Author: </strong>${this.author}</p>
        <p class="card-text"><strong>Price: </strong>$ ${this.price}</p>
        <p class="card-text"><strong>Description: </strong>${this.description}</p>
        <p class="card-text"><strong>Seller Contact Info: </strong>${this.seller_info}</p>
      </div>
      
    </div>
  </div>
</div>-->
  `;
    debugger;
  }

  // renderCategory() {
  //   return `

  //       <div class="col-md-2">
  //         <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
  //         ${(document.querySelector(
  //           "#category-container"
  //         ).innerHTML = this.category.name)}
  //         </button>
  //       </div>
  //     `;
  // }
}

Book.all = [];
