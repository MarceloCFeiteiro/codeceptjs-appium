var random_number = require('random-number');

const getCode = () => {
    var opt = { min: 0, max: 1000, integer: true };
    return (random_number(opt));
}

exports.getCode = getCode;