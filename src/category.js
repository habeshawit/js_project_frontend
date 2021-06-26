class Category {
    
    constructor(id, attributes) {
      this.id = id;
      this.name = attributes.name;
      Category.all.push(this);
    }
  
    renderCategory() {
      return `
      
          <div>
            <a class="more-link" id=${this.id}>${this.name}</a>
          </div>
  
      `;
    }
  
    renderCategoryUpdateForm() {
      return `
    
    `;
    }
  
    //Can call it on the devotion class itself
    static findById(id) {
      return Category.all.find((category) => category.id == id);
    }
  
    //prettier-ignore
    // update({ title, date, verse, content, image_url, category }) {
    //   this.title = title;
    //   this.date = date;
    //   this.verse = verse;
    //   this.content = content;
    //   this.image_url = image_url;
    //   this.category = category;
    // }
  
//     renderDevotionDetails() {
//       return `
      
//       <div class="render-details">
//       <div classs="detail-header" style="line-height:0.25!important; margin-bottom:25px!important">
//         <h2><strong></strong>${this.title}
  
//         <button type="button" style="background: transparent;
//           border: none;" data-id=${this.id}>
//           <i class="fa fa-edit" ></i> 
//         </button></h2>
  
//         <p class="text-muted" ><strong></strong>${this.date}</p>
//         <p ><strong>CATEGORY: </strong>${this.category.name}</p>
  
//       </div>
              
//         <img src=${this.image_url} class="card-text" width="400px" height="300px" style="border-radius:0.5rem; text-align:justify"><br><br>
  
//         <h4>${this.verse}</h4>
  
//         <p class="card-text">${this.content}</p>
  
        
//       </div>
      
//     `;
//     }
  }
  
  Category.all = [];
  