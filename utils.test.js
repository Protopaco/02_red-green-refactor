const { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } = require('./utils.js');
const fetch = require('superagent')
jest.mock('superagent')

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
        let returnedArray = copyAndPush(numbers, 4) // return [1, 2, 3, 4];

        expect(returnedArray).toEqual([1, 2, 3, 4]);
    });

    it('makes sure original array is unchanged', () => {
        const numbers = [1, 2, 3];
        let returnedArray = copyAndPush(numbers, 4);

        expect(numbers).toEqual([1, 2, 3]);


    })
})

describe('tests function capitalizeAndFilter', () => {
    it("returns array ['SPOT', 'ROVER', 'BINGO']", () => {
        const strings = ['spot', 'rover', 'bingo', 'fred'];
        let returnedArray = capitalizeAndFilter(strings);

        expect(returnedArray).toEqual(['SPOT', 'ROVER', 'BINGO']);
    })

    it("returns array ['TOAD', 'PETER', 'GEORGE']", () => {
        const strings = ['frog', 'toad', 'peter', 'george'];
        let returnedArray = capitalizeAndFilter(strings);

        expect(returnedArray).toEqual(['TOAD', 'PETER', 'GEORGE']);
    })
})


// describe('tests function fetchQuotes', () => {
//     it('returns single Futurama quote', async () => {
//         const quote = {
//             "name": expect.any(String),
//             "text": expect.any(String),
//             "image": expect.any(String),
//         };

//         const returnedQuote = await fetchQuotes();

//         expect(returnedQuote).toEqual(quote);
//     })
// })

describe('tests fetchQuotes with jest.mock', () => {
    it('fetches the first five rick and morty characters', async () => {

        const quote = {
            "name": expect.any(String),
            "text": expect.any(String),
            "image": expect.any(String),
        };

        fetch.get.mockResolvedValue({
            body: [{
                character: 'any name',
                quote: 'any quote',
                image: 'any image url'
            }]
        });

        const returnedQuote = await fetchQuotes();

        expect(returnedQuote).toEqual(quote);
    })
})