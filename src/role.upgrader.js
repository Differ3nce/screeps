var mainlib = require('mainlib');
var behaviortype = require('behavior');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.behavior === undefined) creep.memory.behavior = behaviortype.upgrading;
        
        if(creep.memory.behavior.name == behaviortype.upgrading.name && creep.carry.energy == 0) {
            creep.memory.behavior = behaviortype.harvesting; 
            creep.say(creep.memory.behavior.text);
	    }
	    
	    if(creep.memory.behavior.name == behaviortype.harvesting.name && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.behavior = behaviortype.upgrading; 
	        creep.say(creep.memory.behavior.text);
	    }

	    behaviortype[creep.memory.behavior.name].run(creep);

	}
};

module.exports = roleUpgrader;