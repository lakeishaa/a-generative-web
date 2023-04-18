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
var rRectangleSize
var rRectangleX 
var rRectangleY

// random varible function
function ranomize(){
    colors = ['white', 'orangered']
    rColor = colors[Math.floor(Math.random()*colors.length)]
    rRectangleSize = getRandomInt(2, w/4);
    rRectangleX = getRandomInt(rRectangleSize,w-rRectangleSize);
    rRectangleY = getRandomInt(rRectangleSize,h-rRectangleSize);
}

randomize ()
console.log(rRectangleSize)