const { getName, copyAndPush } = require('./utils.js');

describe('tests function getName', () => {
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

describe('tests function copyAndPush', () => {
    it('returns array [1,2,3,4]', () => {
        const numbers = [1, 2, 3];
        returnedArray = copyAndPush(numbers, 4) // return [1, 2, 3, 4];

        expect(returnedArray).toEqual([1, 2, 3, 4]);
    });

    it('makes sure original array is unchanged', () => {
        const numbers = [1, 2, 3];
        returnedArray = copyAndPush(numbers, 4);

        expect(numbers).toEqual([1, 2, 3]);


    })
})