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

module.exports = { getName, copyAndPush, capitalizeAndFilter };