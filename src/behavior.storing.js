var mainlib = require('mainlib');

var storing = {
    name: 'storing',
    text: '🏠 store',
    run: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
        });
        if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            } 
        } else {
            var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
            if(creep.pos.getRangeTo(source) <= 3) {
                creep.moveTo(mainlib.location.randomPos(creep.pos));
                creep.say('↗ ️Moving out of way');
            }
        }
    }
}

module.exports = storing;