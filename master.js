var x = document.getElementById("h-line");
var y = document.getElementById("v-line");
var plane = document.getElementById("plane");
x.style.top = 0;
y.style.left = 0;
plane.addEventListener("mousemove", function(){
    var xLoc, yLoc;

    if(event.clientX && event.clientY){
        xLoc = event.clientX;
        yLoc = event.clientY;
    }
    
    x.style.top = `${yLoc}px`;
    y.style.left = `${xLoc}px`;
});