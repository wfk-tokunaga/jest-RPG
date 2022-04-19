const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {

    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription = function() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

// Inheret prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

module.exports = Enemy;