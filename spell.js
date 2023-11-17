class Spell {
    constructor() {
      this.x = random(width/3,6.5*width/10);
      this.y = random(3*height/5,3*height/4);
      this.diameter = random(5, 10);
      this.xspeed = -2.8; // Speed of the shape
      this.yspeed = 2.2; // Speed of the shape
      this.xdirection = 1; // Left or Right
      this.ydirection = 0.5;
    }
  
    display() {
      fill(148,0,211)
      noStroke();
      ellipse(this.x, this.y, this.diameter, this.diameter);

      //update ellipse's position
      this.x = this.x + this.xspeed * this.xdirection;
      this.y = this.y + this.yspeed * this.ydirection;
     
      //see if the ellipse is near the girl
   if (this.x<-1000){
    this.x=-50;
   }
  }

    spellAverted() {
      this.xdirection *= -1;
      this.ydirection *= -0.1;
    }

}