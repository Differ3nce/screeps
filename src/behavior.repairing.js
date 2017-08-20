var mainlib = require('mainlib');

var repairing = {
    name: "repairing",
    text: '🚧 repair',
    run: function(creep) {
        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.hits < 0.999 * structure.hitsMax)
                }
            });
        if(targets.length) {
            console.log(targets)
            targets = targets.sort(function(a, b){ a.hits - b.hits });
            console.log(targets)
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
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

module.exports = repairing;