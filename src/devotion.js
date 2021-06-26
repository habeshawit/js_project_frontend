class Devotion {
  constructor(id, devotionAttributes) {
    this.id = id;
    this.title = devotionAttributes.title;
    this.date = devotionAttributes.date;
    this.verse = devotionAttributes.verse;
    this.content = devotionAttributes.content;
    this.image_url = devotionAttributes.image_url;
    this.category = devotionAttributes.category;
    Devotion.all.push(this);
  }

  renderDevotion() {
    return `
    
        <div class="row" id="dev-row">
          <div class="col" id="dev-col">
            <img src=${this.image_url} style="border-radius: 4rem; width: 68px; height: 68px;" >
          </div>

          <div class="col" id="dev-col" style="display: table-cell!important;
            padding: 10px!important;
            vertical-align: middle!important;">
            <h5 class="card-title"  class="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id}>${this.title}</h5>
            <p class="text-muted">${this.date}</p>
          </div>
        </div>  
          <div id="details"
            <p>${this.content}</p>
            
          </div>
          <a class="more-link" class="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id} > &larr; Read more</a></div>
          <hr>
        </div>

    `;
  }

  renderUpdateForm() {
    return `
    
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Devotion</h5>
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
            <input id='input-date' type="text" name="date" value="${this.date}" placeholder="Date" class="form-control">
          </div>

          <div class="form-group row">
            <input id='input-verse' type="text" name="verse" value="${this.verse}" placeholder="Verse" class="form-control">
          </div>

          <div class="form-group row">
            <textarea id='input-content' name="content" rows="8" cols="80" value=${this.content} class="form-control">${this.content}</textarea>
          </div>

         <div class="form-group row">
            <input id='input-url' type="text" name="image" value="${this.image_url}" placeholder="Image URL" class="form-control">
          </div>
          
          <div class="form-group row">
            <select class="form-control form-control-sm" id="categories" name="categories" value=${this.category}>
              <option value="${this.category.id}">${this.category.name}</option>
              <option value="1">Prayer</option>
              <option value="2">Love</option>
              <option value="3">Personal Growth</option>
              <option value="4">Righteousness</option>
              <option value="5">Daily living</option>
              <option value="6">Culture</option>
              <option value="7">Theology</option>
              <option value="8">Accountability</option>
              <option value="9">Knowing God</option>
              <option value="10">Maturity</option>
              <option value="11">Family</option>
              <option value="12">Church</option>
              <option value="13">Struggle</option>
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

  //Can call it on the devotion class itself
  static findById(id) {
    return Devotion.all.find((devotion) => devotion.id == id);
  }

  //prettier-ignore
  update({ title, date, verse, content, image_url, category }) {
    this.title = title;
    this.date = date;
    this.verse = verse;
    this.content = content;
    this.image_url = image_url;
    this.category = category;
  }

  renderDevotionDetails() {
    return `
    
    <div class="render-details">
    <div classs="detail-header" style="line-height:0.25!important; margin-bottom:25px!important">
      <h2><strong></strong>${this.title}

      <button type="button" style="background: transparent;
        border: none;" data-id=${this.id}>
        <i class="fa fa-edit" ></i> 
      </button></h2>

      <p class="text-muted" ><strong></strong>${this.date}</p>
      <p ><strong>CATEGORY: </strong>${this.category.name}</p>

    </div>
            
      <img src=${this.image_url} class="card-text" width="450px" height="350px" style="border-radius:0.5rem; text-align:justify"><br><br>

      <h4>${this.verse}</h4>

      <p class="card-text">${this.content}</p>

      
    </div>
    
  `;
  }
}

Devotion.all = [];
