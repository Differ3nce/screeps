var mainlib = require('mainlib');

var healing = {
    name: "healing",
    text: "♥️ healing",
    run: function(creep) {
        var targets = creep.room.find(FIND_CREEPS, {
                filter: (ally) => {
                    return (ally.hits < ally.hitsMax)
                }
        });
        
        var ally = mainlib.location.closestItem(creep, targets);
        if(creep.heal(ally) == ERR_NOT_IN_RANGE) {
            creep.moveTo(ally, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
}

module.exports = healing;