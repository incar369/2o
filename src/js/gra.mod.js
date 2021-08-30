import _mod from "./mod.mod"
import cfg from "./cfg";
import _test from "./test.object"
import randomInt from "./randomInt";


class Gra extends _mod{
	constructor(){
        super('Gra','prim')
		this.canvas = (function(){
            let c = document.createElement('canvas')
            c.style.backgroundColor='#202020'
            document.body.appendChild( c )
            return c
        })()
        this.context = this.canvas.getContext("2d")
        this.poolRenderObjects=[]
        this.id=0;
	}

    resize(){
        [this.context.height,this.context.width]=[this.canvas.height,this.canvas.width]=[window.innerHeight,window.innerWidth]
    }
    update(){}
    draw(){

        this.poolRenderObjects.forEach((v,i,a)=>{
            if(v){
                if(v.work){
                    v.work(this.context)
                }
                if(v.draw){
                    v.draw(this.context)
                }
                if(v.kill){
                    let res = v.kill(this.context)
                    if(res==true){
                        delete a[i];
                        this.addRenderObjects(_test,window.innerWidth/2,window.innerHeight/2)
                    }
                    
                }
            }
        })
    }
    init(){this.animLoop()}

    addRenderObjects(obj,x,y){
        let _cfg = cfg
        _cfg.angle=randomInt(0,_cfg.angleCount)*(360/_cfg.angleCount)
        
        this.poolRenderObjects.push(new obj(this.id++,_cfg,x,y))
    }

    animLoop (){
        //this.resize()
        this.update()
        this.draw()
        requestAnimationFrame(()=>this.animLoop())
    }
}
export default Gra