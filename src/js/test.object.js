import randomInt from "./randomInt";
import rgb from "./rgb";

class test{
    constructor(id,cfg,x,y){
        this.id=id
        this.x=x;
        this.y=y;
        this.r=cfg.r;
        this.cl=cfg.color;
        this.max_stp=cfg.steps;
        this.count_step=0;
        this.angle=cfg.angle;
        this.angleCount=cfg.angleCount;
        this.speed = cfg.speed
        this.range = cfg.range
    }
    work(){
        this.steps()
        this.cl=rgb((255/this.range)*(((window.innerWidth/2)-this.x)+this.range/2),0,(255/this.range)*(((window.innerHeight/2)-this.y)+this.range/2))
        if(this.count_step==this.count_step){

                this.chengeDirection(randomInt(0,this.angleCount))

        }

        this.x+=Math.sin(this.angle * Math.PI / 180) * this.speed
        this.y+=Math.cos(this.angle * Math.PI / 180) * this.speed
    }
    draw(ctx){
        ctx.shadowColor = '#202020';
        ctx.shadowBlur = 4;
        ctx.fillStyle=this.cl;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2 * Math.PI)
        ctx.fill();
    }
    chengeDirection(num){
        this.angle=(360/this.angleCount)*num;
    }
    steps(){
        this.count_step++
        if(this.count_step>this.max_stp){
            this.count_step=0;
        }
    }
    kill(){
        let dx = this.x-window.innerWidth/2
        let dy = this.y-window.innerHeight/2
        let distance = Math.sqrt((dx*dx)+(dy*dy))
        //console.log(this.id,distance)
        if(distance>this.range){
            //console.log("kill",this.id)
            return true
        }
    }

}
export default test
