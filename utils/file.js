const fs = require('fs');
const filePath = require('../database.json');


async function readFile() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error reading data: ' + error.message);
    }
}


async function writeData(data) {
    try {
        const data = await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error reading data: ' + error.message);
    }
}

module.exports = {
    readData,
    writeData
};

