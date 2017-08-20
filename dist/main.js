var role = require('role');
var spawnBasic = require('spawn.basic');

module.exports.loop = function () {
    for(var name in Game.spawns) {
        var spawn = Game.spawns[name];
        switch(spawn.memory.role)
        {
            case 'basicGenerator':
                spawnBasic.run(spawn);
                break;
        }
    }
    //spawnBasic.run(Game.spawns['Spawn1']);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        role[creep.memory.role].run(creep);
    }
    
    if(Game.spawns['Spawn1'].memory.role === undefined) Game.spawns['Spawn1'].memory.role = 'basicGenerator'
}