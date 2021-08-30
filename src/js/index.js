import _eng from "./eng.mod";
import _gra from "./gra.mod";
import _test from "./test.object"
import cfg from "./cfg";



let Eng=global.eng=new _eng()


Eng.addModule(_gra)
Eng.Gra.resize()


for(let i=0;i<cfg.count;i++){
    Eng.Gra.addRenderObjects(_test,window.innerWidth/2,window.innerHeight/2)
}


console.log(Eng)
//-------------------------------------------------------------------------------
document.addEventListener('keydown',function(e){
    //if(e.key=="Enter")console.log(Eng.Gra.poolRenderObjects[0])
    if(e.key=="Enter"){}
})
document.addEventListener('resize',function(){
    Eng.Gra.resize()
})
//-------------------------------------------------------------------------------
