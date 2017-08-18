var mainlib = require('mainlib');

var harvesting = {
    name: "harvesting",
    text: "🔄 harvest",
    run: function(creep) {
        var source = mainlib.location.closestItem(creep,FIND_SOURCES_ACTIVE);
        if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    },
}

module.exports = harvesting;