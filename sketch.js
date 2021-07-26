var ghost,hunter,bg,lantern
function preload(){
ghostImage = loadImage('ghost.png')
hunterImage = loadImage('hunter.jpg')
bgImage = loadImage('bg2.jpg')
lanternImage = loadImage('lantern2.jpg')
logImage = loadImage('log sprite.jpg')
}
function setup(){
  createCanvas(800,800)
  bg = createSprite(0,0,800,800)
  bg.addImage(bgImage)
  bg.scale = 6.2 
  ghost = createSprite(700,300)
  ghost.addImage(ghostImage)
  ghost.scale = 0.6
  hunter = createSprite(100,300)
  hunter.addImage(hunterImage)
  hunter.scale = 0.6
  edges = createEdgeSprites()
  invisibleground = createSprite(0,600,2000,20)
  invisibleground.visible = false
  lanternGroup = new Group()
  logGroup = new Group()
 

}
function draw(){
  background('white')
  bg.velocityX= -2
  if (bg.x<0){
  bg.x = bg.width/2
  }
  if(keyDown('space')){
  hunter.y  = hunter.y - 25
  }
  hunter.velocityY = hunter.velocityY + 0.8
  hunter.collide(invisibleground)
   spawnLanterns()
   spawnLog()
     
   drawSprites()


}
function spawnLanterns(){
  if (frameCount % 150===0){
    var lantern = createSprite(800,100,10,10)
    lantern.y = Math.round(random(120,200))
    lantern.addImage(lanternImage)
    lantern.scale = 0.2
    lantern.velocityX = -2
    lantern.lifetime = 400
    lanternGroup.add(lantern)


  }
}
function spawnLog(){
if (frameCount % 200===0){
  var log = createSprite(800,600,10,10)
  log.addImage(logImage)
  log.scale = 0.5
  log.velocityX = -2
  log.lifetime = 400
  logGroup.add(log)

}
}


