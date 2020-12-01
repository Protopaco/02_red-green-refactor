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

const getQuotes = async () => {
    const returnedObject = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');

    const { body: [{ character: name, quote: text, image }] } = returnedObject;
    return { name, text, image };

}

module.exports = { getName, copyAndPush, capitalizeAndFilter, getQuotes };