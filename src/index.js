const endPoint = "http://localhost:3000/api/v1/devotions";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
  const app = new App();
  app.attachEventListeners();

  app.adapter.fetchDevotions().then(app.createDevotions); 
  app.adapter.fetchCategories().then(app.createCategories); 
  app.handleHomeClick();

});

