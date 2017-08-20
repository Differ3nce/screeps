var mainliblocations = {
    
    /** @param {RoomObject} itemA, {String} itemBtype **/
    closestItem: function(itemA, itemBtype)
    {
        if(typeof itemBtype == 'number' ){
            var itemsB = itemA.room.find(itemBtype);
        } else {
            var itemsB = itemBtype;
        }        
        var smallestDist = 10000000;
        for(var itemB in itemsB)
        {
            if(itemA.pos.getRangeTo(itemsB[itemB]) < smallestDist)
            {
                var bestItemB = itemsB[itemB];
                smallestDist = itemA.pos.getRangeTo(itemsB[itemB]);
            }
        }
        return bestItemB;
    },
    
    /** @param {RoomPosition} position **/
    randomPos: function(position)
    {
        var randompos = new RoomPosition(Math.floor(Math.random() * 50), Math.floor(Math.random() * 50), position.roomName);
        return randompos;
    },
};

module.exports = mainliblocations;