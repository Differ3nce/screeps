var mainlib = require('mainlib');

var attacking = {
    name: "attacking",
    text: "⚔️ attack",
    run: function(creep) {
        var enemy = mainlib.location.closestItem(creep,FIND_HOSTILE_CREEPS);
        if([ERR_NOT_IN_RANGE, ERR_NO_BODYPART].indexOf(creep.rangedAttack( enemy )) + 1) {
            if([ERR_NOT_IN_RANGE, ERR_NO_BODYPART].indexOf(creep.attack(enemy)) + 1) {
                creep.moveTo(enemy, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    },
}

module.exports = attacking;