import eng from "./engine/eng.mod";
import gra from "./engine/gra.mod";
import ev from "./engine/event.mod";

import grid from "./components/grid";
import vec from "./components/vector";

let Eng=global.eng=new eng()

Eng.addModule(gra)
Eng.addModule(ev)

Eng.Gra.resize()

Eng.Gra.addRenderObjects(new grid(Eng.Gra.context,50,18))

let grid_cell_size= 50
let cell_max_size = 18
let h=window.innerHeight
let w=window.innerWidth
let count_cell_of_height = Math.floor(h/grid_cell_size)
let c_c =  cell_max_size>count_cell_of_height?count_cell_of_height:cell_max_size
let grid_length = c_c*grid_cell_size
let start_x = (w-grid_length)/2
let start_y = (h-grid_length)/2

for(let i =0;i<cell_max_size+1;i++){
    for(let j =0;j<cell_max_size+1;j++){
        Eng.Gra.addRenderObjects(new vec(Eng.Gra.context,{x:start_x+(grid_cell_size*i),y:start_y+(grid_cell_size*j)}))
    }
}
Eng.Gra.addRenderObjects(new vec(Eng.Gra.context,{x:start_x,y:start_y}))
Eng.Gra.addRenderObjects(new vec(Eng.Gra.context,{x:start_x+50,y:start_y}))

console.log(Eng)
//-------------------------------------------------------------------------------
document.addEventListener('keydown',function(e){
    if(e.key=="Enter"){}
})
document.addEventListener('resize',function(){
    Eng.Gra.resize()
})
//-------------------------------------------------------------------------------
