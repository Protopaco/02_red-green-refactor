const getName = require('./getName.js');

describe('returns name value from recieved object', () => {
    it('returns the name spot', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const name = getName(spot);

        expect(name).toEqual('spot');
    });
});