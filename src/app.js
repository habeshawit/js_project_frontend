//prettier-ignore
class App {

constructor() {
    this.adapter = new Adapter();

    //bind sets what this is
    this.handleDevotionClick = this.handleDevotionClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createDevotions = this.createDevotions.bind(this);
    this.createCategories = this.createCategories.bind(this);
    this.addDevotions = this.addDevotions.bind(this);
    this.addCategories = this.addCategories.bind(this);
    this.createFormHandler = this.createFormHandler.bind(this);
    this.handleDevotionAdd = this.handleDevotionAdd.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#devotion-container').addEventListener('click', this.handleDevotionClick);
    document.querySelector('#view-devotion').addEventListener('click', this.handleDevotionClick);
    document.querySelector('#categories-container').addEventListener('click', this.handleCategoryClick);
    document.querySelector('#home').addEventListener('click', this.handleHomeClick);
    document.querySelector('#devo-form').addEventListener('click', this.handleDevotionAdd);    
}

  addFeaturedDevo(){
    if(Devotion.all.length!=0){
      const featuredDevotion = Devotion.all[0];
      document.querySelector('#view-devotion').innerHTML += featuredDevotion.renderFeaturedDevo();
    }
  }

  handleHomeClick(){
    console.log("home clicked");
    const home = new Home();
    document.querySelector('#view-devotion').innerHTML = home.renderHomeDisplay();
    // document.querySelector('#start-journal').addEventListener('click', this.handleDevotionAdd);
    this.addFeaturedDevo();
  }

  handleDevotionAdd(){
    console.log("add devo added");
    const home = new Home();
    document.querySelector('#view-devotion').innerHTML = home.renderDevotionForm();
    document.querySelector("#create-devotion-form").addEventListener('submit', this.createFormHandler);

  }

  createDevotions(devotions) {
    Devotion.all = []
    devotions.data.forEach(devotion => {
      new Devotion(devotion.id, devotion.attributes);
    });
    this.addDevotions();
    const featuredDevotion = Devotion.all[0];
    document.querySelector('#view-devotion').innerHTML += featuredDevotion.renderFeaturedDevo();
  }

  createCategories(categories) {
    Category.all = []
    categories.data.forEach(category => {
      new Category(category.id, category.attributes);
    });
    this.addCategories();
  }

 
  addDevotions() {
    document.querySelector('#devotion-container').innerHTML = "";

    Devotion.all.forEach(
      devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
    );
  }

  removeDevotion(){
    document.querySelector('#devotion-container').innerHTML = '';
    Devotion.all.forEach(
      devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
    );
  }

  addCategories() {
    document.querySelector('#categories-container').innerHTML = ` <a class="more-link" id="all" >All Entries</a><br><br>`;
    Category.all.forEach(
      category => (document.querySelector('#categories-container').innerHTML += category.renderCategory())
    );
    
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    const title = e.target.querySelector("#input-title").value;
    const verse = e.target.querySelector("#input-verse").value;
    const content = e.target.querySelector("#input-content").value;
    const image_url = e.target.querySelector("#input-url").value;
    const category_id = parseInt(e.target.querySelector("#categories").value);
    
    const jsonBody = {devotion,title,verse,content,image_url,category_id};

    this.adapter.updateDevotion(devotion.id, jsonBody).then(updatedDevotion => {
     console.log(this);
      const devotion = Devotion.findById(updatedDevotion.data.id);
      devotion.update(updatedDevotion.data.attributes);
      
      this.addDevotions();

      // document.querySelector('#view-devotion').innerHTML = devotion.renderUpdateForm();
      // document.querySelector('#saved-now').innerHTML = `<i class="bi bi-check-lg" style="color:green"></i> Saved a few seconds ago`;
      this.SaveFunction();
      document.querySelector("#edit-btn").addEventListener('click', this.handleDevotionClick);  
      document.querySelector("#delete-btn").addEventListener('click', this.handleDevotionClick);  

    });

    this.adapter.fetchCategories().then(this.createCategories); 

  }

  SaveFunction() {
    let form = document.getElementById("saved-now")
    let originalContent = form.innerHTML
    form.innerHTML = `<i class="bi bi-check-lg" style="color:green"></i> Saved a few seconds ago`
    setTimeout(function() {
      form.innerHTML = originalContent
    }, 5000)
  }

  handleDelete(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);

    fetch(`http://localhost:3000/api/v1/devotions/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(devotion => {
          alert(devotion.message);
          const element = document.getElementById(`devo-${id}`);
          element.parentNode.removeChild(element)
         
        }) 

    // Devotion.all.filter( devotion => {return devotion.id != id})

    Devotion.all = Devotion.all.filter(function(item) {
      return item.id != id;
  });
    // debugger

    this.adapter.fetchCategories().then(this.createCategories); 

    this.handleHomeClick();

  }

  handleDevotionClick(e) {
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    if(e.target.id === "edit-btn"){
      console.log("Edit Button Clicked");
      document.querySelector('#view-devotion').innerHTML = devotion.renderUpdateForm();
      document.querySelector("#edit-devotion-form").addEventListener('submit', this.handleFormSubmit);  
    }
    else if(e.target.id === "read-more")
    {      
      document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();
      document.querySelector("#edit-btn").addEventListener('click', this.handleDevotionClick);  
      document.querySelector("#delete-btn").addEventListener('click', this.handleDevotionClick);  

      console.log("title/read more Clicked");
    }  
    else if(e.target.id === "start-journal")
    {
      this.handleDevotionAdd();
    }
    else if(e.path[1].id === "done-button")
    {
      const id = parseInt(e.path[1].dataset.id);
      const devotion = Devotion.findById(id);
      document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();
    }
    else if(e.target.id === "delete-btn"){
      console.log("delete button clicked");
      this.handleDelete(e);
    }  
  }

  handleCategoryClick(e) {
    const id = parseInt(e.target.id);
    const category = Category.findById(id);
    let result = Devotion.all.filter(devotion => devotion.category.id === id);
    document.querySelector('#devotion-container').innerHTML = ""
    if(e.target.id === "all"){
      result = Devotion.all
      result.forEach(
        devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
      );
    } else if(result.length!=0){
      result.forEach(
        devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
      );
    } else {
      document.querySelector('#devotion-container').innerHTML = `<div class="notice">There are no devotions in this category</div>`
    }
    
    console.log("Category Clicked"); 
  }

  createFormHandler(e) {
    e.preventDefault();
    
    const title = document.querySelector("#input-title").value;
    const content = document.querySelector("#input-content").value;
    const verse = document.querySelector("#input-verse").value;
    const image = document.querySelector("#input-url").value;
    const categoryId = parseInt(document.querySelector("#categories").value);
    this.postFetch(title, content,verse, image, categoryId);
  }

  postFetch(title, content, verse, image_url, category_id){
    let bodyData = {title, content, verse, image_url, category_id}
    
    fetch(endPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData),     
    })
    .then(response => response.json())
    .then(devotion => {
      const devotionData = devotion.data
      const newDevotion = new Devotion(devotionData.id, devotionData.attributes);


      $('#devotion-container').prepend(newDevotion.renderDevotion())

    //  $('#create-devotion-form')[0].reset();
     document.querySelector("#create-devotion-form").reset()
     document.querySelector('#view-devotion').innerHTML = newDevotion.renderDevotionDetails();
     this.SaveFunction();

     document.querySelector("#edit-btn").addEventListener('click', this.handleDevotionClick);  
    document.querySelector("#delete-btn").addEventListener('click', this.handleDevotionClick);  

    this.adapter.fetchCategories().then(this.createCategories); 

    }) 
  }

  handleImageClick(e){
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();

  }

}
