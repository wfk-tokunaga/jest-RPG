const { expect } = require('@jest/globals');
const exp = require('constants');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

// Replace the constructor's implementation with our faked data
jest.mock('../lib/Potion');
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Eika');

    expect(player.name).toBe('Eika');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})