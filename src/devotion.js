class Devotion {
  constructor(id, devotionAttributes) {
    this.id = id;
    this.title = devotionAttributes.title;
    this.verse = devotionAttributes.verse;
    this.content = devotionAttributes.content;
    this.image_url = devotionAttributes.image_url;
    this.category = devotionAttributes.category;
    this.created_at = devotionAttributes.created_at
    
    Devotion.all.push(this);
  }

    //Can call it on the devotion class itself
    static findById(id) {
      return Devotion.all.find((devotion) => devotion.id == id);
    }
  
    //prettier-ignore
    update({ title, verse, content, image_url, category }) {
      this.title = title;
      this.verse = verse;
      this.content = content;
      this.image_url = image_url;
      this.category = category;
    }


    

  renderDevotion() {
    return `
    
        <div class="row" id="devo-${this.id}">
        
          <div class="col" id="dev-col" style="display: table-cell!important;vertical-align: middle!important; width: 68%!important; text-align:justify">
            <h5 class="card-title"  class="card-img-top" alt="..."  data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id}>${this.title}</h5>
            
            <div id="details"
              <p>${this.content}</p>
            </div>

            <div>
              <p class="text-muted" style="color:grey!important; font-size:12px!important">${new Date(this.created_at).toDateString()} </p><br>
              <p><a class="more-link" class="card-img-top" alt="..." id="read-more" data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id} > Read more &rarr;</a></p>
            </div>
          </div>

          <div class="col" id="dev-col" style="width:20%">
            <img src=${this.image_url} " >
          </div>
          <hr style="width: 100vw;">  
        </div>
        

    `;
  }

  renderUpdateForm() {
    
    return `

    <div style="width:100%">
	
	  <div class="">
      <form class="card-form" id="edit-devotion-form" data-id=${this.id}>
        <hr>
        <p><i class="bi bi-calendar"></i> ${new Date(this.created_at).toDateString()} |  
          <span id="show-word-count">0</span> words | <button class="more-link"><input id='edit-save' type="submit" name="submit" value="Save now"  class="submit"></button>
          <span id="saved-now" class="alignright"></span>
        </p>
        <hr>
      
      <div class="input" >
          <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Title" class="input-field">
          <label class="input-label">Title</label>
        </div>

        <div class="input">
          <input id='input-verse' type="text" name="verse" value="${this.verse}" placeholder="Verse" class="input-field">
          <label class="input-label">Verse</label>
        </div>

        <div class="input" >
          <textarea id='input-content' name="content" value=${this.content} class="input-field" onkeypress="countWords(this)" onkeydown='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${this.content}</textarea>
          <label class="input-label" style="transform: translateY(-1.5rem); color: #6658d3;">Content</label>
        </div>

      <div class="input">
          <input id='input-url' type="text" name="image" value="${this.image_url}" placeholder="Image URL" class="input-field">
          <label class="input-label">Image URL</label>
        </div>
        
        <div class="input">
          <select class="input-field" id="categories" name="categories" value=${this.category}>
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
          <label class="input-label">Category</label>
        </div>  
    
      </form>
      
	</div>
</div>

  `;
  
  }

  renderDevotionDetails() {
    return `
    
    <div class="render-details">
    <div classs="detail-header" style="line-height:0.25!important; margin-bottom:25px!important">

      <p class="text-muted" >${new Date(this.created_at).toDateString()}</p>
    </div>
    
    <img src=${this.image_url} class="card-text" width="100%" height="400px" style="border-radius:0.5rem; text-align:justify"><br><br>
    
    <div class="detail-header" style="line-height:0.45!important; margin-bottom:25px!important">
      <h3 style="font-weight:900">${this.title} 

      <button type="button" style="background: transparent;
        border: none;" data-id=${this.id}>
        <i class="bi bi-pencil-fill" id="edit-btn" data-id=${this.id}></i> 
        <i class="bi bi-trash-fill" id="delete-btn" data-id=${this.id}></i> 
    
      </button></h3>

      <p>Category: ${this.category.name} </p>
      <p>${this.verse}</p>
    </div>
            

      

      <p class="card-text">${this.content}</p>

      
    </div>
    
  `;
  }


}

Devotion.all = [];
