const crypto = require('crypto');

function createHash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
  }

module.exports = createHash