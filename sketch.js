var clickCount = 0,score = 0,timer = 90,maximumClicks = 11;
var riddleArray = [
  "1. To get another fruit Put me after pine",
  "2. We can be boring or interesting/ We can be long or short",
  "3. I am a orange vegetable is a favorite of bugs bunny",
  "4. Squeeze it and it cries tears as red as its flesh, but its heart is made of stone",
  "5. I carry papers in me",
  "6. I can sometimes be electric although i am not a car",
  "7. I am a audio source which emits sound",
  "8. What has keys but no locks, Space but no room, you can enter but you can’t exit.",
  "9. I am used to identify a person"
]
var initialText = "Click on arrow keys to get the riddle"
var index = -1
var level = 1;
function preload(){
  roomImg = loadImage("assets/room.jpg")
  appleImg = loadImage("assets/apple.png")
  bookImg = loadImage("assets/book.png")
  guitarImg = loadImage("assets/guitar.png")
  headphonesImg = loadImage("assets/headphones.png")
  keyboardImg = loadImage("assets/keyboard.png")
  nameTagImg = loadImage("assets/nameTag.png")
  carrotImg = loadImage("assets/carrot.png")
  cherryImg = loadImage("assets/cherry.png")
  folderImg = loadImage("assets/folder.png")
  playerImg = loadImage("assets/player.png")
  rightImg = loadImage("assets/rightArrow.png")
  leftImg = loadImage("assets/leftArrow.png")
  lostImg = loadImage("assets/lost.jpg")
  winImg = loadImage("assets/youWin.jpg")
  level2Img = loadImage("assets/level2.png")

  classImg = loadImage("assets2/Class.jpg")
}

function setup() {
  createCanvas(displayWidth-15,displayHeight-125);


  keyboard = createSprite(30,height-60,10,10)
  keyboard.addImage(keyboardImg)
  keyboard.scale = 0.5

  headphones = createSprite(width-50,170,10,10)
  headphones.addImage(headphonesImg)
  headphones.scale = 0.25

  book = createSprite(width/2+350,height-160,10,10)
  book.addImage(bookImg)
  book.scale = 0.4

  folder = createSprite(width/2+200,height-90,10,10)
  folder.addImage(folderImg)
  folder.scale = 0.4

  cherry = createSprite(width/2-50,height/2+100,10,10)
  cherry.addImage(cherryImg)
  cherry.scale = 0.1

  carrot = createSprite(250,height/2+130,10,10)
  carrot.addImage(carrotImg)
  carrot.scale = 0.07

  guitar = createSprite(width-150,height/2+140,10,10)
  guitar.addImage(guitarImg)
  guitar.scale = 0.25

  nameTag = createSprite(width/2+100,height/2+100,10,10)
  nameTag.addImage(nameTagImg)
  nameTag.scale = 0.25

  apple = createSprite(230,height/2-15,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.06

  player = createSprite(width/2,height/2+110,10,10)
  player.addImage(playerImg)
  player.scale = 0.4

  left = createImg("assets/leftArrow.png")
  left.position(100,height-70)
  left.size(50,50)
  left.mouseClicked(decreaseIndex)

  right = createImg("assets/rightArrow.png")
  right.position(170,height-70)
  right.size(50,50)
  right.mouseClicked(increaseIndex)

  /*level2 = createImg("assets/level2.png")
  level2.position(300,height/2)
  level2.size(50,50)
  level2.mouseClicked(level2Code)*/
}


function draw() {
   
  if(level == 1){
    background(roomImg);
  } else{
    
     background(classImg)
  }
  player.x = mouseX
  player.y = mouseY
  push()
  fill("black")
  textSize(20)
  text("Score: "+score,width/2-100,87)
  text("Time Left = "+timer+" seconds",width-250,50)
  text("Clicks Left : "+maximumClicks,width-500,50)
  text (initialText,250,height-32)
  pop()

  spriteDetection()
  showRiddles()
  

  if(frameCount%30 == 0){
    timer-=1
  }
   
if(score >= 35&&level == 1){
   gameEnding()
}
if((maximumClicks == 0||timer == 0)&&score<35&&level== 1){
   gameOver()
}

  drawSprites();
}

function showRiddles(){
  textSize(20)
    fill("red")
  if(index == 0){
    text(riddleArray[index],50,50 )
  }
  if(index == 1){
    text(riddleArray[index],50,50 )
  }
  if(index == 2){
    text(riddleArray[index],50,50 )
  }
  if(index == 3){
    text(riddleArray[index],50,50 )
  }
  if(index == 4){
    text(riddleArray[index],50,50 )
  }
  if(index == 5){
    text(riddleArray[index],50,50 )
  }
  if(index == 6){
    text(riddleArray[index],50,50 )
  }
  if(index == 7){
    text(riddleArray[index],50,50 )
  }
  if(index == 8){
    text(riddleArray[index],50,50 )
  }
  
}

function decreaseIndex(){
index--
if(index == -1){
   index = 8
}
maximumClicks+=1
}
function increaseIndex(){
  index++
  if(index == 9){
     index = 0
  }
  maximumClicks++
  }

function spriteDetection(){
  
if(mousePressedOver(apple)&&apple.visible == true&&index == 0){
  score+=5
  apple.visible = false
  clickCount++
}
if(mousePressedOver(book)&&book.visible == true&&index == 1){
  score+=5
  book.visible = false
  clickCount++
}
if(mousePressedOver(carrot)&&carrot.visible == true&&index == 2){
  score+=5
  carrot.visible = false
  clickCount++
}
if(mousePressedOver(cherry)&&cherry.visible == true&&index == 3){
  score+=5
  cherry.visible = false
  clickCount++
}
if(mousePressedOver(folder)&&folder.visible == true&&index == 4){
  score+=5
  folder.visible = false
  clickCount++
}
 if(mousePressedOver(guitar)&&guitar.visible == true&&index == 5){
  score+=5
  guitar.visible = false
  clickCount++
}
if(mousePressedOver(headphones)&&headphones.visible == true&&index == 6){
  score+=5
  headphones.visible = false
  clickCount++
}
if(mousePressedOver(keyboard)&&keyboard.visible == true&&index == 7){
  score+=5
  keyboard.visible = false
  clickCount++
}
if(mousePressedOver(nameTag)&&nameTag.visible == true&&index == 8){
  score+=5
  nameTag.visible = false
  clickCount++
}



}

function mouseReleased(){
  maximumClicks-=1
}

function gameEnding(){
  black3 = createSprite(width/2,height/2,width,height)
  black3.shapeColor = "black"

  win = createSprite(width/2,height/2-100,width,height)
  win.addImage(winImg)
  win.scale = 1

  

  
}

function gameOver(){
  black2 = createSprite(width/2,height/2,width,height)
  black2.shapeColor = "black"

  black = createSprite(width/2,height/2,width,height)
  black.addImage(lostImg)
  black.scale = 2
  
  
}


function level2Code(){
  level = 2
  black3.visible = false
    
  win.visible = false
   console.log("hello")
   
}