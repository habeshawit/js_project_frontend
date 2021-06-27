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

    // this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#devotion-container').addEventListener('click', this.handleDevotionClick);
    document.querySelector('#categories-container').addEventListener('click', this.handleCategoryClick);
    document.querySelector('#home').addEventListener('click', this.handleHomeClick);
    document.querySelector('#devo-form').addEventListener('click', this.handleDevotionAdd);
    // document.querySelector("#filter-button").addEventListener('click', this.handleCategoryFilter)  
}

  handleHomeClick(){
    console.log("home clicked");
    const home = new Home();
    document.querySelector('#view-devotion').innerHTML = home.renderHomeDisplay();
  }

  handleDevotionAdd(){
    console.log("add devo added");
    const home = new Home();
    document.querySelector('#view-devotion').innerHTML = home.renderDevotionForm();
    document.querySelector("#create-devotion-form").addEventListener('submit', this.createFormHandler);  

  }


  createDevotions(devotions) {
    devotions.data.forEach(devotion => {
      new Devotion(devotion.id, devotion.attributes);
    });
    this.addDevotions();
  }

  createCategories(categories) {
    categories.data.forEach(category => {
      new Category(category.id, category.attributes);
    });
    this.addCategories();
  }

 
  addDevotions() {
    document.querySelector('#devotion-container').innerHTML = '';
    Devotion.all.forEach(
      devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
    );
  }

  addCategories() {
    document.querySelector('#categories-container').innerHTML = `<a class="more-link" id="all" >All Entries</a><br><br>`;
    Category.all.forEach(
      devotion => (document.querySelector('#categories-container').innerHTML += devotion.renderCategory())
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    const title = e.target.querySelector("#input-title").value;
    const date = e.target.querySelector("#input-date").value;
    const verse = e.target.querySelector("#input-verse").value;
    const content = e.target.querySelector("#input-content").value;
    const image_url = e.target.querySelector("#input-url").value;
    const category_id = parseInt(e.target.querySelector("#categories").value);
    
    const jsonBody = {devotion,title,date,verse,content,image_url,category_id};

    this.adapter.updateDevotion(devotion.id, jsonBody).then(updatedDevotion => {
     console.log(this);
      const devotion = Devotion.findById(updatedDevotion.data.id);
      devotion.update(updatedDevotion.data.attributes);
      this.addDevotions();
      document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();
      document.querySelector("#edit-btn").addEventListener('click', this.handleDevotionClick);  

    });
    
    
  }

  handleDevotionClick(e) {
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    if(e.target.id === "edit-btn"){
      console.log("Edit Button Clicked");
      document.querySelector('#view-devotion').innerHTML = devotion.renderUpdateForm();
      document.querySelector("#edit-devotion-form").addEventListener('submit', this.handleFormSubmit);  
    }
    else if(e.target.id === "image-box")
    {      
      document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();
      document.querySelector("#edit-btn").addEventListener('click', this.handleDevotionClick);  

      console.log("Image Clicked");

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

  // handleCategoryFilter(e) {
  //   const id = parseInt(document.querySelector('#categories-filter').value)
  //   const result = Devotion.all.filter(devotion => devotion.category.id === id);
  //   document.querySelector('#devotion-container').innerHTML = ""
  //   result.forEach(
  //     devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
  //   );

  // }

  createFormHandler(e) {
    e.preventDefault();
    
    const title = document.querySelector("#input-title").value;
    const date = document.querySelector("#input-date").value;
    const content = document.querySelector("#input-content").value;
    const verse = document.querySelector("#input-verse").value;
    const image = document.querySelector("#input-url").value;
    const categoryId = parseInt(document.querySelector("#categories").value);
    this.postFetch(title, date, content,verse, image, categoryId);
  }

  postFetch(title, date, content, verse, image_url, category_id){
    let bodyData = {title, date, content, verse, image_url, category_id}
    
    fetch(endPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData),     
    })
    .then(response => response.json())
    .then(devotion => {
      const devotionData = devotion.data
      const newDevotion = new Devotion(devotionData.id, devotionData.attributes);
      document.querySelector(
        "#devotion-container"
      ).innerHTML += newDevotion.renderDevotion();

    //  $('#create-devotion-form')[0].reset();
     document.querySelector("#create-devotion-form").reset()
     document.querySelector('#view-devotion').innerHTML = newDevotion.renderDevotionDetails();
    }) 
  }

  handleImageClick(e){
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();

  }

}
