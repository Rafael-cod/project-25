class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.bottomBody = Matter.Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.bottomBody);

      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.image = loadImage("dustbingreen.png");
    }
    display(){
      var pos = this.bottomBody.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      imageMode(CENTER);
      image(this.image, 0, 0, 150, 150);
      pop();
    }
  }
  
