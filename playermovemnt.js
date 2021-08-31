var WIDTH = 1500;
var HEIGHT = 900;

var canvas = document.getElementById('ctx')
var ctx = canvas.getContext("2d");
canvas.focus();
canvas.addEventListener("keydown", movePlayer);
        
        var xPos = 50;
        var yPos = 50;
        
        var keys = {
            up: false,
            right: false,
            left: false
        }
        
        var speed = 5;
        
        function movePlayer(event){
            switch(event.KeyCode){
                case 39:
                    keys["right"] = true;
                    break;
                case 37:
                    keys["left"] = true;
                    break;
        
                }
        }
        function keyUp (event){
            switch(event.KeyCode){
                case 39:
                    keys["right"] = false; 
                    break;
                case 37:
                    keys["left"] = false;
                    break;
                }
        }
        
        function update(){
        
        window.requestAnimationFrame(update);
        ctx.clearRect( 0,0, WIDTH, HEIGHT);
        
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.fillRect(xPos, yPos, 50, 50);
        
        if ( keys ["right"] && !keys["up"]) {
            xPos += speed;
        }else if (["left"] && !keys["up"]){
            xPos -= speed;
        }
        
        }
        
        window.requestAnimationFrame(update);