class Category {
    
    constructor(id, attributes) {
      this.id = id;
      this.name = attributes.name;
      this.devotions = attributes.devotions
      Category.all.push(this);
    }
  
     pickColor() {
              
        // Array containing colors
        var colors = [
            '#34eb34', '#3474eb', '#8034eb',
            '#eb34e2', '#eb6b34', '#ff6600',
            `#d40441`,`#73ccb8`,`#ab6ec9`,
            `#58c358`,`#345253`,
            `#67af0`,`#f9290e`,`#63b27`,
            `#42212a`,`#25ce54`
        ];
          
        // selecting random color
        let random_color = colors[Math.floor(Math.random() * colors.length)];
        return random_color;
        
    } 


    renderCategory() {
        
      return `
        
          <div >
            <a class="more-link" class="alignleft" id=${this.id} style="color:${this.pickColor()}">${this.name}</a>
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
  