class Spell {
    constructor() {
      this.x = random(windowWidth/2,windowWidth/1.5);
      this.y = random(3*windowHeight/5,3*windowHeight/4);
      this.diameter = random(5, 10);
      this.xspeed = 1.6; // Speed of the shape
      this.yspeed = 1; // Speed of the shape
      this.xdirection = -1; // Left or Right
      this.ydirection = 0.5;
      this.mousePressedCheck=0;
    }
  
    display() {
      
      //change spell direction when spell reaches witch
      if (this.x<windowWidth/3 && this.mousePressedCheck==1){
        this.xdirection*=-1;
      }

      //change spell color if mouse is pressed and spell is heading towards dad
      if (this.xdirection>0 && this.mousePressedCheck==1 && this.x<windowWidth/1.4){
        fill(255,0,0)
      }
      //dad absorbs spell
      else if(this.xdirection>0 && this.mousePressedCheck==1 && this.x>=windowWidth/1.4){
        fill(0,0,0,0)
        this.xspeed=0;
        this.yspeed=0;
      }

      else {
      fill(0,220,0)
      }


      noStroke();
      ellipse(this.x, this.y, this.diameter, this.diameter);
      //update ellipse's position
      this.x = this.x + this.xspeed * this.xdirection;
      this.y = this.y + this.yspeed * this.ydirection;


    
  }
    spellAverted() {
      this.xdirection *= -1;
      this.ydirection *= -0.6;
      this.mousePressedCheck=1;
      
    }

}