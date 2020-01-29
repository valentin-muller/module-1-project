"use strict";

function Enemy(canvas, speed) {
    //this.position = [];
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    
    this.width = 53;
    this.height = 400;
    //this.gap = 85;
    
    this.x = this.canvas.width + this.height;
    
    this.topY = 0;
    this.bottomY = 650;
    this.y = 0;
    
    
    this.size = this.width * this.height;
    this.speed = speed;
};

Enemy.prototype.draw = function (position) {
    this.ctx.fillStyle = "orange";

    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, position, this.width, this.height);
    //this.ctx.fillRect(this.x, this.bottomY, this.width, this.height);
};

Enemy.prototype.updatePosition = function () {
    this.x = this.x - this.speed;
};

Enemy.prototype.isInsideScreen = function () {
    console.log("isInsideScreen")
    return (this.x + this.width * this.height > 0)

};