import mod from "./mod.mod"

export default class Event extends mod{
	constructor(){
        super('Event','prim')
        this.m_state={}
        this.m_state.x=0;
        this.m_state.y=0;
	}
    update(){}
    init(){
        global.addEventListener('mousemove',function(e){
            [this.m_state.x,this.m_state.y]=[e.x,e.y]
        }.bind(this))
    }
}