const md5 = require('md5');

module.exports = {
    hash: (text) => {
        return md5(text);
    }
}