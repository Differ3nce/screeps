var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');
var roleHealer = require('role.healer');

module.exports = {
    harvester: roleHarvester,
    upgrader: roleUpgrader,
    builder: roleBuilder,
    attacker: roleAttacker,
    healer: roleHealer,
};