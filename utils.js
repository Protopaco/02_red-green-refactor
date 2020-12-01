function getName({ name }) {
    return name;
};

function copyAndPush(array, value) {
    return [...array, value];
}

module.exports = { getName, copyAndPush };