var grove = require('jsupm_grove');
var thermo = new grove.GroveTemp(1);

function readThermo() {
    return thermo.value();
}

function isAbove(target) {
    return readThermo() >= target;
}

exports.read = readThermo;
exports.isAbove = isAbove;