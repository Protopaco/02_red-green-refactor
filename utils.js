const fetch = require('superagent');

function getName({ name }) {
    return name;
};

function copyAndPush(array, value) {
    return [...array, value];
};

function capitalizeAndFilter(array) {

    const returnArray = array.reduce(reducer, []);
    return returnArray;
};

const reducer = (accumulator, currentValue) => {
    if (currentValue[0].toUpperCase() != 'F') {
        accumulator.push(currentValue.toUpperCase());
        return accumulator;
    }
    return accumulator;
}

function getQuotes() {
    // const returnedObject = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
    // return returnedObject.body;

    return {
        "character": "Professor Farnsworth",
        "quote": "I'm sure Bender has just made some cunning remark, but he doesn't know I taped\nover his soap operas to record this message.",
        "image": "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png"
    }
}

module.exports = { getName, copyAndPush, capitalizeAndFilter, getQuotes };