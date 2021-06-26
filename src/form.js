class Form {
  
    renderDevotionForm() {
      return `
      
      <form id="create-devotion-form" style="">
          
      <h3>Add a devotion!</h3>
      <div class="form-group row">
        <input id='input-title' type="text" name="title" value="" placeholder="Title" class="form-control">
      </div>

      <div class="form-group row">
        <input id='input-date' type="text" name="date" value="" placeholder="Date" class="form-control">
      </div>

      <div class="form-group row">
        <input id='input-verse' type="text" name="verse" value="" placeholder="Verse" class="form-control">
      </div>

      <div class="form-group row">
        <textarea id='input-content' name="content" rows="5" cols="80" value="" placeholder="Enter your thoughts..." class="form-control"></textarea>
      </div>

     <div class="form-group row">
        <input id='input-url' type="text" name="image" value="" placeholder="Image URL" class="form-control">
      </div>
      
      <div class="form-group row">
        <select class="form-control form-control-sm" id="categories" name="categories">
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
      
      <input id= 'create-button' type="submit" name="submit" value="Create Devotion" class="btn btn-primary">

    </form> 

  
      `;
    }
  
    
  }
  

  