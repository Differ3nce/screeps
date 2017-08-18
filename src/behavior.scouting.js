var mainlib = require('mainlib');

var scouting = {
    name: 'scouting',
    text: '👁️ scout',
    run: function(creep) {
        creep.moveTo(mainlib.location.randomPos(creep.pos));
    }
}

module.exports = scouting;