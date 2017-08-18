var mainlib = require('mainlib');
var behaviortype = require('behavior');

var roleAttacker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.behavior === undefined) creep.memory.behavior = behaviortype.attacking;

        var targets = creep.room.find(FIND_HOSTILE_CREEPS);

        if(creep.memory.behavior.name == behaviortype.attacking.name && targets.length == 0 ) {
            creep.memory.behavior = behaviortype.scouting; 
            creep.say(creep.memory.behavior.text);
	    }
	    
	    if(creep.memory.behavior.name == behaviortype.scouting.name && targets.length > 0) {
	        creep.memory.behavior = behaviortype.attacking; 
	        creep.say(creep.memory.behavior.text);
	    }

	    behaviortype[creep.memory.behavior.name].run(creep);
	}
};

module.exports = roleAttacker;