function getName({ name }) {
    return name;
};

function copyAndPush(array, value) {
    array.push(value);
    return array;
}

module.exports = { getName, copyAndPush };