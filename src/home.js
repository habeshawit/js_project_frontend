class Home {

  

    renderDevotionForm() {
      return `

    
      <div style="width:100%">
	
	  <div class="">
      <form class="card-form" id="create-devotion-form" >

        <hr>
          <p><i class="bi bi-calendar"></i> Today |  
            <span id="show-word-count">0</span> words | <button class="more-link"><input id= 'create-button' type="submit" name="submit" value="Save now" class="submit"></button>
            <span id="saved-now" class="alignright"></span>
          </p>
        <hr>

        <div class="">
        <label><i class="bi bi-file-ruled"></i> </label>

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

        </div>  
      
      <div class="input" style="font-size:25px" >
          <input style="font-size:20px" id='input-title'  type="text" name="title" value="" placeholder="Title: ________________" class="input-field">
        </div>

        <div class="input" style="font-size:25px">
          <input  style="font-size:20px" id='input-verse' type="text" name="verse" value="" placeholder="Verse: ________________" class="input-field">
        </div>

        <div class="input" >
          <textarea id='input-content' name="content" value="" class="input-field" onkeypress="countWords(this)" onkeydown='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
        </div>
        
        <div class="" >
        <i class="bi bi-file-earmark-image"></i>
          <input id='input-url' type="text" name="image" value="" placeholder="Add an image url" class="input-field" style="width:95%">
        </div>
    
      </form>
      
	</div>
</div>

    
  
      `;
    }

    renderHomeDisplay(){
        return `
        <div class="welcome-home">
          <p>${new Date().toDateString()}</p>
          <h1>Good Morning!</h1>

          <p>"Your word is a lamp for my feet, a light on my path." - Psalms 115:105</p>
        </div>

        <div>
          Statistics

          entries

          this week
          

          Start date
        </div>

        
        
          
        
        
        `
    }
  
    
  }
  

  

  