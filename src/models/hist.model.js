const mockData = require('./mock-data.json');
const crypto = require('crypto');

/**
 * This whole Model is just an abstraction of a real model from and ORM such as Mongoose
 */

const MockObjectId = () => crypto.createHash('md5')
    .update(new Date().toString())
    .digest('hex');

const data = mockData.hist;

function find() {
    return data;
}

function insert({ date, hist, name }) {
    const newRisk = {
        id: MockObjectId(),
        date,
        hist,
        name
    };

    data.push(newRisk);

    return newRisk;
}

module.exports = {
    find,
    insert
};
