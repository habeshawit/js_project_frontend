class Home {

  

    renderDevotionForm() {
      return `

    
      <div style="width:100%">
	
	  <div class="">
      <form class="card-form" id="create-devotion-form" >

        <hr>
          <p><i class="bi bi-calendar"></i> Today |  
            <span id="show-word-count">0</span> words | <a class="more-link"><input id= 'create-button' class="action-button" type="submit" name="submit" value="Save now" class="submit">
            </a>
            <span id="saved-now" class="alignright"></span>
          </p>
        <hr>
      
      <div class="input" >
          <input id='input-title' type="text" name="title" value="" placeholder="Title" class="input-field">
          <label class="input-label">Title</label>
        </div>

        <div class="input">
          <input id='input-verse' type="text" name="verse" value="" placeholder="Verse" class="input-field">
          <label class="input-label">Verse</label>
        </div>

        <div class="input" >
          <textarea id='input-content' name="content" value="" class="input-field" onkeypress="countWords(this)" onkeydown='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
          <label class="input-label" style="transform: translateY(-1.5rem); color: #6658d3;">Content</label>
        </div>

      <div class="input">
          <input id='input-url' type="text" name="image" value="" placeholder="Image URL" class="input-field">
          <label class="input-label">Image URL</label>
        </div>
        
        <div class="input">
          <select class="input-field" id="categories" name="categories" value="">
            <option value="" selected disabled hidden>Choose Category</option>
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

    renderHomeDisplay(){
        return `
        <div id="welcome">
          <img src="https://www.jurick.net/wp-content/uploads/1990/10/golden-path-trees-colorado.jpg">
        
          <div id="content">
            <h1>Welcome to your daily devotional app</h1>
            <p>"Your word is a lamp for my feet, a light on my path." - Psalms 115:105</p>
          </div>
        
        </div>
        
        
          
        
        
        `
    }
  
    
  }
  

  

  