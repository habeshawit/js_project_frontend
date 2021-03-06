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
              <p><a class="more-link" class="card-img-top" alt="..." id="read-more" data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id} > &larr; Read more </a></p>
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
    
	  <div>
      <form class="card-form" id="edit-devotion-form" data-id=${this.id}>
        <hr>
        <p><i class="bi bi-calendar"></i> ${new Date(this.created_at).toDateString()} |  
          <span id="show-word-count">0</span> words | <button class="more-link"><input id='edit-save' type="submit" name="submit" value="Save now"  class="submit" ></button>
          | <span class="update" data-id=${this.id} id="done-button" data-id=${this.id}> <a class="more-link">Done<a> </span>
          <span id="saved-now" class="alignright"></span>
        </p>
        <hr>

        <div class="">
            <label><i class="bi bi-file-ruled"></i> </label>

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

        </div>  


    
      
  <div class="input" >
          <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Title" class="input-field">
        </div>
    
        <div class="input">
          <input id='input-verse' type="text" name="verse" value="${this.verse}" placeholder="Verse" class="input-field">
        </div>

        <div class="input" >
          <textarea id='input-content' name="content" value=${this.content} class="input-field" onkeypress="countWords(this)" onkeydown='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${this.content}</textarea>
        </div>

        <div class="input">
          <input id='input-url' type="text" name="image" value="${this.image_url}" placeholder="Image URL" class="input-field">
        </div>
    
      </form>
      
	</div>
</div>

  `;
  
  }

  renderDevotionDetails() {
    return `
    
    <div class="render-details">
      <span id="saved-now" class="alignright"></span>

      <div classs="detail-header" style="line-height:0.25!important; margin-bottom:25px!important">

        <p class="text-muted" >${new Date(this.created_at).toDateString()} |<button  type="button" style="background: transparent;border: none;" data-id=${this.id}>
        <i class="bi bi-pencil-fill" style="margin:10px" id="edit-btn" data-id=${this.id}></i> | <i style="margin:10px" class="bi bi-trash-fill" id="delete-btn" data-id=${this.id}></i> </button></p>
      </div>
      
      <img src=${this.image_url} class="card-text" width="100%" height="400px" style="border-radius:0.5rem; text-align:justify"><br><br>
      
      <div class="detail-header" style="line-height:0.45!important; margin-bottom:25px!important">
        <h3 style="font-weight:900">${this.title} </h3>

        <p style="font-weight:bold"><i class="bi bi-file-ruled"></i> ${this.category.name} </p><br>

        <p>${this.verse}</p>
      </div>
              
        <p class="card-text">${this.content}</p>

        
    </div>
    
  `;
  }


  renderFeaturedDevo(){

    return `

      <div class="statistics">
          <div class="row">
            <div class="col" style="border-right: 1px solid black!important; border-radius: 0px!important"><span>${Devotion.all.length}</span><br> total entries</div>
            <div class="col" ><span>Start day</span><br> ${new Date(Devotion.all[Devotion.all.length-1].created_at).toDateString()}</div>
          </div>
      </div>
      <br><hr>

      
      
      <h4 style="margin:15px">Latest Entry:</h4>
      <div class="row gx-4 gx-lg-5 align-items-center" id=${this.id} >
        
        <div class="col-md-6" style="border:none!important;"><img class="card-img-top mb-5 mb-md-0" src=${this.image_url} alt="..."></div>

          <div class="col-md-6" id="featured-devo" style="border:none!important">
              
              <h1 class="display-5 fw-bolder">${this.title}</h1>
              
              <p class="lead">${this.content}</p>
              <p><a class="more-link" class="card-img-top" alt="..." id="read-more" data-toggle="modal" data-target="#exampleModalScrollable" data-id=${this.id} > Read more </a></p>
              
              
          </div>
        
      </div>
    
    
    
    `
    
  }


}

Devotion.all = [];
