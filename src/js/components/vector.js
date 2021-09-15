export default class vec {
    constructor(ctx,obj){
        this.pos={}
        this.pos.x=obj.x
        this.pos.y=obj.y
        this.ctx=ctx
        this.dpos={}
        this.dpos.x=100
        this.dpos.y=100
        this.normalize={}
        this.power=50
        this.ff=0
    }
    draw(){
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = 2;
        this.ctx.beginPath()
        this.ctx.moveTo(this.pos.x,this.pos.y)
        this.ctx.lineTo(this.pos.x+(this.normalize.x*this.power),this.pos.y+(this.normalize.y*this.power))
        this.ctx.stroke();

        let  ob = this.upperLevel_MODULE_.upperLevelModule.Event.m_state
        this.norm(ob.x-this.pos.x,ob.y-this.pos.y)
        this.ff+=0.1
    }
    norm(x,y){
        let loclength = Math.sqrt((x * x) + (y * y))
        let inv_length = (1 / loclength);
        x *= inv_length;
	    y *= inv_length;
        this.normalize = {x,y}
    }    
    init(){}    
    upper(){}  
}