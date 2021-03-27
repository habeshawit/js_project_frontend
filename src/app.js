//prettier-ignore
class App {

constructor() {
    this.adapter = new Adapter();

    this.handleDevotionClick = this.handleDevotionClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createDevotions = this.createDevotions.bind(this);
    this.addDevotions = this.addDevotions.bind(this);
    this.createFormHandler = this.createFormHandler.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#devotion-container').addEventListener('click', this.handleDevotionClick);
    document.querySelector('#update-devotion').addEventListener('submit', this.handleFormSubmit);
    document.querySelector("#create-devotion-form").addEventListener('submit', this.createFormHandler);    
}

  createDevotions(devotions) {
    console.log(devotions);
    devotions.data.forEach(devotion => {
      new Devotion(devotion.id, devotion.attributes);
    });
    this.addDevotions();
  }

  addDevotions() {
    document.querySelector('#devotion-container').innerHTML = '';
    Devotion.all.forEach(
      devotion => (document.querySelector('#devotion-container').innerHTML += devotion.renderDevotion())
    );
  }

  handleFormSubmit(e) {
    // debugger
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
      const devotion = Devotion.findById(updatedDevotion.data.id);
      devotion.update(updatedDevotion.data.attributes);
      this.addDevotions();
    });
  }

  handleDevotionClick(e) {
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    if(e.target.id === "myBtn"){
      console.log("Button Clicked");
      document.querySelector('#update-devotion').innerHTML = devotion.renderUpdateForm();
    }
    else if(e.target.id === "image-box")
    {      
      document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();
      console.log("Image Clicked");

    }    
  }

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
      // debugger
      const newDevotion = new Devotion(devotionData.id, devotionData.attributes);
      document.querySelector(
        "#devotion-container"
      ).innerHTML += newDevotion.renderDevotion();

     $('#create-devotion-form')[0].reset();
    }) 
  }

  handleImageClick(e){
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const devotion = Devotion.findById(id);
    document.querySelector('#view-devotion').innerHTML = devotion.renderDevotionDetails();

  }

}
