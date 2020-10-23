const crypto = require('crypto');
const mockData = require('./mock-data.json');

const MockObjectId = () => crypto.createHash('md5')
    .update(new Date().toString())
    .digest('hex');

const data = mockData.informs;

function find() {
    return data;
}

function insert(value) {
    const newInform = {
        value
    };

    data.push(value);

    return newInform;
}

module.exports = {
    find,
    insert
};
