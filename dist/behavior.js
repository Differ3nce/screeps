var harvesting = require('behavior.harvesting');
var storing = require('behavior.storing');
var building = require('behavior.building')
var upgrading = require('behavior.upgrading');
var attacking = require('behavior.attacking');
var scouting = require('behavior.scouting');
var healing = require('behavior.healing');

module.exports = {
    harvesting: harvesting,
    storing: storing,
    building: building,
    upgrading: upgrading,
    attacking: attacking,
    scouting: scouting,
    healing: healing,
};