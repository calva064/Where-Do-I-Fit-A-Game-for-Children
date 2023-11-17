//define variables
let mode = 0;
let song;
let myFont;
let buttonContinue;
let transparency = 0;
let transparency2 = 0;
let transparency3 = 0;
let transparency4 = 0;
let transparency5 = 0;
let panda;
let book;
let sock;
let toothbrush;
let textTitleScene1;
let textTitleScene2;
let textStartScene1;
let textStartScene2;
let textLevel1;
let textLevel2;
let textLevel3;
let textSuitcaseScene1;
let textSuitcaseScene2;
let textSuitcaseScene3;
let textSuitcaseScene4;
let textSuitcaseScene5;
let textWitchScene1;
let textWitchScene2;
let textFamilyScene1;
let spells = [];
let girlInPhoto;
let imagesArray =[];
let interactiveObjectArray=[];
let flipImage = false;


function preload() {
  //load in custom font
  myFont = loadFont("HeyTiny.ttf");

  // load in sound
  soundFormats('mp3');
  song = loadSound("song2.mp3");


  //load in images
  for (i=0;i<10;i++){
    imagesArray[i]=loadImage("img"+i+".png")
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);




  //create the spell particles
  for (let i = 0; i < 50; i++) {
    spells.push(new Spell());
  }

  //create the continue button
  buttonContinue = new Button(
    width / 2 - 50,
    (3.7 * height) / 4,
    100,
    30,
    "continue"
  );

  //create the interactive objects
  panda = new interactiveObject(imagesArray[6], 80, 550, 100, 100);
  sock = new interactiveObject(imagesArray[7], 380, 550, 100, 100);
  book = new interactiveObject(imagesArray[8],680, 550,100, 100);
  toothbrush = new interactiveObject(imagesArray[9],980, 550, 100, 100);
  girlInPhoto = new interactiveObject(imagesArray[0],windowWidth/12, 200, windowWidth/1.4, 700);

  //create the static images
  girl = new staticItem(imagesArray[0],windowWidth/12, 200, windowWidth/1.4, 700);
  suitcase = new staticItem(imagesArray[1],1000, 400, 300, 300);
  girl2 = new staticItem(imagesArray[0],windowWidth/1.2, windowHeight/2.75, 1000,600);
  dad = new staticItem(imagesArray[2], windowWidth/1.5, windowHeight/2.4, 175, 400);
  witch = new staticItem(imagesArray[3], windowWidth/4, windowHeight/2.5, 200, 400);
  family = new staticItem(imagesArray[4], windowWidth/2, windowHeight/2.5, 200, 400);
  introCloud = new staticItem(imagesArray[5],-windowWidth/15, windowHeight/15, windowWidth, windowWidth/2);
  introCloud2 = new staticItem(imagesArray[5],windowWidth/8, windowHeight/1.65, windowWidth/1.5, windowWidth/4);

  //Add objects to the interactive object array
  //ChatGPT assisted
  interactiveObjectArray.push(panda);
  interactiveObjectArray.push(sock);
  interactiveObjectArray.push(book);
  interactiveObjectArray.push(toothbrush);

  //create text for title scene
  textTitleScene1 = new textObject(
    "Where Do I Fit?",
    windowWidth / 2,
    windowHeight / 2,
    windowWidth/12,
    0,
    0,
    0,
    255,
    myFont
  );
  textTitleScene2 = new textObject(
    "By Ariel Calver",
    width / 2,
    height / 1.2,
    windowWidth/20,
    0,
    0,
    0,
    255,
    myFont
  );

  //create text for level 3
  textLevel3 = new textObject(
    "Level 3: Happy Families",
    width / 2,
    height / 2,
    0,
    0,
    0,
    transparency5
  );

  //create text for suitcase scene
  textSuitcaseScene1 = new textObject(
    "Pack your bag to head",
    width / 2,
    height / 12 +50,
    70,
    0,
    0,
    0,
    255
  );
  textSuitcaseScene2 = new textObject(
    "to daddy's house this weekend",
    width / 2,
    height / 12 + 120,
    70,
    0,
    0,
    0,
    255
  );
  textSuitcaseScene3 = new textObject(
    '"I hope I did not forget anything!"',
    width / 2,
    height / 12 + 350,
    70,
    0,
    0,
    0,
    255
  );
  textSuitcaseScene4 = new textObject(
    "Make sure to put every item",
    width / 2,
    height / 12 + 200,
    70,
    0,
    0,
    0,
    255
  );
  textSuitcaseScene5 = new textObject(
    "item into your suitcase",
    width / 2,
    height / 12 + 270,
    70,
    0,
    0,
    0,
    255
  );


  //create text for witch scene
  textWitchScene1 = new textObject(
    "Click to stop the Wicked Witch of the West",
    width / 2,
    height / 12 + 30,
    75,
    0,
    0,
    0,
    255,
    myFont
  );

  textWitchScene2 = new textObject(
    "from casting a spell on daddy",
    width / 2,
    height / 12 + 100,
    75,
    0,
    0,
    0,
    255,
    myFont
  );

  //create text for family scene
  textFamilyScene1 = new textObject(
    "Might as well give up",
    width / 2,
    height /3,
    80,
    0,
    0,
    0,
    255,
    myFont
  );
}



function mousePressed() {
  for (let i = 0; i < spells.length; i++) {
    spells[i].spellAverted();
  }

  buttonContinue.buttonClicked();
  for (let i = 0; i < interactiveObjectArray.length; i++) {
    interactiveObjectArray[i].itemClicked();
  }
 
  girlInPhoto.itemClicked();
}

//drop items
function mouseReleased() {
  for (let i = 0; i < interactiveObjectArray.length; i++) {
    interactiveObjectArray[i].released();
  }
  girlInPhoto.released();
}

//if a button is hovered over, change the cursor.
function mouseOver() {
  buttonContinue.changeCursor();
}

function draw() {
  //defaults the cursor to an arrow
  cursor(ARROW);
  switch (mode) {
    case 0:
      
      titleScene();
      break;

    case 1:
      startScene();
      break;

    case 2:
      level1IntroScene();
      break;

    case 3:
      packingScene();
      break;

    case 4:
      level2IntroScene();
      break;

    case 5:
      wwwScene();
      break;

    case 6:
      level3IntroScene();
      break;

    case 7:
      happyFamilies();
      break;
  }
}

function titleScene() {


  background(255, 16, 240);
  introCloud.display();
  introCloud2.display();
  buttonContinue.display();
  textTitleScene1.display();
  textTitleScene2.display();
}

function startScene() {
  background(255, 16, 240);
  //text slowly fades in
  if (transparency < 255) {
    fill(0, 0, 0, transparency);
    textSize(windowWidth/15);
    text('"Where is Daddy,Mummy?"', width / 2, height / 4);
    transparency++;
  } else {
    fill(0, 0, 0, transparency);
    textSize(windowWidth/15);
    text('"Where is Daddy,Mummy?"', width / 2, height / 4);
    if (transparency2 < 255) {
      fill(0, 0, 0, transparency2);
      text('"Dadddddyyyyyyyyyyy"', width / 2, height / 2);
      transparency2++;
    } else {
      fill(0);
      text('"Dadddddyyyyyyyyyyy"', width / 2, height / 2);
      buttonContinue.display();
    }
  }
}

function level1IntroScene() {
  background(255, 16, 240);
  textSize(100);
  if (transparency3 < 250) {
    fill(0, 0, 0, transparency3);
    text("Level 1: Back and Forth", width / 2, height / 2);
    transparency3++;
  } else if (transparency3 < 254) {
    fill(0);
    text("Level 1: Back and Forth", width / 2, height / 2);
    transparency3++;
  } else {
    mode++;
  }
}
function packingScene() {
  background(255, 16, 240);
  textSuitcaseScene1.display();
  textSuitcaseScene2.display();
  textSuitcaseScene4.display();
  textSuitcaseScene5.display();
  suitcase.display();
  girl.display();


  for (let i = 0; i < 4; i++) {
    interactiveObjectArray[i].displayInteractiveObject();
    interactiveObjectArray[i].hover();
    interactiveObjectArray[i].updateLocation();
    
  }

  // if each suitcase item is inside the suitcase, then advance to the next scene
  if (
    panda.x > suitcase.x &&
    panda.x < suitcase.x + suitcase.w &&
    panda.y > suitcase.y &&
    panda.y < suitcase.y + suitcase.h &&
    book.x > suitcase.x &&
    book.x < suitcase.x + suitcase.w &&
    book.y > suitcase.y &&
    book.y < suitcase.y + suitcase.h &&
    sock.x > suitcase.x &&
    sock.x < suitcase.x + suitcase.w &&
    sock.y > suitcase.y &&
    sock.y < suitcase.y + suitcase.h &&
    toothbrush.x > suitcase.x &&
    toothbrush.x < suitcase.x + suitcase.w &&
    toothbrush.y > suitcase.y &&
    toothbrush.y < suitcase.y + suitcase.h
  ) {
    textSuitcaseScene3.display();
    buttonContinue.display();
  }
}

function level2IntroScene() {
  background(255, 16, 240);
  textSize(80)
  if (transparency4 < 250) {
    fill(0, 0, 0, transparency4);
    text("Level 2: Wicked Witch of the West", width / 2, height / 2);
    transparency4++;
  } else if (transparency4 < 254) {
    fill(0);
    text("Level 2: Wicked Witch of the West", width / 2, height / 2);
    transparency4++;
  } else {
    mode++;
  }
}

function wwwScene() {
  background(255, 16, 240);
  dad.display();
  push();
  flipImage=true;
  girl2.display();
  flipImage=false;
  pop();
  witch.display();
  textWitchScene1.display();
  textWitchScene2.display();

  //draw the spell particles
  for (let i = 0; i < spells.length; i++) {
    spells[i].display();
  }

  if (spells[spells.length-1].x<0){
    buttonContinue.display();
   }

}

function level3IntroScene() {
  background(255, 16, 240);
  textSize(80)
  if (transparency5 < 250) {
    fill(0, 0, 0, transparency5);
    text("Level 3: Happy Families", width / 2, height / 2);
    transparency5++;
  } else if (transparency5 < 254) {
    fill(0);
    text("Level 3: Happy Families", width / 2, height / 2);
    transparency5++;
  } else {
    mode++;
  }
}

function happyFamilies() {
  background(255, 16, 240);
  textSize(80)
  fill(0);
  text("Try to fit into the family photo", width / 2, height / 6);
  family.display();
  girlInPhoto.displayInteractiveObject();
  girlInPhoto.hover();
  girlInPhoto.updateLocation();


  //fix the size of the family photo and this should work
  if (girlInPhoto.x > windowWidth/2 &&
    girlInPhoto.x < windowWidth/2+ 200 &&
    girlInPhoto.y > windowHeight/2.5 &&
    girlInPhoto.y < windowHeight/2.5 + 400) 
  {
  girlInPhoto.pushOut();
  buttonContinue.display();
  textFamilyScene1.display();
  }

    //start the game again
    if (buttonContinue.buttonClicked()){
      mode=0;//we need to reset everything, not just set mode =0
    }
  
}



//references
//https://p5js.org/examples/motion-bounce.html
//https://p5js.org/reference/#/p5/textAlign
//https://editor.p5js.org/reginaflores/sketches/qd1AwDzrI
//https://www.fontspace.com/search?q=child
//https://editor.p5js.org/zhouyu/sketches/Yr287hnNk
////https://www.youtube.com/watch?v=DEHsr4XicN8
//https://editor.p5js.org/xinxin/sketches/dqotLWlKU
//https://editor.p5js.org/icm/sketches/BkRHbimhm
//https://www.youtube.com/watch?v=54Ewiui5jYM
//https://p5play.org/learn/sprite.html?page=0
//https://p5js.org/examples/objects-array-of-objects.html
//https://editor.p5js.org/xinxin/sketches/nC-CYIRGt

