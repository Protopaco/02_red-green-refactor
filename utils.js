function getName({ name }) {
    return name;
};

function copyAndPush(array, value) {
    return [...array, value];
};

function capitalizeAndFilter(array) {

    let returnArray = [];
    for (let string of array) {
        let upperCaseString = string.toUpperCase();
        if (upperCaseString[0] != 'F') {
            returnArray.push(upperCaseString);
        }
    }

    return returnArray;
};

module.exports = { getName, copyAndPush, capitalizeAndFilter };