var mainlib = require('mainlib');

var building = {
    name: "building",
    text: '🚧 build',
    run: function(creep) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            } else {
                var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
                if(creep.pos.getRangeTo(source) <= 3) {
                    creep.moveTo(mainlib.location.randomPos(creep.pos));
                    creep.say('↗ ️Moving out of way ');
                }
            }
        } else {
            var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
            if(creep.pos.getRangeTo(source) <= 3) {
                creep.moveTo(mainlib.location.randomPos(creep.pos));
                creep.say('↗ ️Moving out of way ');
            }
        }
    },
}

module.exports = building;