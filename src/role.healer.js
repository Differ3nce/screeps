var mainlib = require('mainlib');
var behaviortype = require('behavior');

var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.behavior === undefined) creep.memory.behavior = behaviortype.healing;

        var targets = creep.room.find(FIND_MY_CREEPS, {
                filter: (ally) => {
                    return (ally.hits < ally.hitsMax)
                }
        });

        if(creep.memory.behavior.name == behaviortype.healing.name && targets.length == 0 ) {
            creep.memory.behavior = behaviortype.scouting; 
            creep.say(creep.memory.behavior.text);
	    }
	    
	    if(creep.memory.behavior.name == behaviortype.scouting.name && targets.length > 0) {
	        creep.memory.behavior = behaviortype.healing; 
	        creep.say(creep.memory.behavior.text);
	    }

	    behaviortype[creep.memory.behavior.name].run(creep);
	}
};

module.exports = roleHealer;