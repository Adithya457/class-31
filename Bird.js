class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png")
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var Pos = [this.body.position.x,this.body.position.y];
     this.trajectory.push(Pos);
    }
     for(var i = 0; i < this.trajectory.length; i++){
      image(this.image1,this.trajectory[i][0],this.trajectory[i][1])
     }

     
    super.display();
  }
}
