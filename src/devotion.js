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

    <div style="width:100%">
	<!-- code here -->
	<div class="">
    
		<form class="card-form" id="edit-devotion-form" data-id=${this.id}>
    <h4>Editing "${this.title}"</h4>
			<div class="input" >
        <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Title" class="input-field">
				<label class="input-label">Title</label>
			</div>

      <div class="input">
        <input id='input-date' type="text" name="date" value="${this.date}" placeholder="Date" class="input-field">
				<label class="input-label">Date</label>
      </div>

      <div class="input">
        <input id='input-verse' type="text" name="verse" value="${this.verse}" placeholder="Verse" class="input-field">
				<label class="input-label">Verse</label>
      </div>

      <div class="input" >
        <textarea id='input-content' name="content" value=${this.content} class="input-field" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'>${this.content}</textarea>
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
  
			<div class="action">
      <input id= 'edit-save' class="action-button" type="submit" name="submit" value="Save Changes"  class="submit">

			</div>
		</form>
		
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
      <h4>${this.title}

      <button id="edit-btn" type="button" style="background: transparent;
        border: none;" data-id=${this.id}>
        <i class="fa fa-edit" id="edit-btn" data-id=${this.id}></i> 
      </button></h4>
      <p class="text-muted" ><strong></strong>${this.date}</p>
      <p class="text-muted">${this.category.name}</p>

    </div>
            
      <img src=${this.image_url} class="card-text" width="100%" height="400px" style="border-radius:0.5rem; text-align:justify"><br><br>

      <h4>${this.verse}</h4>

      <p class="card-text">${this.content}</p>

      
    </div>
    
  `;
  }

  renderDevotionForm(){
    return `
    hello
    
    
    
    
    `
  }


}

Devotion.all = [];
