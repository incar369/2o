import mod from "./mod.mod"

export default class Gra extends mod{
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
                if(v.draw){
                    v.draw(this.context)
                }
            }
        })
    }
    init(){this.animLoop()}
    addRenderObjects(obj){
        obj.id = this.id++
        obj.upperLevel_MODULE_ = this
        if(obj.init){obj.init()}
        if(obj.upper){obj.upper(this)}
        this.poolRenderObjects.push(obj)
    }
    animLoop (){
        this.resize()
        this.update()
        this.draw()
        requestAnimationFrame(()=>this.animLoop())
    }
}