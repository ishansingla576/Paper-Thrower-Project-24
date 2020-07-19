class Dustbin{
    constructor() {
        var options = {
          //restitution:0.8,
            isStatic:true,
            density:5,
            friction:1,
            isfixed:true
            

        }
        this.body1 = Bodies.rectangle(1000,355,200,20,options);
        this.body2 = Bodies.rectangle(900,315,20,100,options);
        this.body3 = Bodies.rectangle(1100,315,20,100,options);
        
        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
      }
      display(){
        var pos1 =this.body1.position;
        var pos2 =this.body2.position;
        var pos3 =this.body3.position;
        push();
        

        rectMode(CENTER);
        fill("Brown");
        rect(pos1.x, pos1.y, 200,20);
        rect(pos2.x, pos2.y, 20,100);
        rect(pos3.x, pos3.y, 20,100);

      }
}