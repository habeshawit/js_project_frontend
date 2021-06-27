class Category {
    
    constructor(id, attributes) {
      this.id = id;
      this.name = attributes.name;
      this.devotions = attributes.devotions
      Category.all.push(this);
    }

    // update({ id, name, devotions}) {
    //     // debugger
    //     this.id = id;
    //     this.name = name;
    //     this.devotions = devotions;
    //   }
  
     pickColor() {
              
        // Array containing colors
        var colors = [
            '#34eb34', '#3474eb', '#8034eb',
            '#eb34e2', '#eb6b34', '#ff6600'
        ];
          
        // selecting random color
        var random_color = colors[Math.floor(
                Math.random() * colors.length)];
         console.log(random_color);
        return random_color;
        
    } 


    renderCategory() {
        // debugger
      return `
        
          <div >
            <a class="more-link" class="alignleft" id=${this.id} >${this.name}</a>
            <p class="alignright">${this.devotions.length}</p>
          </div>
          <div style="clear: both;"></div>
  
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
  
    
  }
  
  Category.all = [];
  