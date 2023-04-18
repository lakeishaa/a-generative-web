//height and width variables
var w = window.innerWidth
var h = window.innerHeight
    w = view.bounds.width
    h = view.bounds.height

//random int tool
function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

//initialize variables globally
var colors
var rColor
var rCircleSize
var rCircleX 
var rCircleY

//random variable function
function randomize(){
     colors = ['white', 'orangered']
     rColor = colors[Math.floor(Math.random()*colors.length)]
     rCircleSize = getRandomInt(2, w/4);
     rCircleX = getRandomInt(rCircleSize,w-rCircleSize);
     rCircleY = getRandomInt(rCircleSize,h-rCircleSize);
}
//draw function
function randomCircle(color, positionX, positionY, size){
    //call the randomize function to get random variables
    randomize()
    //draw circle
    var circle = new Path.Circle(positionX,positionY,size)
    circle.fillColor = color
    circle.blendMode = "exclusion"
    //if position is greater than half the height, stretch...
    if(positionY > h/2){
        circle.scale(Math.random()*5,.5)
    }
}

//call the function a bunch
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)
randomCircle(rColor, rCircleX, rCircleY, rCircleSize)