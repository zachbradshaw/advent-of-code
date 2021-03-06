const crypto = require('crypto');

const leadingZeroHash = (secretKey, leadingZeros) => {
    let number = 0;
    let output = '';
    const regex = new RegExp(`^${leadingZeros}`);
    while (!output.match(regex)) {
        const md5 = crypto.createHash('md5');
        number++;
        md5.update(secretKey + number, 'utf8');
        output = md5.digest('hex');
    }

    return number;
};

module.exports = leadingZeroHash;
