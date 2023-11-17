//text class

//each piece of text has words,(x,y) coordinates, and a size, (r,g,b) values, and an alpha value
class textObject {
    constructor(words, x, y,size,r,g,b,transparency, myFont) {
      this.words = words;
      this.x = x;
      this.y = y;
      this.size = size;
      this.r = r;
      this.g = g;
      this.b = b;
      this.transparency = transparency;
      this.myFont = myFont
  
    }
    
    //display image
    display() {
      textSize(this.size);
      textFont(myFont);
   fill(this.r,this.g,this.b,this.transparency);
      text(this.words, this.x, this.y);
  
    }
  }