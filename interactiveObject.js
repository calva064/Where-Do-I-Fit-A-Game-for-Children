//interactive object class

//each interactive object has an image, (x,y) coordinates, a width, and a height
class interactiveObject {
    //constructor will eventually include an img argument too. For now, I'm using basic shapes
    constructor(img,x, y, w, h) {
      this.img = img
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.hoverover = false; //default hoverover value to false - assume the object isn't being hovered over
      this.dragging = false; //default dragging value to false - assume the object isn't being dragged
      this.xOff = 0; //track how far item has been dragged from original location in X direction
      this.yOff = 0; //track how far item has been dragged from original location in Y direction
    }
  
    //checks if the mouse is hovering over the interactive object
    hover() {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h
      ) {
        this.hoverover = true;
        cursor(HAND);
      } else {
        this.hoverover = false;
      }
    }
  
    //if the interactive object is clicked,
    itemClicked() {
      if (
        mouseX > this.x &&
        mouseX < this.x + this.w &&
        mouseY > this.y &&
        mouseY < this.y + this.h
      ) {
       
        this.dragging = true;
        // track relative location of click to corner of rectangle
        this.xOff = this.x - mouseX;
        this.yOff = this.y - mouseY;
      }
    }
  
    //draws the interactive object and changes its color depending on if it's hovered over or being dragged. Will eventually be an image rather than a rectangle
    displayInteractiveObject() {
      // Different fill based on state
      
      image(this.img, this.x, this.y, this.w, this.h);
     

    }
  
    //update the interactive objects's location if it has been dragged
    updateLocation() {
      if (this.dragging) {
        cursor(HAND);
        this.x = mouseX + this.xOff;
        this.y = mouseY + this.yOff;
      }
    }
    

  
    //stop dragging the object
    released() {
      this.dragging = false;
    }


     // change the object's location
     pushOut(){
      this.x= windowWidth/5;
      this.y=windowHeight/6;
      
    }

    //reset object's properties to starting values
    reset() {
      this.img = img
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.hoverover = false; //default hoverover value to false - assume the object isn't being hovered over
      this.dragging = false; //default dragging value to false - assume the object isn't being dragged
      this.xOff = 0; //track how far item has been dragged from original location in X direction
      this.yOff = 0;
    }
  }
  