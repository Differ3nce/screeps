var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawnSettings = require('spawn.settings');

var spawnBasic = {

    /** @param {Spawn} spawn **/
    run: function(spawn) {
	    for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                console.log('Creep died: ' + name + ' ('+ Memory.creeps[name]['spawnType'] +')');
                delete Memory.creeps[name];
            }
        }
        
        //Determine energylevel
        var targets = spawn.room.find(FIND_MY_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION)
            }
        });
        var amountOfExtensions = targets.length;
        
        var level = 0
        for(i=0; i <= 8; i++) {
            if(amountOfExtensions >= CONTROLLER_STRUCTURES["extension"][i])
            {
                level = i;
            }
        }

        var spawnSettingsWithLevel = spawnSettings[level];
        
        var spawnSettingsOrdered = spawnSettingsWithLevel.sort(function(a,b){ return b['order'] - a['order']; });
    
        for(var spawnType of spawnSettingsOrdered)
        {
            var spawnsOfType = _.filter(Game.creeps, (creep) => creep.memory.spawnType == spawnType['typename']);
            if(spawnsOfType.length < spawnType['max']) {
                var newName = spawn.createCreep(spawnType['components'], undefined, {role: spawnType['role'], spawnType: spawnType['typename']});
                if(typeof newName == 'string') console.log('Spawning new '+ spawnType['typename'] +': ' + newName);
            }
        }
        
        if(spawn.spawning) { 
            var spawningCreep = Game.creeps[spawn.spawning.name];
            spawn.room.visual.text(
                '🛠️' + spawningCreep.memory.spawnType,
                spawn.pos.x + 1, 
                spawn.pos.y, 
                {align: 'left', opacity: 0.8});
        }
	}
};

module.exports = spawnBasic;