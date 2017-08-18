var mainlib = require('mainlib');

var upgrading = {
    name: "upgrading",
    text: '⚡ upgrade',
    run: function(creep) {
    	var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        } else {
            var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
            if(creep.pos.getRangeTo(source) <= 3) {
                creep.moveTo(mainlib.location.randomPos(creep.pos));
                creep.say('↗ ️Moving out of way ');
            }
        }
    },
}

module.exports = upgrading;