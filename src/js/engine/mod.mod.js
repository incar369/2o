class Mod{
	constructor(modName, modType){
        this.name = modName
		this.type = modType
	}
    addModule(module) {
		if(module.prototype.constructor && true){
			this[module.name] = new module();
            this[module.name].upperLevelModule=this

			if(this[module.name].init){this[module.name].init()}
		}
	}
}
export default Mod

