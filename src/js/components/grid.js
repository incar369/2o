export default class grid{
    constructor(ctx,grid_cell_size,cell_max_size,grid_color){
        this.grid_cell_size=grid_cell_size||30
        this.cell_max_size=cell_max_size|| 4
        this.color=grid_color||'#d3d3d3'
        this.pool=[]
        this.ctx=ctx
        this.h=this.ctx.height
        this.w=this.ctx.width
        this.count_cell_of_height = Math.floor(this.h/this.grid_cell_size)
        this.cell_count = this.cell_max_size>this.count_cell_of_height?this.count_cell_of_height:this.cell_max_size
    }
    draw(){
        let grid_length = this.cell_count*this.grid_cell_size
        let start_x = (this.w-grid_length)/2
        let start_y = (this.h-grid_length)/2

        for(let i = 0;i<this.cell_count+1;i++){
            this.drawLine(
                start_x+(i*this.grid_cell_size),
                start_y,
                start_x+(i*this.grid_cell_size),
                start_y+grid_length)
            this.drawLine(
                start_x,
                start_y+(i*this.grid_cell_size),
                start_x+grid_length,
                start_y+(i*this.grid_cell_size))
        }

    }
    render(){

    }
    drawLine(x,y,xl,yl){
        this.ctx.strokeStyle = this.color
        this.ctx.lineWidth = 1;
        this.ctx.beginPath()
        this.ctx.moveTo(x,y)
        this.ctx.lineTo(xl,yl)
        this.ctx.stroke();
    }
    addGridPool(){


        for(let x=0;x<this.cell_count+1;x++){
            for(let y=0;y<this.cell_count+1;y++){
                this.pool.push({x:x*this.grid_cell_size,y:y*this.grid_cell_size})
            }
        }
    }
    init(){this.addGridPool()}
    upper(obj){if(obj){obj.pool=this.pool}}
}