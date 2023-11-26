//static item class

//each static item has an image, (x,y) coordinates, a width, and a height
class staticItem {
    constructor(img, x, y, w, h) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
    
    //display image
    display() {
      //flip image
      if (flipImage){
      scale(-1, 1);
      image(this.img, -this.x, this.y,this.w,this.h);
      }
      else{
        image(this.img, this.x, this.y, this.w, this.h);
      }

    }

    
  }
  
  