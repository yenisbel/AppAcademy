const Util = {
    inherits(childClass, parentClass){
        function Surrogate() {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
      // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },
    
    calcDistance(pos1, pos2) {
        let x1 = pos1[0];
        let y1 = pos1[1];
        let x2 = pos2[0];
        let y2 = pos2[1];
        return Math.hypot(x1-x2, y1-y2);
    }

    // calcDistance(pos1, pos2) {
    //     return Math.sqrt(
    //         Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    //     );
    // },

}


module.exports = Util;