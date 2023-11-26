//button class

//each button has an (x,y) position,a width, a height
class Button {
    constructor(x, y, w, h, label) {
      // this.img = img;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.label = label
    }
  
    //display button
    display() {
      // image(this.img, this.x, this.y, this.w, this.h);
      fill(0)
      rect(this.x,this.y,this.w,this.h)
      fill(255, 16, 240)
      textSize(25)
      text(this.label,this.x+50,this.y+25)
      
  
      //change cursor to hand if button is hovered over
      if (this.changeCursor() == true) {
        cursor(HAND);
        fill(0, 255, 0)
      text(this.label,this.x+50,this.y+25)
     
      }
    }
  
    //if the button is clicked, navigate to the next scene by incrementing mode
    buttonClicked() {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h &&mode!=7) {
        mode++;

      }
      else if (mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h &&mode==7) {
        mode=0;
    }
}
  
    //if the button is hovered over, change the mouse to a hand
    changeCursor() {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h
      ) {
        return true;
      } else {
        return false;
      }
    }

    //reset values to starting values
    reset() {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.label = label
    }
    
  }
  