class Paper{
    constructor(x, y, r) {

        var options = {
            'restitution':0.3,
            'isStatic' : false,
            'friction':0,
            'density':1.2
        }


        this.x = x;
        this.y=y;
        this.r=r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        
        World.add(world, this.body);

      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        // strokeWeight(3);
        fill(255,0,255);        
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }

}