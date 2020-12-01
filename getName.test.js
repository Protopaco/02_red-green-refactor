const getName = require('./getName.js');

describe('returns name value from recieved object', () => {
    it('returns the name spot', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const name = getName(spot);

        expect(name).toEqual('spot');
    });

    it('returns the name Aang', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const name = getName(character) // returns Aang

        expect(name).toEqual('Aang');
    })
});

